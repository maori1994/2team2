//---model---//
class sendingDataCalculationsClass{
    uid:string;
    constructor(public moneyNeed:string,
        public manyMonths:string){
        this.uid=uid()
    }
}

let saveDateArray:sendingDataCalculationsClass[]=[]
//---model---//


//---controller---//
function getDateForm(evt){
    try {
        evt.preventDefault()
        let moneyNeed=evt.target.elements.moneyNeed.value;
        let manyMonths=evt.target.elements.manyMonths.value;
        saveDateArray.push(new sendingDataCalculationsClass(moneyNeed,manyMonths))
        // console.log(saveDateArray)   
        renderDate.innerHTML= renderToItems(saveDateArray)             
    } catch (error) {
        console.log(error)
    }
}



function renderToItems(saveDateArray:sendingDataCalculationsClass[]):string{
    try {
        if(!saveDateArray || !Array.isArray(saveDateArray))throw new Error("this items is not good")
        
        let html=saveDateArray
        .map((userCalculations)=> {
            return `<div>
            <div>${userCalculations.moneyNeed}</div>
            <div>${userCalculations.manyMonths}</div>
            <div><button onclick="deleteItemscalculations('${userCalculations.uid}')">remove</button></div>
            </div>
            `;
        })
        .join(" ");
        // console.log(html)
        return html;
    } catch (error) {
        console.log(error)
        return `this `
    }
}

function deleteItemscalculations(uid:string){
try {
    let index=saveDateArray.findIndex((items)=>items.uid===uid);
    if(index=== -1)throw new Error("we are have Error");
    saveDateArray.splice(index,1)
    renderDate.innerHTML= renderToItems(saveDateArray);
} catch (error) {
    console.log(error)
}
}
//---controller---//




//---view---//
let renderDate=document.querySelector(".renderDate")as HTMLDivElement;
// console.log(renderDate)
//---view---//





//--helper--//
function uid():string{
    return `id-${Math.random()}`
}
//--helper--//











// ---- user information--//

class userInformationClass{
    uid:string
    constructor(public UserProfile:string,
        public nameUser:string,
        public lastName:string,
        public phoneNumbe:string,
        public email:string){
        this.uid=uid()
    }
} 

let userInformationArray:userInformationClass[]=[]

function getUserInformation(ev){
ev.prevetDefault()

// console.log(ev)
} 














