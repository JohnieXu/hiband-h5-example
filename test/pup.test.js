const puppeteer = require("puppeteer");
const path = require("path");

let count = 0;
let requestCount = 10;
console.log(`访问${requestCount}次之后将自动停止`)

const launchBroswer = async () => {
  return await puppeteer.launch();
}

const func = async () => {
  try {
    count++;
    console.log(count);
    const browser = await launchBroswer();
    const page = await browser.newPage();
    // await page.goto('http://admin.card.xyk51.cn/passport/login');
    await page.goto("https://github.com/JohnieXu/svelte-weui");
    // await page.screenshot({
    //     path: path.resolve(__dirname, "../screenshots/login.png")
    // });
    await page.close();
    if (count < requestCount) {
      await func();
    }
    process.exit();
  } catch(e) {
    console.log(e);
  }
};

func();

// setInterval(func, 3000);
