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
    btcusd.innerText = "Current Price: $" + usdData;
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
    btceur.innerText = "Current Price: €" + eurData;
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
    btcjpy.innerText = "Current Price: ¥" + jpyData;
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
    btcgbp.innerText = "Current Price: £" + gbpData;
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
    console.log("AUD: " + audData);
    const btcaud = document.getElementById("btcaud");
    btcaud.innerText = "Current Price: " + audData;
});