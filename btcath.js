console.log("%cWelcome to the BTC Currency Compare Console", "color:green;text-decoration:underline;font-weight:bold;");


async function update() {

    //US Dollar
    function getUSD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=usd", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcusd = document.getElementById("btcusd");
            const usdath = document.getElementById("usdath");
            const perc = document.getElementById("usdPerc");
            btcusd.classList.remove("change");
            if (btcusd.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btcusd.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btcusd.classList.add("change");
            };
            usdath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                usdYesNo.innerText = "YES";
                usdYesNo.className = "yes";
            } else {
                usdYesNo.innerText = "NO";
                usdYesNo.className = "no";
            };
        };
        updateContent();
    };
    getUSD();

    //Euro
    function getEUR(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=eur", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btceur = document.getElementById("btceur");
            const eurath = document.getElementById("eurath");
            const perc = document.getElementById("eurPerc")
            btceur.classList.remove("change");
            if (btceur.innerText !== "1 BTC = €" + data[0].current_price.toLocaleString()) {
                btceur.innerText = "1 BTC = €" + data[0].current_price.toLocaleString();
                btceur.classList.add("change");
            };
            eurath.innerText = "ATH: €" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                eurYesNo.innerText = "YES";
                eurYesNo.className = "yes";
            } else {
                eurYesNo.innerText = "NO";
                eurYesNo.className = "no";
            };
        };
        updateContent();
    };
    getEUR();

    //Yen
    function getJPY(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=jpy", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcjpy = document.getElementById("btcjpy");
            const jpyath = document.getElementById("jpyath");
            const perc = document.getElementById("jpyPerc")
            btcjpy.classList.remove("change");
            if (btcjpy.innerText !== "1 BTC = ¥" + data[0].current_price.toLocaleString()) {
                btcjpy.innerText = "1 BTC = ¥" + data[0].current_price.toLocaleString();
                btcjpy.classList.add("change");
            };
            jpyath.innerText = "ATH: ¥" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                jpyYesNo.innerText = "YES";
                jpyYesNo.className = "yes";
            } else {
                jpyYesNo.innerText = "NO";
                jpyYesNo.className = "no";
            };
        };
        updateContent();
    };
    getJPY();

    //Pound Sterling
    function getGBP(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=gbp", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcgbp = document.getElementById("btcgbp");
            const perc = document.getElementById("gbpPerc")
            let gbpath = document.getElementById("gbpath");
            btcgbp.classList.remove("change");
            if (btcgbp.innerText !== "1 BTC = £" + data[0].current_price.toLocaleString()) {
                btcgbp.innerText = "1 BTC = £" + data[0].current_price.toLocaleString();
                btcgbp.classList.add("change");
            }
            gbpath.innerText = "ATH: £" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                gbpYesNo.innerText = "YES";
                gbpYesNo.className = "yes";
            } else {
                gbpYesNo.innerText = "NO";
                gbpYesNo.className = "no";
            };
        };
        updateContent();
    };
    getGBP();

    //Aus Dollar
    function getAUD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=aud", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcaud = document.getElementById("btcaud");
            const perc = document.getElementById("audPerc")
            let audath = document.getElementById("audath");
            btcaud.classList.remove("change");
            if (btcaud.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btcaud.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btcaud.classList.add("change");
            }
            audath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                audYesNo.innerText = "YES";
                audYesNo.className = "yes";
            } else {
                audYesNo.innerText = "NO";
                audYesNo.className = "no";
            };
        };
        updateContent();
    };
    getAUD();

    //Canadian Dollar
    function getCAD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=cad", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btccad = document.getElementById("btccad");
            let cadath = document.getElementById("cadath");
            const perc = document.getElementById("cadPerc")
            btccad.classList.remove("change");
            if (btccad.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btccad.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btccad.classList.add("change");
            };
            cadath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                cadYesNo.innerText = "YES";
                cadYesNo.className = "yes";
            } else {
                cadYesNo.innerText = "NO";
                cadYesNo.className = "no";
            };
        };
        updateContent();
    };
    getCAD();

    //Swiss Franc
    function getCHF(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=chf", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcchf = document.getElementById("btcchf");
            let chfath = document.getElementById("chfath");
            const perc = document.getElementById("chfPerc")
            btcchf.classList.remove("change");
            if (btcchf.innerText !== "1 BTC = CHF" + data[0].current_price.toLocaleString()) {
                btcchf.innerText = "1 BTC = CHF" + data[0].current_price.toLocaleString();
                btcchf.classList.add("change");
            };
            chfath.innerText = "ATH: CHF" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                chfYesNo.innerText = "YES";
                chfYesNo.className = "yes";
            } else {
                chfYesNo.innerText = "NO";
                chfYesNo.className = "no";
            };
        };
        updateContent();
    };
    getCHF();

    //Chinese Yuan (Renminbi)
    function getCNY(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=cny", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btccny = document.getElementById("btccny");
            let cnyath = document.getElementById("cnyath");
            const perc = document.getElementById("cnyPerc")
            btccny.classList.remove("change");
            if (btccny.innerText !== "1 BTC = ¥" + data[0].current_price.toLocaleString()) {
                btccny.innerText = "1 BTC = ¥" + data[0].current_price.toLocaleString();
                btccny.classList.add("change");
            };
            cnyath.innerText = "ATH: ¥" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                cnyYesNo.innerText = "YES";
                cnyYesNo.className = "yes";
            } else {
                cnyYesNo.innerText = "NO";
                cnyYesNo.className = "no";
            };
        };
        updateContent();
    };
    getCNY();


    //Hong Kong Dollar
    function getHKD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=hkd", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btchkd = document.getElementById("btchkd");
            let hkdath = document.getElementById("hkdath");
            const perc = document.getElementById("hkdPerc");
            btchkd.classList.remove("change");
            if (btchkd.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btchkd.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btchkd.classList.add("change");
            };
            hkdath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                hkdYesNo.innerText = "YES";
                hkdYesNo.className = "yes";
            } else {
                hkdYesNo.innerText = "NO";
                hkdYesNo.className = "no";
            };
        };
        updateContent();
    };
    getHKD();

    //New Zealand Dollar
    function getNZD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=nzd", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcnzd = document.getElementById("btcnzd");
            let nzdath = document.getElementById("nzdath");
            const perc = document.getElementById("nzdPerc")
            btcnzd.classList.remove("change");
            if (btcnzd.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btcnzd.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btcnzd.classList.add("change");
            };
            nzdath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                nzdYesNo.innerText = "YES";
                nzdYesNo.className = "yes";
            } else {
                nzdYesNo.innerText = "NO";
                nzdYesNo.className = "no";
            };
        };
        updateContent();
    };
    getNZD();


    //Swedish Krona
    function getSEK(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=sek", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcsek = document.getElementById("btcsek");
            let sekath = document.getElementById("sekath");
            const perc = document.getElementById("sekPerc")
            btcsek.classList.remove("change");
            if (btcsek.innerText !== "1 BTC = KR" + data[0].current_price.toLocaleString()) {
                btcsek.innerText = "1 BTC = KR" + data[0].current_price.toLocaleString();
                btcsek.classList.add("change");
            };
            sekath.innerText = "ATH: KR" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                sekYesNo.innerText = "YES";
                sekYesNo.className = "yes";
            } else {
                sekYesNo.innerText = "NO";
                sekYesNo.className = "no";
            };
        };
        updateContent();
    };
    getSEK();
    
    //South Korean Won
    function getKRW(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=krw", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btckrw = document.getElementById("btckrw");
            let krwath = document.getElementById("krwath");
            const perc = document.getElementById("krwPerc");
            btckrw.classList.remove("change");
            if (btckrw.innerText !== "1 BTC = ₩" + data[0].current_price.toLocaleString()) {
                btckrw.innerText = "1 BTC = ₩" + data[0].current_price.toLocaleString();
                btckrw.classList.add("change");
            };
            krwath.innerText = "ATH: ₩" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                krwYesNo.innerText = "YES";
                krwYesNo.className = "yes";
            } else {
                krwYesNo.innerText = "NO";
                krwYesNo.className = "no";
            };
        };
        updateContent();
    };
    getKRW();

    //Singapore Dollar
    function getSGD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=sgd", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcsgd = document.getElementById("btcsgd");
            let sgdath = document.getElementById("sgdath");
            const perc = document.getElementById("sgdPerc")
            btcsgd.classList.remove("change");
            if (btcsgd.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btcsgd.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btcsgd.classList.add("change");
            };
            sgdath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                sgdYesNo.innerText = "YES";
                sgdYesNo.className = "yes";
            } else {
                sgdYesNo.innerText = "NO";
                sgdYesNo.className = "no";
            };
        };
        updateContent();
    };
    getSGD();

    //Norwegian Kroner
    function getNOK(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=nok", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcnok = document.getElementById("btcnok");
            let nokath = document.getElementById("nokath");
            const perc = document.getElementById("nokPerc");
            btcnok.classList.remove("change");
            if (btcnok.innerText !== "1 BTC = KR" + data[0].current_price.toLocaleString()) {
                btcnok.innerText = "1 BTC = KR" + data[0].current_price.toLocaleString();
                btcnok.classList.add("change");
            };
            nokath.innerText = "ATH: KR" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                nokYesNo.innerText = "YES";
                nokYesNo.className = "yes";
            } else {
                nokYesNo.innerText = "NO";
                nokYesNo.className = "no";
            };
        };
        updateContent();
    };
    getNOK();

    //Mexican Peso
    function getMXN(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=mxn", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcmxn = document.getElementById("btcmxn");
            let mxnath = document.getElementById("mxnath");
            const perc = document.getElementById("mxnPerc");
            btcmxn.classList.remove("change");
            if (btcmxn.innerText !== "1 BTC = $" + data[0].current_price.toLocaleString()) {
                btcmxn.innerText = "1 BTC = $" + data[0].current_price.toLocaleString();
                btcmxn.classList.add("change");
            };
            mxnath.innerText = "ATH: $" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                mxnYesNo.innerText = "YES";
                mxnYesNo.className = "yes";
            } else {
                mxnYesNo.innerText = "NO";
                mxnYesNo.className = "no";
            };
        };
        updateContent();
    };
    getMXN();

    //Indian Rupee
    function getINR(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=inr", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcinr = document.getElementById("btcinr");
            let inrath = document.getElementById("inrath");
            const perc = document.getElementById("inrPerc");
            btcinr.classList.remove("change");
            if (btcinr.innerText !== "1 BTC = ₹" + data[0].current_price.toLocaleString()) {
                btcinr.innerText = "1 BTC = ₹" + data[0].current_price.toLocaleString();
                btcinr.classList.add("change");
            };
            inrath.innerText = "ATH: ₹" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                inrYesNo.innerText = "YES";
                inrYesNo.className = "yes";
            } else {
                inrYesNo.innerText = "NO";
                inrYesNo.className = "no";
            };
        };
        updateContent();
    };
    getINR();

    //Russian Ruble
    function getRUB(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=rub", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcrub = document.getElementById("btcrub");
            let rubath = document.getElementById("rubath");
            const perc = document.getElementById("rubPerc");
            btcrub.classList.remove("change");
            if (btcrub.innerText !== "1 BTC = ₽" + data[0].current_price.toLocaleString()) {
                btcrub.innerText = "1 BTC = ₽" + data[0].current_price.toLocaleString();
                btcrub.classList.add("change");
            };
            rubath.innerText = "ATH: ₽" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                rubYesNo.innerText = "YES";
                rubYesNo.className = "yes";
            } else {
                rubYesNo.innerText = "NO";
                rubYesNo.className = "no";
            };
        };
        updateContent();
    };
    getRUB();

    //South African Rand
    function getZAR(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=zar", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btczar = document.getElementById("btczar");
            let zarath = document.getElementById("zarath");
            const perc = document.getElementById("zarPerc");
            btczar.classList.remove("change");
            if (btczar.innerText !== "1 BTC = R" + data[0].current_price.toLocaleString()) {
                btczar.innerText = "1 BTC = R" + data[0].current_price.toLocaleString();
                btczar.classList.add("change");
            };
            zarath.innerText = "ATH: R" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                zarYesNo.innerText = "YES";
                zarYesNo.className = "yes";
            } else {
                zarYesNo.innerText = "NO";
                zarYesNo.className = "no";
            };
        };
        updateContent();
    };
    getZAR();

    //Turkish Lira
    function getTRY(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=try", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btctry = document.getElementById("btctry");
            let tryath = document.getElementById("tryath");
            const perc = document.getElementById("tryPerc");
            btctry.classList.remove("change");
            if (btctry.innerText !== "1 BTC = ₺" + data[0].current_price.toLocaleString()) {
                btctry.innerText = "1 BTC = ₺" + data[0].current_price.toLocaleString();
                btctry.classList.add("change");
            };
            tryath.innerText = "ATH: ₺" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                tryYesNo.innerText = "YES";
                tryYesNo.className = "yes";
            } else {
                tryYesNo.innerText = "NO";
                tryYesNo.className = "no";
            };
        };
        updateContent();
    };
    getTRY();

    //Brazilian Real
    function getBRL(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=brl", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btcbrl = document.getElementById("btcbrl");
            let brlath = document.getElementById("brlath");
            const perc = document.getElementById("brlPerc");
            btcbrl.classList.remove("change");
            if (btcbrl.innerText !== "1 BTC = R$" + data[0].current_price.toLocaleString()) {
                btcbrl.innerText = "1 BTC = R$" + data[0].current_price.toLocaleString();
                btcbrl.classList.add("change");
            };
            brlath.innerText = "ATH: R$" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                brlYesNo.innerText = "YES";
                brlYesNo.className = "yes";
            } else {
                brlYesNo.innerText = "NO";
                brlYesNo.className = "no";
            };
        };
        updateContent();
    };
    getBRL();


    //New Taiwan Dollar
    function getTWD(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=twd", false);
        xhReq.send(null);
        var data = JSON.parse(xhReq.responseText);
    
        const date = data[0].ath_date.split("T");
        let ndate = date[0].slice(5,10) + "-" + date[0].slice(0,4);
    
        function updateContent() {
            const btctwd = document.getElementById("btctwd");
            let twdath = document.getElementById("twdath");
            const perc = document.getElementById("twdPerc")
            btctwd.classList.remove("change");
            if (btctwd.innerText !== "1 BTC = NT$" + data[0].current_price.toLocaleString()) {
                btctwd.innerText = "1 BTC = NT$" + data[0].current_price.toLocaleString();
                btctwd.classList.add("change");
            };
            twdath.innerText = "ATH: NT$" + data[0].ath.toLocaleString() + " on " + ndate;
            perc.innerText = "Difference from ATH: " + data[0].ath_change_percentage.toFixed(2) + "%";
            if (data[0].ath === data[0].high_24h) {
                twdYesNo.innerText = "YES";
                twdYesNo.className = "yes";
            } else {
                twdYesNo.innerText = "NO";
                twdYesNo.className = "no";
            };
        };
        updateContent();
    };
    getTWD();

};
update();
setInterval(update, 30000);


