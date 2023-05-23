//---model---//
class sendingDataClass{
    uid:string;
    constructor(public moneyNeed:string,public manyMonths:string){
        this.uid=uid()
    }
}

let saveDateArray:sendingDataClass[]=[]
//---model---//


//---controller---//
function getDateForm(evt){
    try {
        evt.preventDefault()
        let moneyNeed=evt.target.elements.moneyNeed.value;
        let manyMonths=evt.target.elements.manyMonths.value;
        saveDateArray.push(new sendingDataClass(moneyNeed,manyMonths))
        console.log(saveDateArray)                
    } catch (error) {
        console.log(error)
    }
}



function renderToItems(saveDateArray:sendingDataClass[]){
    try {
        if(!saveDateArray || !Array.isArray(saveDateArray))throw new Error("this items is not good")
        
        let htmls=saveDateArray.map((UserData)=> {
            return `<div>
            <div>${UserData.moneyNeed}</div>
            <div>${UserData.manyMonths}</div>
            </div>`
        })




        
    } catch (error) {
        console.log(error)
        return `this `
    }
}


//---controller---//



//--helper--//
function uid():string{
    return `id-${Math.random()}`
}
//--helper--//