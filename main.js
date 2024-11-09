//--------------------------------------------------------

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`Hello ${this.name}`);
	}
}

const person = new Person("Banu", 25);

person.sayHello();

//-------------------------------------------------

class Student extends Person {
	constructor(name, age, grade) {
		super(name, age);
		this.grade = grade;
	}

	sayHello() {
		console.log(`My name is ${this.name} I am in ${this.grade} grade `);
	}
}

const student1 = new Student("Jozepf", 11, 6);
student1.sayHello();

//-----------------------------------------------------------------

class Persons {
	static allAges = [];

	constructor(name, age) {
		this.name = name;
		this.age = age;
		Persons.allAges.push(age);
	}
	static averageAge() {
		if (Persons.allAges.length === 0) {
			return 0;
		}
		const sum = Persons.allAges.reduce((total, age) => total + age, 0);
		return sum / Persons.allAges.length;
	}
	sayHello() {
		console.log(`Hello ${this.name}`);
	}
}

const person1 = new Persons("Banu", 25);
const person2 = new Persons("Yusif", 20);
const person3 = new Persons("Cansu", 15);

person1.sayHello();

console.log("Average of Ages:", Persons.averageAge());

//---------------------------------------------------
class Employee extends Person {
	constructor(name, age, position) {
		super(name, age);
		this.position = position;
	}

	myPosition() {
		console.log(`My name is ${this.name},  my position is ${this.position} `);
	}
}

const employee = new Employee("Jansu", 22, "team leader");

employee.myPosition();

//-------------------------------------------

class Animal {
	makeSound() {}
}
class Dog extends Animal {
	makeSound() {
		console.log("Woof!");
	}
}
class Cat extends Animal {
	makeSound() {
		console.log("Meow!");
	}
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();

//------------------------------------------------------------

class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}
	deposit(amount) {
		this.balance += amount;
	}
	withdraw(amount) {
		if (amount <= this.balance) {
			this.balance -= amount;
		} else {
			console.log("Insufficient balance");
		}
	}
	displayBalance() {
		console.log(`Account Balance: ${this.balance}`);
	}
}

const account = new BankAccount("ZULFIYYA", 1500);

account.deposit(1500);
account.withdraw(800);
account.displayBalance();

account.withdraw(1800);
account.displayBalance();

//------------------------------------------------------------

class Book {
	constructor(title, author) {
		this.author = author;
		this.title = title;
	}
}

class Library {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}
	removeBook(title) {
		const index = this.books.findIndex((book) => book.title === title);
		if (index !== -1) {
			this.books.splice(index, 1);
			console.log(`"${title}" removed.`);
		} else {
			console.log(`"${title}" not found.`);
		}
	}
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Frankenstein", "Mary Shelley");
const book5 = new Book("Crime and Punishment", "Fyodor Dostoevsky");
const book6 = new Book("Don Quixote", "Miguel de Cervantes");
const book7 = new Book("Kürk Mantolu Madonna", "Sabahattin Ali");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);

library.removeBook("1984");

console.log(library);

library.removeBook("Frankenstein");

console.log(library);
