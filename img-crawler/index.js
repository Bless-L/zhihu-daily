const request = require('sync-request');
const fs = require("fs");
const cheerio = require("cheerio");
const http = require("http")
const path = require("path")

const type = 'bread'
const types = ['beer', 'black_pepper', 'Bonbon', 'bun', 'burger_sandwich']
const url = `http://pngimg.com/imgs/food/${type}/index4.html`

function getAllImg () {
  types.forEach((type) => {
    for (let i = 0; i < 6; i++) {
      const url = `http://pngimg.com/imgs/food/${type}/index${i === 0 ? '' : i}.html`
      try {
        let res = request('GET', url)
        let body = res.getBody('utf8')
        var $ = cheerio.load(body)
        getImg($, type)
      } catch (err) {
        console.error(err)
      }
    }
  })
}

/*.end(function(err, sres) {
                // 常规的错误处理
                if (err) {
                  console.log(err)
                  return null;
                }
                var $ = cheerio.load(sres.text);
                getImg($)
              })*/

function getImg($, type) {
  const imgUrls = []
  $('.png_png img').each((i, elem) => {
    imgUrls.push(`http://pngimg.com${$(elem).attr('data-cfsrc')}`)
  })
  imgUrls.forEach((url, i) => {
    console.log(`正在下载第${i + 1}张图片  `, url)

    var res = request('GET', url)
    writeImg(res.body)
  })
}
function writeImg(res) {
  console.log(`正在写入第${i + 1}张图片  `)
  let src = url.split('/')
  src = src[src.length - 1]

  let folder = path.join(__dirname, 'images', type)

  let isFold = fs.existsSync(folder)
  !isFold && fs.mkdirSync(folder)
  fs.writeFileSync(path.join(folder, src), res, function(err){
    if(err){
      console.log("down fail")
    }
    console.log(`写入第${i + 1}张图片成功`)
  })
}
getAllImg()