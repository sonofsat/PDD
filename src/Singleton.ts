
//La clase Singleton define un `getter` llamado `instance`, que permite a los clientes acceder a la única instancia singleton.

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

export default Singleton;
