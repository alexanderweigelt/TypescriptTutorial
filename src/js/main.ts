/**
 * TypeScript tutorial code
 */

/**
 * Set all friends data
 */
const friends = [
    {firstName: 'Alex', age: 47},
    {firstName: 'Lillie'},
    {firstName: 'Mia'},
    {firstName: 'Konstanze'}
];

interface Friends {
    firstName: string;
    age?: number;
}

/**
 * Prints friends firstname
 * @param {*} friends an array of friends
 */
function printFirstName(friends: Friends[]): void {
    for (const friend of friends) {
        hello(friend.firstName);
        if (friend.age) {
            age(friend.age, friend.firstName);
        }
    }
}

/**
 * Says hello `name`
 * @param name
 */
function hello(name: string): void {
    console.log('Hello ' + name + '!!!');
}

/**
 * Gets the friends age
 * @param age
 * @param name
 */
function age(age: number, name: string): void {
    console.log(name + ' is ' + age + ' years old');
}

printFirstName(friends);
