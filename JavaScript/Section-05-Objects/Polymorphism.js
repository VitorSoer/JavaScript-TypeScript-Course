function Account(agency, accountNumber, balance) {
  this.agency = agency;
  this.accountNumber = accountNumber;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (this.balance < value) {
    return console.log(`Without Balance: ${this.balance.toFixed(2)}`);
  }

  this.balance -= value;
  this.showBalance();
};

Account.prototype.deposit = function (value) {
  this.balance += value;
};

Account.prototype.showBalance = function () {
  console.log(
    `Ag: ${this.agency} | N°: ${this.accountNumber} | R$ ${this.balance.toFixed(
      2
    )}`
  );
};

const vitorAccount = new Account(120, 2005, 2000);

function CheckingAccount(agency, accountNumber, balance, limit) {
  Account.call(this, agency, accountNumber, balance);
  this.limit = limit;
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function (value) {
  if (value > this.balance) {
    return console.log(`Without Balance: ${this.balance.toFixed(2)}`);
  }

  this.balance -= value;
  this.showBalance();
};

const cc = new CheckingAccount(120, 2005, 100, 1000);
cc.withdraw(105);
