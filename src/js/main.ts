/**
 * TypeScript tutorial code
 */

class Main {
    readonly age: number;
    readonly name: string;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
}

class Greeter extends Main {
    sayHello(): void {
        console.log('Hello ' + this.name + '!!!');
    }

    getAge(): void {
        console.log(this.name + ' is ' + this.age + ' years old');
    }
}

const greeter = new Greeter('Alex', 47);

greeter.sayHello();
greeter.getAge();
