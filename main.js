/**
 * The class Lapiz were created, with the parameters calor, tamano and the private material and mina
 */
class Lapiz{
    color;
    tamano;
    #material;
    #mina
    /**
     * 
     * @param {color} color 
     * @param {tamano} tamano 
     * @param {material} material 
     * @param {mina} mina 
     */
    constructor(color="Amarillo", tamano="9cm", material="Madera", mina="Carbon"){
        /**
         * here we are assigned the diferent values from the constructor to the class
         */
        this.color=color;
        this.tamano=tamano;
        this.#material=material;
        this.#mina=mina;
    }
    /**
     * this are the setters and getters that are used to obtain and set the data in the instance
     */
    get getMina(){
        return this.#mina;
    }

    set setMina(mina){
        this.#mina=mina;
    }

    static afilar(p1){
        return `la mina de ${p1} se puede afilar`;
    }
}

/**
 * create a subclass extends from Lapiz this subclass obtein the methods and parameters from Lapiz
 */
class LapizMecanico extends Lapiz{
    /**
     * 
     * @param {mina} mina 
     */
    constructor({mina="Metalica"}){
        super({mina});
    }
    /**
     * at this point the parameter mina was changed to Metalica and the other parameters color, tamanio, material was obtein from Lapizç
     * this is inheritance. 
     */

    /**this static method afilar was overcharged. In this case for JavaScript we can consider this as  polymorphism
     * because we are change the properties that was inherited. 
     */

    static afilar(p1){
        return `la mina de ${p1} no se puede afilar`;
    }

}
/**
 * here 
 */
let lapicero = new LapizMecanico({});
lapicero.setMina="Aluminio";
console.log(lapicero.getMina);


/**
 * here are created an instance lapiz1 of the class Lapiz, the calue of material is changed
 */
// let lapiz1=new Lapiz({material: "Diamante"});

/**
 * here are used the method setMina to settear the value in tinta
 */
// lapiz1.setMina="tinta";
/**
 * print in consola with the method get the mina type of the intance lapiz1
 */
// console.log(Lapiz.afilar(lapiz1.getMina));