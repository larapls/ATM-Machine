let account = {
accountName :"Lara Ibrahim", 
balance: 100,

getBalance:function(){
    alert("Your current account balance is: " + this.balance + " sek.");
},

deposit:function(){ 
let depositAmount = parseFloat(prompt("Please type in the amount you want to deposit:"));// Jag använder mig av float att användaren skall ta ut/sätta in en summa i decimal. Alltså kronor och öre.
let invalidInput = false;
while(!invalidInput){

if (depositAmount <=0 ||isNaN(depositAmount)) {
    depositAmount = parseFloat(prompt("Invalid deposit input. Please type in a number over 0:"));
    continue;
}

else{
        this.balance = this.balance + depositAmount;
        alert( "Your account balance is now updated to: " + this.balance + "sek." );
        break;
    }
}

},

withdrawal:function(){ 

let withdrawalAmount = parseFloat(prompt("Please type in the amount you want to withdraw:")); // Jag använder mig av float att användaren skall ta ut/sätta in en summa i decimal. Alltså kronor och öre.
let invalidInput = false;
console.log(withdrawalAmount);

while(!invalidInput){

if( this.balance === 0){
    alert("There is no money to withdraw.");
    break;
}

 else if (withdrawalAmount > this.balance) {
        withdrawalAmount = parseFloat(prompt("Current account balance:" + " " +this.balance + " sek" + "\nInvalid withdrawal input. "+
        "\nWithdrawal cannot be larger than account balace.\nPlease try again:"));
        continue;
    }

else if (withdrawalAmount <1 || isNaN(withdrawalAmount)) {
    withdrawalAmount = parseFloat(prompt("Invalid withdrawal input. Please type in a number over 0:"));
    continue;
}

else{
        this.balance = this.balance - withdrawalAmount;
        alert( "Your account balance is now updated to: " + this.balance + "sek." );
        break;
    }
}
},

getAccountName: function(){
alert("Name of account: " + this.accountName);
},

accountError: function(){ // AccountError skall visa ett felmeddelande om användaren matar in fel input i ATM-menyn.

    if (atmChoice <= 0 || atmChoice > 5 || isNaN(atmChoice)) {
      validMenuChoice = false;
    }

    while (!validMenuChoice) {
      alert("Wrong input.");
      validMenuChoice = true;
    }

},

exitAccount: function(){ 
alert("Click ok to exit.");
},
}

let validMenuChoice = true;
let atmChoice;

function atm(){
  atmChoice = parseInt(prompt( "Please select a choice: \n(1.) See balance \n(2.) Make a deposit \n(3.) Make a withdrawal.\n(4.) Get account name.\n(5.) Exit. ")); 
  account.accountError();
   switch(atmChoice){
        case 1:
            account.getBalance();
            atm();
            break;
            case 2:
                account.deposit();
                atm();
                break;
                case 3:
                    account.withdrawal();
                    atm();
                    break;
                    case 4:
                        account.getAccountName();
                        atm();
                        break;
                            case 5:
                            account.exitAccount();
                            break;
    }
}



