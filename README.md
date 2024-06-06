# Singleton

## ¿Qué es?
Singleton es un patrón de diseño que asegura que una clase solo tenga una instancia única y proporciona un punto de acceso global a esa instancia única.

En otras palabras, es un patrón de creación que restringe la creación de clases a un solo objeto.

## ¿Cómo funciona?

Singleton funciona creando una clase que tiene un método estático que devuelve la única instancia de la clase. Este método se llama "getInstance()" y se utiliza para obtener la instancia de la clase Singleton.

## ¿Cómo resuelve el problema?
El problema que resuelve Singleton es el problema de los objetos globales. En un sistema grande, puede ser difícil controlar las dependencias entre los objetos. Y Singleton ofrece una solución a este problema al proporcionar un único punto de acceso global a una instancia de una clase.

## Implementación en Node.js

CONFIGURAR EL PROYECTO:
mkdir PDD
cd PDD
npm init -y
npm install typescript --save-dev
npx tsc --init


Singleton.ts 
class Singleton {
    private static instance: Singleton;
    public data: string;

    // El constructor es privado para evitar la creación de nuevas instancias.
    private constructor() {
        this.data = "Esto es un Singleton";
    }

    // Esta implementación permite extender la clase Singleton mientras mantienes alrededor solo una instancia de cada subclase.

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

En esta implementación:

La clase Singleton define un getter estático llamado "instance" que permite a los clientes acceder a la única instancia singleton.

También define un constructor privado para evitar la creación de nuevas instancia de la clase. Además, se utiliza para inicializar la instancia Singleton.

En este caso, se inicializa la propiedad "this.data = Esto es un Singleton".

getInstance() es un método estático que devuelve la única instancia de la clase Singleton. Si la instancia no existe, se crea una nueva instancia y se almacena en la propiedad estática instance.

Prueba
La prueba de la implementación del patrón Singleton se realiza de la siguiente manera:

prueba.ts

import Singleton from './Singleton';

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1.data); // Output: Esto es un Singleton.
console.log(singleton2.data); // Output: Esto es un Singleton.
console.log(singleton1 === singleton2); // Output: true

La prueba crea dos instancias de la clase Singleton utilizando el método "getInstance()". Después, imprime los valores de la propiedad "data" y se comprueba si las dos instancias son iguales utilizando el operador de igualdad estricta "(===)".

La salida de la prueba, en este caso es: 

"Esto es un Singleton"
"Esto es un Singleton"
true

Esto demuestra que la implementación del patrón Singleton funciona correctamente y que solamente existe un única instancia de Singleton en el programa.

## UML

![alt text](<Singleton UML Class Diagram.png>)

En este diagrama UML:

Singleton: es la clase Singleton.
instance: es un campo estático que almacena la única instancia de la clase Singleton.
getInstance(): es un método estático que devuelve la única instancia de la clase Singleton.

