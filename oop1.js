// BANK

function Bank() {
    this.customers = {};
};

Bank.prototype.addCustomer = function(customer) {
    this.customers[customer] = 0;
};

Bank.prototype.printAccount = function(customer) {
    console.log(`${customer} account is ${this.customers[customer]}`);
}

Bank.prototype.deposit = function(customer, amount) {
    this.customers[customer] += amount;
}

Bank.prototype.withdraw = function(customer, amount) {
    if (amount > this.customers[customer]) {
        console.log("Not enough money");
    } else {
    this.customers[customer] -= amount; 
    }   
}

Bank.prototype.printAll = function() {
    console.log(this.customers);
}

let bank = new Bank();
bank.addCustomer('Sheldon');
bank.addCustomer('Sheldon');
bank.printAccount('Sheldon');
bank.deposit('Sheldon', 10);
bank.printAccount('Sheldon');
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 1000);
bank.printAccount('Sheldon'); // this should print 'Sheldon account is 10'
bank.printAccount('Raj'); // this should print 'Raj account is 9900'
bank.withdraw('Raj', 9999999);
bank.printAll();



