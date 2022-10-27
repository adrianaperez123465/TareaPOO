/* 2.	Realiza un programa que modele una cuenta bancaria que posee los siguientes atributos: 
 -Nombres del titular.
 -Apellidos del titular. 
 -Número de la cuenta bancaria. 
 -Tipo de cuenta: puede ser una cuenta de ahorros o una cuenta corriente. 
 -Saldo de la cuenta. 
Se debe definir un constructor que inicialice los atributos de la clase. Cuando se crea una cuenta bancaria, 
su saldo inicial tiene un valor de cero. 
En una determinada cuenta bancaria se puede: 
*Imprimir por pantalla los valores de los atributos de una cuenta bancaria. 
*Consultar el saldo de una cuenta bancaria. 
*Consignar un determinado valor en la cuenta bancaria, actualizando el saldo correspondiente. 
*Retirar un determinado valor de la cuenta bancaria, actualizando el saldo correspondiente. 
Es necesario tener en cuenta que no se puede realizar el retiro si el valor solicitado supera el saldo 
actual de la cuenta
 */

class cuentaBancaria{
    constructor (nombretitular,apellidotitular,numcuenta,tipo){
        this.nombretitular = nombretitular;
        this.apellidotitular =apellidotitular;
        this.numcuenta = numcuenta;
        this.tipo = tipo;
        this.saldo = 0;
    }

    getSaldo(){
        return this.saldo;
    }

    setSaldo(){
        this.saldo = saldo;
    }

    print (){
        return "Nombre de cuenta: "+this.nombretitular+" "+this.apellidotitular+"\n"+"Número de cuenta: "+this.numcuenta+"\n"+" Tipo de cuenta: "+this.tipo+"\n"+" Saldo: $"+this.saldo;
    }

    consulta(){
        return "Saldo actual: $"+this.saldo;
    }

    consignar(monto){
        this.saldo +=monto;
        return "El saldo actualizado es: $"+this.saldo;
    }
    
    retiro(monto){
        if(monto<=this.saldo){
            this.saldo-=monto;
            return "Se ha retirado $"+monto+" de su cuenta, el saldo actualizado es de: $"+this.saldo;
        }else{
            return "No hay fondos suficientes para retirar el monto seleccionado"
        }
    }
}

const usuario1 = new cuentaBancaria("Adriana","Pérez",1234567890,"ahorro");
console.log(usuario1.print());
console.log(usuario1.consulta());
console.log(usuario1.consignar(80));
console.log(usuario1.retiro(20));
console.log(usuario1.consulta());