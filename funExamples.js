// state example for a game
class GameState {
    constructor() {
        this.state = 'start';
    }

    next() {
        switch (this.state) {
            case 'start':
                this.state = 'running';
                break;
            case 'running':
                this.state = 'paused';
                break;
            case 'paused':
                this.state = 'ended';
                break;
            case 'ended':
                this.state = 'start';
                break;
        }
        console.log(`Game is now in the ${this.state} state`);
    }
}

const game = new GameState();
// game.next();
// game.next();
// game.next();

// inheritence example
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    displayType() {
        console.log(`This is a ${this.type}`);
    }
}

class Car extends Vehicle {
    constructor(type, make, model) {
        super(type);
        this.make = make;
        this.model = model;
    }

    displayType() {
        console.log(`This is a ${this.make} ${this.model} ${this.type}`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, make, model) {
        super(type);
        this.make = make;
        this.model = model;
    }

    displayType() {
        console.log(`This is a ${this.make} ${this.model} ${this.type}`);
    }
}

// const myVehicle = new Vehicle('boat');
// myVehicle.displayType()

// const myCar = new Car('car', 'Toyota', 'Corolla');
// myCar.displayType();

// const myMotorcycle = new Motorcycle('motorcycle', 'Harley', 'Davidson');
// myMotorcycle.displayType();

// encapsulation example
function Person(name) {
    let theName = name;

    return {
        getName() {
            return theName;
        },
        setName(name) {
            theName = name;
        }
    }
}

// const john = Person('John');
// console.log(john.getName());

// abstraction example
class EmailService {
    constructor(user) {
        this.user = user;
    }

    // Public Method
    sendEmail(content) {
        this.connect();
        this.authenticate();
        console.log(`Email sent from ${this.user} with content: ${content}`);
        this.disconnect();
    }

    // Private Methods
    connect() {
        console.log('Connected to the email server');
    }

    authenticate() {
        console.log('User Authenticated!');
    }

    disconnect() {
        console.log('Disconnected from the email server');
    }
}

// const emailService = new EmailService('jimmy@email.com');
// emailService.sendEmail('Hello, this is a test email');

// polymorphism example
class Animal {
    speak() {
        console.log('Animal Speaking');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Woof Woof');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Meow Meow');
    }
}

const myDog = new Dog();
myDog.speak();

const myCat = new Cat();
myCat.speak();