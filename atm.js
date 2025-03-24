// write a simple ATM js algo
// checkBalance
// withdrawAmount
// depositAmount
// chekPin

let balance = 5000;
let pin = 1234;
let attempts = 3;

function checkBalance () {
    return `Your current balance is $${balance}`;
};

function withdrawAmount (amount) {
    if (amount <= balance) {
        balance -= amount;
        return "Withdrawal Successfull";
    } else {
        return "Insuficient Funds";
    }
};
// console.log(withdrawAmount(1000));

// depositAmount
function depositAmount (amount) {
    balance += amount;
     return "Deposit Successfull"
};
// console.log(depositAmount(2000));

// checkPin
  function checkPin (enteredPin){
    const enteredPin = 
    while (attempts > 0) {
    if (enteredPin === pin) {
        return "Welcome User";
    } else {
        attempts = 3;
         return `Pin Failed, ${attempts} attempts left`;
    }
}
     return "Your Card has been blocked";
  };

//   console.log(checkPin(6567));
//   console.log(checkPin(6567));
//   console.log(checkPin(1234));

  function startAtm (choice) {
    if (choice === 1) {
        // return "withdrawal";
        withdrawAmount(1000);
    } else if (choice === 2) {
        // return "deposit";
        depositAmount(3000)
    } else if (choice === 3) {
        // return "Check Balance";
        checkBalance();
    } else if (choice === 4) {
        // return "Thank You for Banking with us";
    } else {
        return "Invalid option, Try again";
    }
  };

//   console.log(startAtm());