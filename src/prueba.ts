import Singleton from './Singleton';

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1.data); // Output: Esto es un Singleton.
console.log(singleton2.data); // Output: Esto es un Singleton.
console.log(singleton1 === singleton2); // Output: true