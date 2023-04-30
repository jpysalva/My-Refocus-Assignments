//Bank System
var isLoggedIn = false;
var userID = null;

var bank = {
    bankName: "JPYS Bank",
    Address: "Philippines",
    bankMoney: 0,
    Accounts: [
        {
            Name: "John Paul",
            Lastname: "Salvatierra",
            Gender: "Male",
            Address: "Manila",
            Balance: 0,
            pin: 123456,
            userName: "jpys123",
            password: "jpys123"
        },
        {
            Name: "Tony",
            Lastname: "Stark",
            Gender: "Male",
            Address: "California",
            Balance: 0,
            pin: 654321,
            userName: "ironman",
            password: "ironman123"  
        },
    ],
    checkBankBalance: function(){
        console.log("The bank balance is: ₱" + this.bankMoney);
    },
    depositBankMoney: function(amount){
        this.bankMoney += amount;
        console.log("Adds ₱" + amount.toFixed(2) + " to the bank.");
    },
    withdrawBankMoney: function(amount){
        if(amount <= this.bankMoney && amount > 0){
            this.bankMoney -= amount;
            console.log("Withdrawn: ₱" + amount);
        }
        else{
            console.log("Something went wrong!");
        }
    },
}

function accountControl(){

//Login

function loginUser(username, password){
    bank.Accounts.forEach((element, index) => {
        if(element.userName == username && element.password == password){
            isLoggedIn = true;
            userID = index;

            console.log("Hi " + element.Name + " " + element.Lastname +"!");
        }
    });

    if(!isLoggedIn){
        userID = null;

        console.log("Invalid Credentials!");
    }
}

function depositMoney(amount){
    if(isLoggedIn){
        bank.Accounts[userID].Balance += amount;
        bank.depositBankMoney(amount);
       

        console.log("You deposited: ₱" + amount.toFixed(2) + " to your account.");
    }
    else{
        showError("You are not logged in!")
    }
}

function showError(msg){
    console.error(msg);
}

function checkBalance(){
    if(isLoggedIn){
        console.log("Your account balance is ₱" + bank.Accounts[userID].Balance.toFixed(2));
    }
    else{
        showError("You are not logged in!")
    }
}

function withdrawMoney(amount){
    if(isLoggedIn){
        if(bank.Accounts[userID].Balance >= amount && amount > 0){
            bank.Accounts[userID].Balance -= amount;
            bank.withdrawBankMoney(amount);
            console.log("You withdraw ₱" + bank.Accounts[userID].Balance.toFixed(2) + " from your account.");
        }
        else{
            showError("Oops! Something went wrong!");
    }
    }
    else{
        showError("Oops! Something went wrong!");
    }
}

return{
    showError,
    withdrawMoney,
    checkBalance,
    depositMoney,
    loginUser
}

}
var jpys = accountControl();
jpys.loginUser("jpys123", "jpys123");
jpys.depositMoney(25500);
jpys.withdrawMoney(50);
jpys.checkBalance();

function bankControl(callback, data){
    callback(data);

}

function addUser(info){
    bank.Accounts.push(info);

    console.log(info.Name + " " + info.Lastname + " has been added");
}

function removeUser(id){
    isLoggedIn = false;
    userID = null;

    console.log(bank.Accounts[id].Name + " " + bank.Accounts[id].Lastname + " has been removed");
    bank.Accounts.splice(id, 1);
}

bankControl(addUser, {
    Name: "Carina",
    Lastname: "Salvatierra",
    Gender: "Femaale",
    Address: "Manila",
    Balance: 0,
    pin: 123456,
    userName: "cys123",
    password: "cys123"
})


bankControl(removeUser, 1);
