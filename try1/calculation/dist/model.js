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
var userInformationClass = /** @class */ (function () {
    function userInformationClass(nameUser, phoneNumbe, email) {
        this.nameUser = nameUser;
        this.phoneNumbe = phoneNumbe;
        this.email = email;
        this.uid = uid();
    }
    return userInformationClass;
}());
var userInformationArray = [];
