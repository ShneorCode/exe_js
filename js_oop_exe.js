// תרגיל 1


function Phone(brand, model) {
  this.brand = brand;
  this.model = model;
  this.details = function () {
    console.log(`Phone: ${this.brand} ${this.model}`);
  };
}

const phone1 = new Phone("Samsung", "S22");
phone1.details();



// תרגיל 2

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect = new Rectangle(5, 4);
console.log(rect.area());


// תרגיל 3

function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Error: Withdrawal greater than balance");
    }
  };

  this.checkBalance = function () {
    console.log(`Balance: ${this.balance}`);
  };
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(200);
account.checkBalance();


// תרגיל 4

function Animal(name) {
  this.name = name;
  this.speak = function () {
    console.log(`${this.name} makes a sound`);
  };
}

function Dog(name) {
  Animal.call(this, name);
  this.bark = function () {
    console.log(`${this.name} barks`);
  };
}

const dog = new Dog("Rocky");
dog.speak();
dog.bark();


// תרגיל 7

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    return `${this.title} by ${this.author}`;
  }
}

const book = new Book("The Hobbit", "Tolkien");
console.log(book.info());



// תרגיל 8

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }

  study() {
    return `${this.name} is studying at ${this.school}`;
  }
}

const student = new Student("Alice", "Oxford");
console.log(student.greet()); 
console.log(student.study());

// תרגיל 9

class Employee {
  #salary;

  constructor(salary) {
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  work() {
    return "Employee is working";
  }
}

class Manager extends Employee {
  work() {
    return "Manager is managing";
  }
}

const emp = new Employee(4000);
console.log(emp.getSalary());
console.log(emp.work());      

const mgr = new Manager(5000);
console.log(mgr.getSalary());
console.log(mgr.work());    
