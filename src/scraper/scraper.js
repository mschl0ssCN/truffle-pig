const puppeteer = require("puppeteer-extra");
const stealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(stealthPlugin());
const chalk = require("chalk");


const error = chalk.bold.red;



const scrape = async(links) => {
        try{
            let browser = await puppeteer.launch({ headless: false, devtools: true });
            let page = await browser.newPage();
            page.on('console', msg => {
                for (let y = 0; y < msg.args().length; y++) {
                    console.log(msg.args()[y]);
                }
            });
            let htmls = [];
            let errorArrs = []
            for (let i = 0; i < links.length; i++){
                let link = links[i];
                try{
                    await page.goto(link);
                    await page.waitForSelector('body');
                    let search = await page.content();
                    await page.$x('//script[contains(text(), "")]');
                    let providers = []
                    let dr_providers = []
                    let doc = page
                    let site = await doc.evaluate(() => {
                        let arr = [];
                        if (document.evaluate('//script[contains(text(), "//plugin.tradepending.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            arr.push("TradePending")

                        }
                        if (document.evaluate('//script[contains(text(), "carnow")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("CarNow")
                        }
                        if (document.evaluate('//script[contains(text(), "carNow")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("CarNow")
                        }
                        if (document.evaluate('//script[contains(text(), "contactatonce")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("ContactAtOnce")
                        }
                        if (document.evaluate('//script[contains(text(), "openGub")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Gubagoo")
                        }
                        if (document.evaluate('//script[contains(text(), "fusionZONE")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("fusionZONE")
                        }
                        
                        if (document.evaluate('//script[contains(text(), "dealeron")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("DealerOn")
                        }
                        if (document.evaluate('//script[contains(text(), "teamvelocity")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Team Velocity")
                        }
                        if (document.evaluate('//script[contains(text(), "roadster")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Roadster")
                        }
                        if (document.evaluate('//script[contains(text(), "strolid")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Strolid")
                        }
                        if (document.evaluate('//script[contains(text(), "sincro")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Sincro")
                        }
                        if (document.evaluate('//script[contains(text(), "autoleadstar")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("AutoLeadStar")
                        }
                        if (document.evaluate('//script[contains(@src, "gubagoo")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Gubagoo")
                        }
                        if (document.evaluate('//a[contains(@href, "kbb.com/instant-cash-offer")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("KBB ICO")
                        }
                        if (document.evaluate('//a[contains(text(), "Shop Click Drive")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Shop Click Drive")
                        }
                        if (document.evaluate('//a[contains(@href, "/webbuy/")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("WebBuy")
                        }
                        if (document.evaluate('//a[contains(@href, "/kbb-free-trade-values")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("KBB Trade Values")
                        }
                        if (document.evaluate('//script[contains(text(), "gaId")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Google Analytics")
                        }
                        if (document.evaluate('//link[contains(@href, "google-analytics.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Google Analytics")
                        }
                        if (document.evaluate('//script[contains(text(), "tagrail.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("TagRail")
                        }
                        
                        if (document.evaluate('//script[contains(text(), "connectedstore")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("CDK ConnectedStore")
                        }

                        if (document.evaluate('//script[contains(@src, "dealer.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("dealer.com")
                        }
                        if (document.evaluate('//script[contains(@src, "dealerinspire.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("DealerInspire")
                        }
                        if (document.evaluate('//script[contains(@src, "conversations.dealerinspire.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("DealerInspire Conversations")
                        }
                        if (document.evaluate('//script[contains(@src, "contactatonce")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("ContactAtOnce")
                        }
                        if (document.evaluate('//script[contains(@src, "carcodesms")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("CarCodeSMS")
                        }
                        if (document.evaluate('//script[contains(@src, "carchat24")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("CarChat24")
                        }
                        if (document.evaluate('//script[contains(@src, "edmunds")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Edmunds")
                        }
                        if (document.evaluate('//script[contains(@src, "carnow")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("CarNow")
                        }
                        if (document.evaluate('//script[contains(@src, "gubagoo")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Gubagoo")
                        }
                        if (document.evaluate('//script[contains(@src, "zmotauto.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("ZMOT")
                        }
                        if (document.evaluate('//script[contains(@src, "activengage")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("activEngage")
                        }
                        if (document.evaluate('//script[contains(@src, "chatpath")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("ChatPath")
                        }
                        if (document.evaluate('//script[contains(@src, "dealereprocesschat.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Dealer eProcess Chat")
                        }
                        if (document.evaluate('//script[contains(@src, "dealereprocess.org")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Dealer eProcess")
                        }
                        if (document.evaluate('//script[contains(@src, "strolid")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Strolid")
                        }
                        if (document.evaluate('//script[contains(@src, "thelivechatsoftware.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("LiveAdmins")
                        }
                        if (document.evaluate('//script[contains(@src, "engagetosell.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("EngageToSell")
                        }
                        if (document.evaluate('//script[contains(@src, "clientconnexion")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Client ConneXion")
                        }
                        if (document.evaluate('//script[contains(@src, "chatchasers")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("Chat Chasers")
                        }
                        if (document.evaluate('//script[contains(@src, "podium")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            console.log("PODIUM FOUND")
                        arr.push("Podium")
                        }
                        if (document.evaluate('//script[contains(@src, "tradepending")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("TradePending")
                        }
                        if (document.evaluate('//script[contains(@src, "motocommerce")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("MotoCommerce")
                        }
                        if (document.evaluate('//script[contains(@src, "fatwin")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                        arr.push("FATWIN / PERQ")
                        }
                        if (document.evaluate('//script[contains(@src, "autofi")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            arr.push("AutoFi")
                        }
                        return arr;
                    })
                providers = site;
                let uniqueProviders = providers.filter(function(item, pos){
                    return providers.indexOf(item) == pos
                })
                providers = uniqueProviders;
                let srp_url = ""
                if (providers.includes("DealerInspire")){
                    srp_url = link + "/new-vehicles/"
                } else if (providers.includes("Dealer eProcess")){
                    srp_url = link + "/search/new/"

                } else if (providers.includes("fusionZONE")){
                    srp_url = link + "/used-cars-for-sale"

                } else if (providers.includes("DealerOn")){
                    srp_url = link + "/used-cars-for-sale"

                } else if (providers.includes("Team Velocity")){
                    srp_url = link + "/inventory/new"

                } else if (providers.includes("Sincro")){
                    srp_url = link + "/new-inventory/index.htm"

                }
                else if (providers.includes("Gu")){
                    srp_url = link + "/new-vehicles/"

                }
                else if (providers.includes("dealer.com")){
                    srp_url = link + "/new-inventory/index.htm"

                }
                
                if (srp_url){
                    try {
                    await page.goto(srp_url);
                    await page.waitForSelector('body');
                    let drs = await page.evaluate(() => {
                        debugger;
                        let second = []
                        if (document.evaluate('//script[contains(text(), "roadster")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            second.push("Roadster")
                        }
                        if (document.evaluate('//script[contains(text(), "prodigy")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            second.push("Prodigy")
                        }
                        if (document.evaluate('//script[contains(text(), "darwin")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            second.push("Darwin")
                        }
                        if (document.evaluate('//script[contains(@src, "StratosLoader.min.js")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            second.push("Darwin")
                        }
                        if (document.evaluate('//script[contains(@src, "drivemotors.com")]', document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
                            second.push("Modal")
                        }
                        if (providers.includes("Gubagoo")){
                            let gubagoo_scripts = document.querySelectorAll('script[src*=gubagoo]')
                            if (gubagoo_scripts.length > 0){
                            gubagoo_script = gubagoo_scripts[0].attributes["src"].value
                            // open this webpage
                            if (gubagoo_loader_js.toString().includes('cbo_enabled:!0')){
                                second.push("Gubagoo DR")
                            }
                            }
                        
                        }
                        return second
                    })
                    dr_providers = drs
                        
                    } catch(error){
                        debugger;
                        errorArrs.push({[srp_url]: error})
                    }
                    
                }


                    let object = {
                        "providers": providers,
                        "dr_providers": dr_providers
                    }
                    htmls.push({[link]: object});
                } catch (error){
                    errorArrs.push({[link]: error})
                }

            
            }
                
            await browser.close();

            return [htmls, errorArrs]
    } catch (err) {
        console.log(error); 
    }
}

module.exports = scrape;