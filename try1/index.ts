//---model---//
class SendingDataCalculationsClass {
  uid: string;
  constructor(
    public moneyNeed: number, 
    public amountOfYears: number,
    public total:number,){
    this.uid = uid();
  }
} 
let saveDateArray: SendingDataCalculationsClass[] = [];
//---model---//

let bankYahv=document.querySelector(".bankYahv")as HTMLDivElement;
let laomi=document.querySelector(".laomi")as HTMLDivElement;
let discud=document.querySelector(".discud")as HTMLDivElement;
let egud=document.querySelector(".egud")as HTMLDivElement;
let international=document.querySelector(".international")as HTMLDivElement;
let israelPost=document.querySelector(".israelPost")as HTMLDivElement;
let mercantil=document.querySelector(".mercantile")as HTMLDivElement;
//---controller---//
function getDateForm(evt) {
  try {
    evt.preventDefault();
    let moneyNeed = evt.target.elements.moneyNeed.value;
    let manyMonths = evt.target.elements.manyMonths.value;
    let manyMONthsMultiplay=manyMonths*12
    let total=moneyNeed/manyMONthsMultiplay
    
    if (moneyNeed <= 500000) {
      bankYahv.innerHTML=`
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/yahav.png" alt="logoOfImg"></div>
        <div>מספר הבנק: 4</div>
        <div>*2505 :פלאפון ליצירת קשר </div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.7}</div>
      `}
     else if (moneyNeed <= 750000) {
      laomi.innerHTML=`
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/leumi.png" alt="logoOfImg"></div>
        <div>בנק לאומי</div>
        <div>מספר בנק: 10</div>
        <div>*5522 :פלאפון ליצירת קשר </div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.6}</div>
      `
     
    }else if(moneyNeed <=1000000){
      discud.innerHTML=`
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/diskont.jpg" alt="logoOfImg"></div>
        <div>בנק דיסקונט</div>
        <div>מספר בנק: 11</div>
        <div> *6111 :פלאפון ליצירת קשר</div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.5}</div>
      `
    } 
    else if(moneyNeed <=1250000){
      egud.innerHTML=`
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/egud.jpg" alt="logoOfImg"></div>
        <div>בנק אגוד</div>
        <div>מספר בנק: 10</div>
        <div>*5522 :פלאפון ליצירת קשר</div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.4}</div>
      `
    }
    else if(moneyNeed <=1500000){
      egud.innerHTML=`
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/hapoalim.jpg" alt="logoOfImg"></div>
        <div>בנק הפועלים</div>
        <div>מספר בנק: 11</div>
        <div>*2407 :פלאפון ליצירת קשר</div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.3}</div>
      `
    }
    
    else if(moneyNeed <=1750000){
      israelPost.innerHTML=`
        <div><h3>בנק המומלץ </h3></div>
        <div><img src="../photo/israelpost.png" alt="logoOfImg"></div>
        <div>דואר ישראל</div>
        <div>מספר בנק: 12</div>
        <div>*2401 :פלאפון ליצירת קשר</div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.2}</div>
      `
    }
   
    else if(moneyNeed <=2000000){
      mercantil.innerHTML=`
        <div><h3>בנק המומלץ </h3></div>
        <div><img src="../photo/mercantile.jpg" alt="logoOfImg"></div>
        <div>בנק מרכנתיל</div>
        <div>מספר בנק: 13</div>
        <div> *3477 :פלאפון ליצירת קשר</div>
        <div>סכום התשלום לפני ריבית: ${total}</div>
        <div>סכום התשלום כולל ריבית: ${total*1.1}</div>
      `
    }
    else {
      return alert("המספר שרשמת לא תקין");
    }
   saveDateArray = getLocalStorage()
    saveDateArray.push(new SendingDataCalculationsClass(moneyNeed,manyMonths,total));
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
            <div> סכום הכסף שביקשת : ${userCalculations.moneyNeed}</div>
            <div> מספר השנים : ${userCalculations.amountOfYears}</div>
            <div>סכום ההחזר לפי חודש: ${userCalculations.total}</div>
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
    laomi.innerHTML=""
    bankYahv.innerHTML=""
    discud.innerHTML=""
    egud.innerHTML=""
    international.innerHTML=""
    israelPost.innerHTML=""
    mercantil.innerHTML=""
    renderToScrrim() 
  } catch (error) {
    console.log(error);
  }
  renderToItems(saveDateArray)
  saveToLocalStorage(saveDateArray)
  
}
//---controller---//

//---view---//
let renderDate = document.querySelector(".renderDate") as HTMLDivElement;
//---view---//

//--helper--//
function uid(): string {
  return `id-${Math.random()}`;
}
//--helper--//

function saveToLocalStorage(saveDateArray:SendingDataCalculationsClass[]){
  try {
    localStorage.setItem("items",JSON.stringify(saveDateArray));
  } catch (error) {
    console.log(error);
  }
}

function getLocalStorage():SendingDataCalculationsClass[] {
  let data : string | null = localStorage.getItem("items")
  if(data == null) {
    return []
  }
  let parse=JSON.parse(data)
  console.log("JSON.parse",parse)
  return parse;

}









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
  try {
      ev.preventDefault()
      let UserProfile=ev.target.elements.UserProfile.value;
      let nameUser=ev.target.elements.nameUser.value;
      let lastName=ev.target.elements.lastName.value;
      let phoneNumber=ev.target.elements.phoneNumber.value;
      let email=ev.target.elements.email.value
      userInformationArray.push(new userInformationClass(UserProfile,nameUser,lastName,phoneNumber,email))
      renderInformation.innerHTML=renderToUserInformation(userInformationArray)
  } catch (error) {
      console.log(error)
  }

// console.log(UserProfile,nameUser,lastName,phoneNumber,email)
} 

function renderToUserInformation(userInformationArray:userInformationClass[]):string{
  let htmlOfInformation=userInformationArray.map((userInformation)=>{
      return `<div>
      <div>${userInformation.UserProfile}</div>
      <div>${userInformation.nameUser}</div>
      <div>${userInformation.lastName}</div>
      <div>${userInformation.phoneNumbe}</div>
      <div>${userInformation.email}</div>
      </div>
      `;

  }).join(" ")
  return htmlOfInformation   
}

let renderInformation=document.querySelector(".renderInformation")as HTMLDivElement;
