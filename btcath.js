console.log("%cWelcome to the BTC Currency Compare Console", "color:green;text-decoration:underline;font-weight:bold;");

// fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
//     method: "GET",
// })
//     .then(response => {
//         console.log(response)
//         console.log(response.value)
//         console.log(response.bitcoin)
//         return response.json()
//     })
//     .then(usdData => console.log(usdData));


// fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
//         method: "GET",
//     })
//     .then((response) => response.json())
//     .then((price) => {
//         console.log(price.bitcoin.usd);
//     });

async function update() {

    //US Dollar
    async function getUsdBtcPrice() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        // console.log(response);
        const resJ = await response.json();
        // console.log(resJ);
        const price = await resJ;
        // console.log(price)
        const btc = await price.bitcoin.usd;
        // console.log(btc);
        return btc;
    };

    // async function displayBTC() {
    //     let usdbtc = getbtcPrice().then();
    //     console.log("USD: $" + usdbtc);
    // };
    // displayBTC();

    const usd = async() => {
        const usdData = await getUsdBtcPrice();
        // console.log(usdData);
        return usdData;
    };
    usd().then(usdData => {
        // console.log(usdData);
        console.log("USD: " + usdData);
        // return usdData;
        const btcusd = document.getElementById("btcusd");
        btcusd.innerText = "1 BTC = $" + usdData;
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
        btceur.innerText = "1 BTC = €" + eurData;
    });
    // getEur();
    // setInterval(getEur, 10000);

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
        btcjpy.innerText = "1 BTC = ¥" + jpyData;
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
        btcgbp.innerText = "1 BTC = £" + gbpData;
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
        btcaud.innerText = "1 BTC = $" + audData;
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
        btccad.innerText = "1 BTC = $" + cadData;
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
        btcchf.innerText = "1 BTC = CHF" + chfData;
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
        btccny.innerText = "1 BTC = ¥" + cnyData;
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
        btchkd.innerText = "1 BTC = $" + hkdData;
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
        btcnzd.innerText = "1 BTC = $" + nzdData;
    });
    

};
update();
setInterval(update, 100000);
