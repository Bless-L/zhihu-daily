const request = require('sync-request');
const fs = require("fs");
const cheerio = require("cheerio");
const rq = require("request")
const path = require("path")
const Bagpipe = require('bagpipe')

var bagpipe = new Bagpipe(3)
var count = 1;

//const types = ['ice_cream', 'lemonade', 'jamon', 'meat', 'fries', 'ham']
const types = ['hot_dog']
//const url = `http://pngimg.com/imgs/food/${type}/index4.html`

function getAllImg (types) {
  let allImgs = []
  types.forEach((type) => {
    for (let i = 0; i < 6; i++) {
      const url = `http://pngimg.com/imgs/food/${type}/index${i === 0 ? '' : i}.html`
      try {
        let res = request('GET', url)
        let body = res.getBody('utf8')
        var $ = cheerio.load(body)
        const imgArr = getImgUrls($, type, i)
        allImgs = allImgs.concat(imgArr)
      } catch (err) {
        console.error(err)
      }
    }
  })

  for (let i = 0; i < allImgs.length; i++) {
    console.log(`正在下载第${i + 1}张图片`, allImgs[i].url)
    bagpipe.push(writeImg, allImgs[i], (err, data) => {
      console.log("["+ count++ +"]: " + data);
    })
  }
}

function getImgUrls($, type, times) {
  const imgArr = []
  $('.png_png img').each((i, elem) => {
    let obj = {
      url: `http://pngimg.com${$(elem).attr('data-cfsrc')}`,
      type: type,
      i: times * 20 + i + 1
    }
    imgArr.push(obj)
  })
  return imgArr
}

function writeImg(imgObj, callback) {
  const { url, type, i } = imgObj
  console.log(`正在写入${type} 第${i}张图片`)
  let src = path.basename(url)
  let folder = path.join(__dirname, 'images', type)

  let isFold = fs.existsSync(folder)
  !isFold && fs.mkdirSync(folder)
  const dest = path.join(folder, src)

  rq.head(url, (err, res, body) => {
    rq(url).pipe(fs.createWriteStream(dest)).on('close', function() {
      callback(null, dest)
      console.log(`写入第${i}张图片成功`)
    });
  })
}

getAllImg(types)