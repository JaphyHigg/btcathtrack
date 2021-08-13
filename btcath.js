console.log("%cWelcome to the BTC Currency Compare Console", "color:green;text-decoration:underline;font-weight:bold;");

async function update() {

    //US Dollar
    async function getUsdBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.usd;
        return btc;
    };
    const usd = async() => {
        const usdData = await getUsdBtcPrice();
        return usdData;
    };
    usd().then(usdData => {
        console.log("USD: " + usdData);
        const btcusd = document.getElementById("btcusd");
        btcusd.innerText = "1 BTC = $" + usdData.toLocaleString();
    });

    //Euro
    async function getEurBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.eur;
        return btc;
    };
    const eur = async() => {
        const usdData = await getEurBtcPrice();
        return usdData;
    };
    eur().then(eurData => {
        console.log("EUR: 💶" + eurData);
        const btceur = document.getElementById("btceur");
        btceur.innerText = "1 BTC = €" + eurData.toLocaleString();
    });

    //Yen
    async function getJpyBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=jpy");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.jpy;
        return btc;
    };
    const jpy = async() => {
        const jpyData = await getJpyBtcPrice();
        return jpyData;
    };
    jpy().then(jpyData => {
        console.log("JPY: 💴" + jpyData);
        const btcjpy = document.getElementById("btcjpy");
        btcjpy.innerText = "1 BTC = ¥" + jpyData.toLocaleString();
    });

    //Pound Sterling
    async function getGbpBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.gbp;
        return btc;
    };
    const gbp = async() => {
        const gbpData = await getGbpBtcPrice();
        return gbpData;
    };
    gbp().then(gbpData => {
        console.log("GBP: " + gbpData);
        const btcgbp = document.getElementById("btcgbp");
        btcgbp.innerText = "1 BTC = £" + gbpData.toLocaleString();
    });

    //Aus Dollar
    async function getAudBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=aud");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.aud;
        return btc;
    };
    const aud = async() => {
        const audData = await getAudBtcPrice();
        return audData;
    };
    aud().then(audData => {
        console.log("AUD: $" + audData);
        const btcaud = document.getElementById("btcaud");
        btcaud.innerText = "1 BTC = $" + audData.toLocaleString();
    });

    //Canadian Dollar
    async function getCadBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.cad;
        return btc;
    };
    const cad = async() => {
        const cadData = await getCadBtcPrice();
        return cadData;
    };
    cad().then(cadData => {
        console.log("CAD: $" + cadData);
        const btccad = document.getElementById("btccad");
        btccad.innerText = "1 BTC = $" + cadData.toLocaleString();
    });

    //Swiss Franc
    async function getChfBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=chf");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.chf;
        return btc;
    };
    const chf = async() => {
        const chfData = await getChfBtcPrice();
        return chfData;
    };
    chf().then(chfData => {
        console.log("CHF: CHF" + chfData);
        const btcchf = document.getElementById("btcchf");
        btcchf.innerText = "1 BTC = CHF" + chfData.toLocaleString();
    });

    //Chinese Yuan (Renminbi)
    async function getCnyBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cny");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.cny;
        return btc;
    };
    const cny = async() => {
        const cnyData = await getCnyBtcPrice();
        return cnyData;
    };
    cny().then(cnyData => {
        console.log("CNY: ¥" + cnyData);
        const btccny = document.getElementById("btccny");
        btccny.innerText = "1 BTC = ¥" + cnyData.toLocaleString();
    });

    //Hong Kong Dollar
    async function getHkdBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=hkd");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.hkd;
        return btc;
    };
    const hkd = async() => {
        const hkdData = await getHkdBtcPrice();
        return hkdData;
    };
    hkd().then(hkdData => {
        console.log("HKD: $" + hkdData);
        const btchkd = document.getElementById("btchkd");
        btchkd.innerText = "1 BTC = $" + hkdData.toLocaleString();
    });

    //New Zealand Dollar
    async function getNzdBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=nzd");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.nzd;
        return btc;
    };
    const nzd = async() => {
        const nzdData = await getNzdBtcPrice();
        return nzdData;
    };
    nzd().then(nzdData => {
        console.log("NZD: $" + nzdData);
        const btcnzd = document.getElementById("btcnzd");
        btcnzd.innerText = "1 BTC = $" + nzdData.toLocaleString();
    });

    //Swedish Krona
    async function getSekBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=sek");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.sek;
        return btc;
    };
    const sek = async() => {
        const sekData = await getSekBtcPrice();
        return sekData;
    };
    sek().then(sekData => {
        console.log("SEK: kr" + sekData);
        const btcsek = document.getElementById("btcsek");
        btcsek.innerText = "1 BTC = KR" + sekData.toLocaleString();
    });
    
    //South Korean Won
    async function getKrwBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=krw");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.krw;
        return btc;
    };
    const krw = async() => {
        const krwData = await getKrwBtcPrice();
        return krwData;
    };
    krw().then(krwData => {
        console.log("KRW: ₩" + krwData);
        const btckrw = document.getElementById("btckrw");
        btckrw.innerText = "1 BTC = ₩" + krwData.toLocaleString();
    });

    //Singapore Dollar
    async function getSgdBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=sgd");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.sgd;
        return btc;
    };
    const sgd = async() => {
        const sgdData = await getSgdBtcPrice();
        return sgdData;
    };
    sgd().then(sgdData => {
        console.log("SGD: $" + sgdData);
        const btcsgd = document.getElementById("btcsgd");
        btcsgd.innerText = "1 BTC = $" + sgdData.toLocaleString();
    });

    //Norwegian Kroner
    async function getNokBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=nok");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.nok;
        return btc;
    };
    const nok = async() => {
        const nokData = await getNokBtcPrice();
        return nokData;
    };
    nok().then(nokData => {
        console.log("NOK: KR" + nokData);
        const btcnok = document.getElementById("btcnok");
        btcnok.innerText = "1 BTC = KR" + nokData.toLocaleString();
    });

    //Mexican Peso
    async function getMxnBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=mxn");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.mxn;
        return btc;
    };
    const mxn = async() => {
        const mxnData = await getMxnBtcPrice();
        return mxnData;
    };
    mxn().then(mxnData => {
        console.log("MXN: $" + mxnData);
        const btcmxn = document.getElementById("btcmxn");
        btcmxn.innerText = "1 BTC = $" + mxnData.toLocaleString();
    });

    //Indian Rupee
    async function getInrBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.inr;
        return btc;
    };
    const inr = async() => {
        const inrData = await getInrBtcPrice();
        return inrData;
    };
    inr().then(inrData => {
        console.log("INR: ₹" + inrData);
        const btcinr = document.getElementById("btcinr");
        btcinr.innerText = "1 BTC = ₹" + inrData.toLocaleString();
    });

    //Russian Ruble
    async function getRubBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=rub");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.rub;
        return btc;
    };
    const rub = async() => {
        const rubData = await getRubBtcPrice();
        return rubData;
    };
    rub().then(rubData => {
        console.log("RUB: ₽" + rubData);
        const btcrub = document.getElementById("btcrub");
        btcrub.innerText = "1 BTC = ₽" + rubData.toLocaleString();
    });

    //South African Rand
    async function getZarBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=zar");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.zar;
        return btc;
    };
    const zar = async() => {
        const zarData = await getZarBtcPrice();
        return zarData;
    };
    zar().then(zarData => {
        console.log("ZAR: R" + zarData);
        const btczar = document.getElementById("btczar");
        btczar.innerText = "1 BTC = R" + zarData.toLocaleString();
    });

    //Turkish Lira
    async function getLiraBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=try");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.try;
        return btc;
    };
    const lira = async() => {
        const liraData = await getLiraBtcPrice();
        return liraData;
    };
    lira().then(liraData => {
        console.log("TRY: ₺" + liraData);
        const btctry = document.getElementById("btctry");
        btctry.innerText = "1 BTC = ₺" + liraData.toLocaleString();
    });

    //Brazilian Real
    async function getBrlBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.brl;
        return btc;
    };
    const brl = async() => {
        const brlData = await getBrlBtcPrice();
        return brlData;
    };
    brl().then(brlData => {
        console.log("BRL: R$" + brlData);
        const btcbrl = document.getElementById("btcbrl");
        btcbrl.innerText = "1 BTC = R$" + brlData.toLocaleString();
    });

    //New Taiwan Dollar
    async function getTwdBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=twd");
        const resJ = await response.json();
        const price = await resJ;
        const btc = await price.bitcoin.twd;
        return btc;
    };
    const twd = async() => {
        const twdData = await getTwdBtcPrice();
        return twdData;
    };
    twd().then(twdData => {
        console.log("TWD: NT$" + twdData);
        const btctwd = document.getElementById("btctwd");
        btctwd.innerText = "1 BTC = NT$" + twdData.toLocaleString();
    });
};
update();
setInterval(update, 100000);
