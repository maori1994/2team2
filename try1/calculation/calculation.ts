//---model---//
class SendingDataCalculationsClass {
  uid: string;
  constructor(
    public moneyNeed: number, 
    public manyMonths: number,
    public total:number,
    public amla:number,
    public returnMoney:number){
    this.uid = uid();
  }
}

let saveDateArray: SendingDataCalculationsClass[] = [];
//---model---//


//---controller---//
function getDateForm(evt) {
  try {
    evt.preventDefault();
    let moneyNeed = evt.target.elements.moneyNeed.value;
    let manyMonths = evt.target.elements.manyMonths.value;
    // let total = evt.target.elements.manyMonths.value;
    let manyMONthsMultiplay=manyMonths*12
    let total=moneyNeed/manyMONthsMultiplay

    // console.log(`this is your total ${total}`)
    
    
    let amla: number = 0
    let returnMoney: number = 0

    if (moneyNeed <= 5000) {      // monthsToYears
      console.log("5k");
      amla +=total //amla = amla + totals
      //returnMoney.innerHTML = "<h3>You need: 5k</h3>"

    } else if (moneyNeed <= 10000) {
      console.log("10k");
      amla = 5
      //returnMoney.innerHTML = "<h3>You need: 10K</h3>"
    } else {
      console.log("baziga!");
      amla = 100
      //returnMoney.innerHTML = "<h3>You need: 100k</h3>"
    }

    if (manyMonths <= 5) {
      console.log("time jukjsa");
      returnMoney = moneyNeed/5
    } else if (manyMonths <= 10) {
      returnMoney = moneyNeed/10
      console.log("76");
    } else {
      console.log("name is 23123 ");
      returnMoney = moneyNeed/15
    }
   
    saveDateArray = getLocalStorage()
    saveDateArray.push(new SendingDataCalculationsClass(moneyNeed,manyMonths,total, amla, returnMoney));
    saveToLocalStorage(saveDateArray)
    renderToItems(saveDateArray)
   } catch (error) {
    console.log(error);
  }
}

function renderToItems(saveDateArray: SendingDataCalculationsClass[]): string {
  try {
    if (!saveDateArray || !Array.isArray(saveDateArray))
      throw new Error("this items is not good");
    let html = saveDateArray
      .map((userCalculations) => {
        return `<div>
            <div>Amount need: ${userCalculations.moneyNeed}</div>
            <div>Amount of Months${userCalculations.manyMonths}</div>
            <div>Total:${userCalculations.total}</div>
            <div>Amla: ${userCalculations.amla}</div>
            <div>Return Money: ${userCalculations.returnMoney}</div>
            <div><button onclick="deleteItemscalculations('${userCalculations.uid}')">remove</button></div>
            </div>
            `;
      })
      .join(" ");
    renderDate.innerHTML = html
    return html;
  } catch (error) {
    console.log(error);
    return `this `;
  }
}
function renderToScrrim(){
  const data = getLocalStorage() 
  renderDate.innerHTML = renderToItems(data);  
}

function deleteItemscalculations(uid: string) {
  try {
    let index = saveDateArray.findIndex((items) => items.uid === uid);
    if (index === -1) throw new Error("we are have Error");
    saveDateArray.splice(index, 1);
    // add save to local storage function
    renderToScrrim() 
  } catch (error) {
    console.log(error);
  }
  renderToItems(saveDateArray)
}
//---controller---//

//---view---//
let renderDate = document.querySelector(".renderDate") as HTMLDivElement;
// console.log(renderDate)
//---view---//

//--helper--//
function uid(): string {
  return `id-${Math.random()}`;
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

function saveToLocalStorage(saveDateArray:SendingDataCalculationsClass[]){
try {
  // console.log(saveDateArray)
  // if(!saveDateArray){
    localStorage.setItem("items",JSON.stringify(saveDateArray));
  // }else{
    // console.log("")
    // throw new Error("thihs is not good");
  // }
} catch (error) {
  console.log(error);
}
}

function getLocalStorage():saveDateArray[] {
  // console.log(saveDateArray)
  let data : string | null = localStorage.getItem("items")
  // console.log("datasssss",data)

  if(data == null) {
    return []
  }

  let parse=JSON.parse(data)
  console.log("JSON.parse",parse)


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
