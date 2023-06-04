//---model---//
var SendingDataCalculationsClass = /** @class */ (function () {
    function SendingDataCalculationsClass(moneyNeed, amountOfYears, total) {
        this.moneyNeed = moneyNeed;
        this.amountOfYears = amountOfYears;
        this.total = total;
        this.uid = uid();
    }
    return SendingDataCalculationsClass;
}());
var saveDateArray = [];
//---model---//
var bankYahv = document.querySelector(".bankYahv");
var laomi = document.querySelector(".laomi");
var discud = document.querySelector(".discud");
var hapoalim = document.querySelector(".hapoalim");
var international = document.querySelector(".international");
var israelPost = document.querySelector(".israelPost");
var mercantil = document.querySelector(".mercantile");
//---controller---//
function getDateForm(evt) {
    try {
        evt.preventDefault();
        var moneyNeed = evt.target.elements.moneyNeed.value;
        var manyMonths = evt.target.elements.manyMonths.value;
        var manyMONthsMultiplay = manyMonths * 12;
        var total = moneyNeed / manyMONthsMultiplay;
        if (moneyNeed <= 150000) {
            bankYahv.innerHTML = "<div class=\"bankYahav\">\n        <div><img src=\"../photo/yahav.png\" alt=\"logoOfImg\"></div>\n        <div class=\"bankYahav__numberBankYahav\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D1\u05E0\u05E7: 4</div>\n        <div class=\"bankYahav__contactYahav\">*2505 :\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div class=\"bankYahav__afterInterest\">\u05E1\u05DB\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.7 + "</div>\n        </div>\n      ";
        }
        else if (moneyNeed <= 400000) {
            laomi.innerHTML = "<div class=\"bankLeumi\">  \n        <div><img src=\"../photo/leumi.png\" alt=\"logoOfImg\"></div>\n        <div class=\"bankLeumi__numberbBankLeumi\">\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 10</div>\n        <div class=\"bankLeumi__contactLeumi\">*5522 :\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 </div>\n        <div class=\"bankLeumi__afterInterestLeumi\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.6 + "</div>\n        </div>\n      ";
        }
        else if (moneyNeed <= 950000) {
            discud.innerHTML = "<div class=\"bankDiscud\">\n        <div><img src=\"../photo/diskont.png\" alt=\"logoOfImg\"></div>\n        <div class=\"bankDiscud__numberBankDiscud\">\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 11</div>\n        <div class=\"bankDiscud__contactDiscud\"> *6111 :\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div class=\"bankDiscud__afterInterestDiscud\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.5 + "</div> \n      </div> \n      ";
        }
        else if (moneyNeed <= 1300000) {
            hapoalim.innerHTML = "<div class=\"bankhapoalim\">\n        <div><img src=\"../photo/hapoalim.png\" alt=\"logoOfImg\"></div>\n        <div class=\"bankhapoalim__numberbankbankhapoalim\">\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 14</div>\n        <div class=\"bankhapoalim__contactbankhapoalim\">*2407 :\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div class=\"bankhapoalim__afterInteresthapoalim\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.3 + "</div>\n        </div>\n        ";
        }
        else if (moneyNeed <= 1650000) {
            israelPost.innerHTML = "<div class=\"bankIsraelPost\">\n        <div><img src=\"../photo/israelpost.png\" alt=\"logoOfImg\"></div>\n        <div class=\"bankIsraelPost__numberbankIsraelPost\">\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 12</div>\n        <div class=\"bankIsraelPost__contactbankIsraelPost\">*2401 :\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div class=\"bankIsraelPost__afterInterestIsraelPost\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.2 + "</div>\n        </div>\n        ";
        }
        else if (moneyNeed <= 2000000) {
            mercantil.innerHTML = "<div class=\"bankmercantil\">\n        <div><img src=\"../photo/mercantile.png\" alt=\"logoOfImg\"></div>\n        <div class=\"bankmercantil__numberbankmercantil\">\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 13</div>\n        <div class=\"bankmercantil__contactbankmercantil\"> *3477 :\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div class=\"bankmercantil__afterInterestbankmercantil\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.1 + "</div>\n        </div>\n        ";
        }
        else {
            return alert("המספר שרשמת לא תקין");
        }
        saveDateArray = getLocalStorage();
        saveDateArray.push(new SendingDataCalculationsClass(moneyNeed, manyMonths, total));
        saveToLocalStorage(saveDateArray);
        renderToItems(saveDateArray);
    }
    catch (error) {
        console.log(error);
    }
}
function renderToItems(saveDateArray) {
    try {
        if (!saveDateArray || !Array.isArray(saveDateArray))
            throw new Error("this items is not good");
        var html = saveDateArray
            .map(function (userCalculations) {
            return "<div class=\"\">\n        <div class=\"LoanInformation\">\n            <div class=\"LoanInformation__amountOfMoney\"> \u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05E1\u05E3 \u05E9\u05D1\u05D9\u05E7\u05E9\u05EA : " + userCalculations.moneyNeed + "</div>\n            <div class=\"LoanInformation__amoumtOfYears\"> \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E9\u05E0\u05D9\u05DD : " + userCalculations.amountOfYears + "</div>\n            <div class=\"LoanInformation__refundAmount\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05D7\u05D6\u05E8 \u05DC\u05E4\u05D9 \u05D7\u05D5\u05D3\u05E9: " + userCalculations.total + "</div>\n            <div><button class=\"LoanInformation__buttonDelete\" onclick=\"deleteItemscalculations('" + userCalculations.uid + "')\">\u05DE\u05D7\u05D9\u05E7\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD</button></div>\n            </div>\n            </div>\n            ";
        })
            .join(" ");
        renderDate.innerHTML = html;
        return html;
    }
    catch (error) {
        console.log(error);
        return "this ";
    }
}
function renderToScrrim() {
    var data = getLocalStorage();
    renderDate.innerHTML = renderToItems(data);
}
function deleteItemscalculations(uid) {
    try {
        var index = saveDateArray.findIndex(function (items) { return items.uid === uid; });
        if (index === -1)
            throw new Error("we are have Error");
        saveDateArray.splice(index, 1);
        laomi.innerHTML = "";
        bankYahv.innerHTML = "";
        discud.innerHTML = "";
        international.innerHTML = "";
        israelPost.innerHTML = "";
        mercantil.innerHTML = "";
        renderToScrrim();
    }
    catch (error) {
        console.log(error);
    }
    renderToItems(saveDateArray);
    saveToLocalStorage(saveDateArray);
}
//---controller---//
//---view---//
var renderDate = document.querySelector(".renderDate");
//---view---//
//--helper--//
function uid() {
    return "id-" + Math.random();
}
//--helper--//
function saveToLocalStorage(saveDateArray) {
    try {
        localStorage.setItem("items", JSON.stringify(saveDateArray));
    }
    catch (error) {
        console.log(error);
    }
}
function getLocalStorage() {
    var data = localStorage.getItem("items");
    if (data == null) {
        return [];
    }
    var parse = JSON.parse(data);
    console.log("JSON.parse", parse);
    return parse;
}
// ---- user information--//
var userInformationClass = /** @class */ (function () {
    function userInformationClass(nameUser, phoneNumbe, email) {
        this.nameUser = nameUser;
        this.phoneNumbe = phoneNumbe;
        this.email = email;
        this.uid = uid();
    }
    return userInformationClass;
}());
var userInformationArray = [];
function getUserInformation(ev) {
    try {
        ev.preventDefault();
        var nameUser = ev.target.elements.nameUser.value;
        var phoneNumber = ev.target.elements.phoneNumber.value;
        var email = ev.target.elements.email.value;
        userInformationArray.push(new userInformationClass(nameUser, phoneNumber, email));
        renderInformation.innerHTML = renderToUserInformation(userInformationArray);
    }
    catch (error) {
        console.log(error);
    }
}
function renderToUserInformation(userInformationArray) {
    var htmlOfInformation = userInformationArray
        .map(function (userInformation) {
        return "<div class=\"form2\">\n      <div class=\"form2__styleOfInfoUserRender\">:\u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05E0\u05E9\u05DC\u05D7\u05D5 \u05DC\u05D1\u05E0\u05E7</div>\n      <div class=\"form2__renderNameUser\">" + userInformation.nameUser + "</div>\n      <div class=\"form2__renderPhoneNumber\">" + userInformation.phoneNumbe + "</div>\n      <div class=\"form2__renderPhoneEmail\">" + userInformation.email + "</div>\n      </div>\n      ";
    })
        .join(" ");
    return htmlOfInformation;
}
var renderInformation = document.querySelector(".renderInformation");
