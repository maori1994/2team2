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
var egud = document.querySelector(".egud");
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
        if (moneyNeed <= 500000) {
            bankYahv.innerHTML = "<div class=\"bankYahav\">\n        <div><h3>\u05D4\u05D4\u05E6\u05E2\u05D4 \u05D4\u05D0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8</h3></div>\n        <div><img src=\"../photo/yahav.png\" alt=\"logoOfImg\"></div>\n        <div class=\"numberBankYahav\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D1\u05E0\u05E7: 4</div>\n        <div class=\"contactYahav\">*2505 :\u05DE\u05D5\u05E7\u05D3 \u05D4\u05D1\u05E0\u05E7 </div>\n        <div class=\"beforeInterest\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div class=\"afterInterest\">\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.7 + "</div>\n        </div>\n      ";
        }
        else if (moneyNeed <= 750000) {
            laomi.innerHTML = "<div class=\"bankLeumi\">  \n        <div><h3>\u05D4\u05D4\u05E6\u05E2\u05D4 \u05D4\u05D0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D9\u05D0 \u05E9\u05DC \u05D1\u05E0\u05E7 \u05DC\u05D0\u05D5\u05DE\u05D9</h3></div>\n        <div><img src=\"../photo/leumi.png\" alt=\"logoOfImg\"></div>\n        <div class=\"numberbBankLeumi\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D1\u05E0\u05E7: 10</div>\n        <div class=\"contactLeumi\">*5522 :\u05DE\u05D5\u05E7\u05D3 \u05D4\u05D1\u05E0\u05E7 </div>\n        <div class=\"beforeInterestLeumi\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div class=\"afterInterestLeumi\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.6 + "</div>\n        </div>\n      ";
        }
        else if (moneyNeed <= 1000000) {
            discud.innerHTML = "<div class=\"bankEgud>\n        <div><h3>\u05D1\u05E0\u05E7 \u05D4\u05DE\u05D5\u05DE\u05DC\u05E5</h3></div>\n        <div><img src=\"../photo/diskont.jpg\" alt=\"logoOfImg\"></div>\n        <div class=\"numberBankEgud\">\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 11</div>\n        <div class=\"contactEgud\"> *6111 :\u05E4\u05DC\u05D0\u05E4\u05D5\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div class=\"beforeInterestEgud\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div class=\"afterInterestEgud\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.5 + "</div>\n        </div>\n      ";
        }
        else if (moneyNeed <= 1250000) {
            egud.innerHTML = "\n        <div><h3>\u05D1\u05E0\u05E7 \u05D4\u05DE\u05D5\u05DE\u05DC\u05E5</h3></div>\n        <div><img src=\"../photo/egud.jpg\" alt=\"logoOfImg\"></div>\n        <div>\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 10</div>\n        <div>*5522 :\u05E4\u05DC\u05D0\u05E4\u05D5\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.4 + "</div>\n      ";
        }
        else if (moneyNeed <= 1500000) {
            egud.innerHTML = "\n        <div><h3>\u05D1\u05E0\u05E7 \u05D4\u05DE\u05D5\u05DE\u05DC\u05E5</h3></div>\n        <div><img src=\"../photo/hapoalim.jpg\" alt=\"logoOfImg\"></div>\n        <div>\u05D1\u05E0\u05E7 \u05D4\u05E4\u05D5\u05E2\u05DC\u05D9\u05DD</div>\n        <div>\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 11</div>\n        <div>*2407 :\u05E4\u05DC\u05D0\u05E4\u05D5\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.3 + "</div>\n      ";
        }
        else if (moneyNeed <= 1750000) {
            israelPost.innerHTML = "\n        <div><h3>\u05D1\u05E0\u05E7 \u05D4\u05DE\u05D5\u05DE\u05DC\u05E5 </h3></div>\n        <div><img src=\"../photo/israelpost.png\" alt=\"logoOfImg\"></div>\n        <div>\u05D3\u05D5\u05D0\u05E8 \u05D9\u05E9\u05E8\u05D0\u05DC</div>\n        <div>\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 12</div>\n        <div>*2401 :\u05E4\u05DC\u05D0\u05E4\u05D5\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.2 + "</div>\n      ";
        }
        else if (moneyNeed <= 2000000) {
            mercantil.innerHTML = "\n        <div><h3>\u05D1\u05E0\u05E7 \u05D4\u05DE\u05D5\u05DE\u05DC\u05E5 </h3></div>\n        <div><img src=\"../photo/mercantile.jpg\" alt=\"logoOfImg\"></div>\n        <div>\u05D1\u05E0\u05E7 \u05DE\u05E8\u05DB\u05E0\u05EA\u05D9\u05DC</div>\n        <div>\u05DE\u05E1\u05E4\u05E8 \u05D1\u05E0\u05E7: 13</div>\n        <div> *3477 :\u05E4\u05DC\u05D0\u05E4\u05D5\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E8\u05D9\u05D1\u05D9\u05EA: " + total + "</div>\n        <div>\u05E1\u05DB\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05D5\u05DC\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA: " + total * 1.1 + "</div>\n      ";
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
            return "<div class=\"LoanInformation\">\n            <div class=\"amountOfMoney\"> \u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05E1\u05E3 \u05E9\u05D1\u05D9\u05E7\u05E9\u05EA : " + userCalculations.moneyNeed + "</div>\n            <div class=\"amoumtOfYears\"> \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E9\u05E0\u05D9\u05DD : " + userCalculations.amountOfYears + "</div>\n            <div class=\"refundAmount\">\u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05D7\u05D6\u05E8 \u05DC\u05E4\u05D9 \u05D7\u05D5\u05D3\u05E9: " + userCalculations.total + "</div>\n            <div><button class=\"buttonDelete\" onclick=\"deleteItemscalculations('" + userCalculations.uid + "')\">\u05DE\u05D7\u05D9\u05E7\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD</button></div>\n            </div>\n            ";
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
        egud.innerHTML = "";
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
    function userInformationClass(UserProfile, nameUser, lastName, phoneNumbe, email) {
        this.UserProfile = UserProfile;
        this.nameUser = nameUser;
        this.lastName = lastName;
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
        var UserProfile = ev.target.elements.UserProfile.value;
        var nameUser = ev.target.elements.nameUser.value;
        var lastName = ev.target.elements.lastName.value;
        var phoneNumber = ev.target.elements.phoneNumber.value;
        var email = ev.target.elements.email.value;
        userInformationArray.push(new userInformationClass(UserProfile, nameUser, lastName, phoneNumber, email));
        renderInformation.innerHTML = renderToUserInformation(userInformationArray);
    }
    catch (error) {
        console.log(error);
    }
    // console.log(UserProfile,nameUser,lastName,phoneNumber,email)
}
function renderToUserInformation(userInformationArray) {
    var htmlOfInformation = userInformationArray
        .map(function (userInformation) {
        return "<div>\n      <div>" + userInformation.UserProfile + "</div>\n      <div>" + userInformation.nameUser + "</div>\n      <div>" + userInformation.lastName + "</div>\n      <div>" + userInformation.phoneNumbe + "</div>\n      <div>" + userInformation.email + "</div>\n      </div>\n      ";
    })
        .join(" ");
    return htmlOfInformation;
}
var renderInformation = document.querySelector(".renderInformation");
