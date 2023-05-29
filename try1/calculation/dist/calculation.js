//---model---//
var SendingDataCalculationsClass = /** @class */ (function () {
    function SendingDataCalculationsClass(moneyNeed, manyMonths, total, amla, returnMoney) {
        this.moneyNeed = moneyNeed;
        this.manyMonths = manyMonths;
        this.total = total;
        this.amla = amla;
        this.returnMoney = returnMoney;
        this.uid = uid();
    }
    return SendingDataCalculationsClass;
}());
var saveDateArray = [];
//---model---//
//---controller---//
function getDateForm(evt) {
    try {
        evt.preventDefault();
        var moneyNeed = evt.target.elements.moneyNeed.value;
        var manyMonths = evt.target.elements.manyMonths.value;
        // let total = evt.target.elements.manyMonths.value;
        var manyMONthsMultiplay = manyMonths * 12;
        var total = moneyNeed / manyMONthsMultiplay;
        // console.log(`this is your total ${total}`)
        var amla = 0;
        var returnMoney = 0;
        if (moneyNeed <= 5000) { // monthsToYears
            console.log("5k");
            amla += total; //amla = amla + totals
            //returnMoney.innerHTML = "<h3>You need: 5k</h3>"
        }
        else if (moneyNeed <= 10000) {
            console.log("10k");
            amla = 5;
            //returnMoney.innerHTML = "<h3>You need: 10K</h3>"
        }
        else {
            console.log("baziga!");
            amla = 100;
            //returnMoney.innerHTML = "<h3>You need: 100k</h3>"
        }
        if (manyMonths <= 5) {
            console.log("time jukjsa");
            returnMoney = moneyNeed / 5;
        }
        else if (manyMonths <= 10) {
            returnMoney = moneyNeed / 10;
            console.log("76");
        }
        else {
            console.log("name is 23123 ");
            returnMoney = moneyNeed / 15;
        }
        saveDateArray = getLocalStorage();
        saveDateArray.push(new SendingDataCalculationsClass(moneyNeed, manyMonths, total, amla, returnMoney));
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
            return "<div>\n            <div>Amount need: " + userCalculations.moneyNeed + "</div>\n            <div>Amount of Months" + userCalculations.manyMonths + "</div>\n            <div>Total:" + userCalculations.total + "</div>\n            <div>Amla: " + userCalculations.amla + "</div>\n            <div>Return Money: " + userCalculations.returnMoney + "</div>\n            <div><button onclick=\"deleteItemscalculations('" + userCalculations.uid + "')\">remove</button></div>\n            </div>\n            ";
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
        // add save to local storage function
        renderToScrrim();
    }
    catch (error) {
        console.log(error);
    }
    renderToItems(saveDateArray);
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
// let h1=Number(prompt("years"))
//   let test=h1*12
//   console.log(test)
// let action=prompt("choos")
// function test(h1:number,h2:number,action:string|null){
//   if(action==="*"){
//     console.log(h1*h2)
//   }else if(action==="/"){
//     console.log(h1/h2)
//   }else{
//     console.log("this is no ")
//   }
// }
// test(h1,h2,action)
function saveToLocalStorage(saveDateArray) {
    try {
        // console.log(saveDateArray)
        // if(!saveDateArray){
        localStorage.setItem("items", JSON.stringify(saveDateArray));
        // }else{
        // console.log("")
        // throw new Error("thihs is not good");
        // }
    }
    catch (error) {
        console.log(error);
    }
}
function getLocalStorage() {
    // console.log(saveDateArray)
    var data = localStorage.getItem("items");
    // console.log("datasssss",data)
    if (data == null) {
        return [];
    }
    var parse = JSON.parse(data);
    console.log("JSON.parse", parse);
    return parse;
    // console.log(parse)
    // console.log("rrrrrrrrrR",d     ate)
}
//getLocalStorage()
// const _items=getLocalStorage()
// if(_items){
//   saveDateArray.push(..._items)
// }
// renderDate(saveDateArray)
