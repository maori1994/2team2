//---model---//
var sendingDataClass = /** @class */ (function () {
    function sendingDataClass(moneyNeed, manyMonths) {
        this.moneyNeed = moneyNeed;
        this.manyMonths = manyMonths;
        this.uid = uid();
    }
    return sendingDataClass;
}());
var saveDateArray = [];
//---model---//
//---controller---//
function getDateForm(evt) {
    try {
        evt.preventDefault();
        var moneyNeed = evt.target.elements.moneyNeed.value;
        var manyMonths = evt.target.elements.manyMonths.value;
        saveDateArray.push(new sendingDataClass(moneyNeed, manyMonths));
        console.log(saveDateArray);
    }
    catch (error) {
        console.log(error);
    }
}
function renderToItems(saveDateArray) {
    try {
        if (!saveDateArray || !Array.isArray(saveDateArray))
            throw new Error("this items is not good");
        var htmls = saveDateArray.map(function (UserData) {
            return "<div>\n            <div>" + UserData.moneyNeed + "</div>\n            <div>" + UserData.manyMonths + "</div>\n            </div>";
        });
    }
    catch (error) {
        console.log(error);
        return "this ";
    }
}
//---controller---//
//--helper--//
function uid() {
    return "id-" + Math.random();
}
//--helper--//
