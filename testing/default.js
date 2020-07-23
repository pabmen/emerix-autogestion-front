const puppeteer = require('puppeteer');

const PAGES = ['', 'login_0.html', 'login_1.html', 'login_2.html', 'home.html', 'invoice.html', 'deals_0.html', 'deals_1.html', 'pay_0.html', 'pay_1.html', 'pay_2.html']

const VIEWPORTS = [
    {
        name: 'MOBILE',
        viewport: {
            width: 320,
            height: 480
        },
    }, {
        name: 'TABLET',
        viewport: {
            width: 1024,
            height: 768
        },
    }, {
        name: 'DESKTOP',
        viewport: {
            width: 1280,
            height: 720
        },
    }
]


;(async () => {
    
    const browser = await puppeteer.launch();
    VIEWPORTS.forEach(async (viewport) => {
        PAGES.forEach( async (curPage) => {
            const page = await browser.newPage();
            page.setViewport(viewport.viewport);

            console.log(`http://localhost:8080/${curPage}`)
            await page.goto(`http://localhost:8080/${curPage}`);
            await page.screenshot({ path: __dirname + `/shots/${viewport.name}_${curPage}.png` });
        })
        
    })
    
    await browser.close();
})();