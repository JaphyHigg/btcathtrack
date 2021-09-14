console.log("%cWelcome to the BTC ATH Track console", "color:#B05D23;text-decoration:underline;font-weight:bold;");
let curList = [
    ["usd"],
    ["eur"],
    ["jpy"], 
    ["gbp"],
    ["aud"],
    ["cad"],
    ["chf"],
    ["cny"],
    ["hkd"],
    ["nzd"],
    ["sek"],
    ["krw"],
    ["sgd"],
    ["nok"],
    ["mxn"],
    ["inr"],
    ["rub"],
    ["zar"],
    ["try"],
    ["brl"],
    ["twd"]
];
let curSymb = {
    usd: "$",
    eur: "€",
    jpy: "¥", 
    gbp: "£",
    aud: "$",
    cad: "$",
    chf: "CHF",
    cny: "¥",
    hkd: "$",
    nzd: "$",
    sek: "KR",
    krw: "₩",
    sgd: "$",
    nok: "KR",
    mxn: "$",
    inr: "₹",
    rub: "₽",
    zar: "R",
    try: "₺",
    brl: "R$",
    twd: "NT$"
};
async function update() {
    function getCur(cur) {
        let symbol = curSymb[cur];
        var xhReq = new XMLHttpRequest();
        const url = ("https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=" + cur);
        xhReq.open("GET", url, false);
        xhReq.send(null);
        var curData = JSON.parse(xhReq.responseText);
        const date = curData[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
        function updateContent() {
            const btcCur = document.getElementById("btc" + cur);
            const btcCurAth = document.getElementById(cur + "ath");
            const curPerc = document.getElementById(cur + "Perc");
            btcCur.classList.remove("change");
            if (btcCur.innerText !== "1 BTC = " + symbol + curData[0].current_price.toLocaleString()) {
                btcCur.innerText = "1 BTC = " + symbol + curData[0].current_price.toLocaleString();
                btcCur.classList.add("change");
            };
            btcCurAth.innerText = "ATH: " + symbol + curData[0].ath.toLocaleString() + " on " + ndate;
            curPerc.innerText = "Difference from ATH: " + curData[0].ath_change_percentage.toFixed(2) + "%";
            let curYesNo = document.getElementById(cur + "YesNo");
            if (curData[0].ath === curData[0].high_24h) {
                curYesNo.innerText = "YES";
                curYesNo.className = "yes";
            } else {
                curYesNo.innerText = "NO";
                curYesNo.className = "no";
            };
        };
        updateContent();
    };
    for (var i = 0; i < curList.length; i++) {
        getCur(curList[i]);
    };
};
update();
setInterval(update, 30000);