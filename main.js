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

    set setMina(mi){
        this.#mina=mi;
    }

    static afilar(p1){
        return `la mina de ${p1}`;
    }
}
/**
 * here are created an instance lapiz1 of the class Lapiz, the calue of material is changed
 */
let lapiz1=new Lapiz({material: "Diamante"});

/**
 * here are used the method setMina to settear the value in tinta
 */
lapiz1.setMina="tinta";
/**
 * print in consola with the method get the mina type of the intance lapiz1
 */
console.log(Lapiz.afilar(lapiz1.getMina));