class SendingDataCalculationsClass {
  uid: string;
  constructor(
    public moneyNeed: number,
    public amountOfYears: number,
    public total: number
  ) {
    this.uid = uid();
  }
}
let saveDateArray: SendingDataCalculationsClass[] = [];

class userInformationClass {
  uid: string;
  constructor(
    public nameUser: string,
    public phoneNumbe: string,
    public email: string
  ) {
    this.uid = uid();
  }
}

let userInformationArray: userInformationClass[] = [];
