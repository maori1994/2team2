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
let hapoalim=document.querySelector(".hapoalim")as HTMLDivElement;
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
      bankYahv.innerHTML=`<div class="bankYahav">
        <div><img src="../photo/yahav.png" alt="logoOfImg"></div>
        <div class="bankYahav__numberBankYahav">מספר הבנק: 4</div>
        <div class="bankYahav__contactYahav">*2505 :פלאפון ליצירת קשר </div>
        <div class="bankYahav__beforeInterest">סכום התשלום לפני ריבית: ${total}</div>
        <div class="bankYahav__afterInterest">סכום התשלום כולל ריבית: ${total*1.7}</div>
        </div>
      `}
     else if (moneyNeed <= 750000) {
      laomi.innerHTML=`<div class="bankLeumi">  
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/leumi.png" alt="logoOfImg"></div>
        <div class="bankLeumi__numberbBankLeumi">מספר בנק: 10</div>
        <div class="bankLeumi__contactLeumi">*5522 :פלאפון ליצירת קשר </div>
        <div class="bankLeumi__beforeInterestLeumi">סכום התשלום לפני ריבית: ${total}</div>
        <div class="bankLeumi__afterInterestLeumi">סכום התשלום כולל ריבית: ${total*1.6}</div>
        </div>
      `
     
    }
    else if(moneyNeed <= 1000000){
      discud.innerHTML=`<div class="bankDiscud">
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/diskont.jpg" alt="logoOfImg"></div>
        <div class="bankDiscud__numberBankDiscud">מספר בנק: 11</div>
        <div class="bankDiscud__contactDiscud"> *6111 :פלאפון ליצירת קשר</div>
        <div class="bankDiscud__beforeInterestDiscud">סכום התשלום לפני ריבית: ${total}</div>
        <div class="bankDiscud__afterInterestDiscud">סכום התשלום כולל ריבית: ${total*1.5}</div> 
      </div> 
      `
    }  
    else if(moneyNeed <=1500000){
      hapoalim.innerHTML=`<div class="bankhapoalim">
        <div><h3>בנק המומלץ</h3></div>
        <div><img src="../photo/hapoalim.jpg" alt="logoOfImg"></div>
        <div class="bankhapoalim__numberbankbankhapoalim">מספר בנק: 14</div>
        <div class="bankhapoalim__contactbankhapoalim">*2407 :פלאפון ליצירת קשר</div>
        <div class="bankhapoalim__beforeInteresthapoalim">סכום התשלום לפני ריבית: ${total}</div>
        <div class="bankhapoalim__afterInteresthapoalim">סכום התשלום כולל ריבית: ${total*1.3}</div>
        </div>
        `
    }
    
    else if(moneyNeed <=1750000){
      israelPost.innerHTML=`<div class="bankIsraelPost">
        <div><h3>בנק המומלץ </h3></div>
        <div><img src="../photo/israelpost.png" alt="logoOfImg"></div>
        <div class="bankIsraelPost__numberbankIsraelPost">מספר בנק: 12</div>
        <div class="bankIsraelPost__contactbankIsraelPost">*2401 :פלאפון ליצירת קשר</div>
        <div class="bankIsraelPost__beforeInterestIsraelPost">סכום התשלום לפני ריבית: ${total}</div>
        <div class="bankIsraelPost__afterInterestIsraelPost">סכום התשלום כולל ריבית: ${total*1.2}</div>
        </div>
        `
    }
   
    else if(moneyNeed <=2000000){
      mercantil.innerHTML=`<div class="bankmercantil">
        <div><h3>בנק המומלץ </h3></div>
        <div><img src="../photo/mercantile.jpg" alt="logoOfImg"></div>
        <div class="bankmercantil__numberbankmercantil">מספר בנק: 13</div>
        <div class="bankmercantil__contactbankmercantil"> *3477 :פלאפון ליצירת קשר</div>
        <div class="bankmercantil__beforeInterestbankmercantil">סכום התשלום לפני ריבית: ${total}</div>
        <div class="bankmercantil__afterInterestbankmercantil">סכום התשלום כולל ריבית: ${total*1.1}</div>
        </div>
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
        return `<div class="LoanInformation">
            <div class="LoanInformation__amountOfMoney"> סכום הכסף שביקשת : ${userCalculations.moneyNeed}</div>
            <div class="LoanInformation__amoumtOfYears"> מספר השנים : ${userCalculations.amountOfYears}</div>
            <div class="LoanInformation__refundAmount">סכום ההחזר לפי חודש: ${userCalculations.total}</div>
            <div><button class="LoanInformation__buttonDelete" onclick="deleteItemscalculations('${userCalculations.uid}')">מחיקת נתונים</button></div>
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
