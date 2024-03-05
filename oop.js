// inheritance example
const fido = {
    name: 'Fido',
    color: 'brown',
    describe() {
        return `My name is ${this.name}, and I am ${this.color}.`
    }
}

// RECOMMENDED 
// console.log(fido.describe());

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    sleep() {
        return `${this.name} is sleeping.`
    }

    describe() {
        return `My name is ${this.name}, and I am ${this.color}.`
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(name, color);
    }

    describe() {
        return `A ${this.color} colored dog named ${this.name} says Woof!`
    }
}

// const goldy = new Animal('Goldy', 'gold');
// console.log(goldy.sleep());

// const scooby = new Dog('Scooby', 'brown');
// console.log(scooby.describe());


// abstraction example
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return (this.width + this.height) * 2;
    }
}

const shape = new Rectangle(10, 8);

function showArea(shape) {
    return `The area of this shape is ${shape.area}`
}

// console.log(showArea(shape))

function showPerimeter(shape) {
    return `The perimeter of this shape is ${shape.perimeter}`
}

// console.log(showPerimeter(shape))

// polymorphism example
class Fruit {
    constructor(hasSeeds, flavor) {
        this.hasSeeds = hasSeeds;
        this.flavor = flavor;
    }

    describeFlavor() {
        return `I am a ${this.flavor} fruit. I have seeds: ${this.hasSeeds}`;
    }
}

class Tomato extends Fruit {
    constructor(hasSeeds, flavor) {
        super(hasSeeds, flavor);
    }

    describeFlavor() {
        console.log(`I am a ${this.flavor} tomato. I have seeds: ${this.hasSeeds}`)
    }
}

class Avocado extends Fruit {
    constructor(hasSeeds, flavor) {
        super(hasSeeds, flavor);
    }

    describeFlavor() {
        console.log(`I am a ${this.flavor} avocado. I have seeds: ${this.hasSeeds}`)
    }
}

const tomato = new Tomato(true, 'sweet');
tomato.describeFlavor();

const avocado = new Avocado(false, 'buttery');
avocado.describeFlavor();