
var Scraper = require('images-scraper');
const download = require('image-downloader')
const google = new Scraper({
    puppeteer:{
        headless:false,
    }
})
async function scrape(){
    var limit=10;
    const results = await google.scrape('monuments', limit);
    while(limit--){
        var options={
            url:results[limit].url,
            dest: "./images"
        }
        download.image(options).then(({filename})=>{
            console.log("Saved to", filename)
        })
        .catch((err)=>console.log(err))
    }
    console.log('results', results[0].url);
}
scrape();