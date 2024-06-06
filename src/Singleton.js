"use strict";
//La clase Singleton define un `getter` llamado `instance`, que permite a los clientes acceder a la única instancia singleton.
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    // El constructor es privado para evitar la creación de nuevas instancias.
    constructor() {
        this.data = "Esto es un Singleton";
    }
    // Esta implementación permite extender la clase Singleton mientras mantienes alrededor solo una instancia de cada subclase.
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
exports.default = Singleton;
