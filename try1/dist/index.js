//---model---//
var sendingDataCalculationsClass = /** @class */ (function () {
    function sendingDataCalculationsClass(moneyNeed, manyMonths) {
        this.moneyNeed = moneyNeed;
        this.manyMonths = manyMonths;
        this.uid = uid();
    }
    return sendingDataCalculationsClass;
}());
var saveDateArray = [];
//---model---//
//---controller---//
function getDateForm(evt) {
    try {
        evt.preventDefault();
        var moneyNeed = evt.target.elements.moneyNeed.value;
        var manyMonths = evt.target.elements.manyMonths.value;
        saveDateArray.push(new sendingDataCalculationsClass(moneyNeed, manyMonths));
        // console.log(saveDateArray)   
        renderDate.innerHTML = renderToItems(saveDateArray);
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
            return "<div>\n            <div>" + userCalculations.moneyNeed + "</div>\n            <div>" + userCalculations.manyMonths + "</div>\n            <div><button onclick=\"deleteItemscalculations('" + userCalculations.uid + "')\">remove</button></div>\n            </div>\n            ";
        })
            .join(" ");
        // console.log(html)
        return html;
    }
    catch (error) {
        console.log(error);
        return "this ";
    }
}
function deleteItemscalculations(uid) {
    try {
        var index = saveDateArray.findIndex(function (items) { return items.uid === uid; });
        if (index === -1)
            throw new Error("we are have Error");
        saveDateArray.splice(index, 1);
        renderDate.innerHTML = renderToItems(saveDateArray);
    }
    catch (error) {
        console.log(error);
    }
}
//---controller---//
//---view---//
var renderDate = document.querySelector(".renderDate");
// console.log(renderDate)
//---view---//
//--helper--//
function uid() {
    return "id-" + Math.random();
}
//--helper--//
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
    ev.prevetDefault();
    // console.log(ev)
}
