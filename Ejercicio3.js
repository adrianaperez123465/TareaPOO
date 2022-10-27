/* 3.	Se requiere un programa que modele el concepto de un automóvil. 
Un automóvil tiene los siguientes atributos: 
Marca: el nombre del fabricante. 
Modelo: año de fabricación. 
Velocidad máxima: velocidad máxima sostenida por el vehículo en km/h.

La clase debe incluir los siguientes métodos: 
Un constructor para la clase y métodos get y set para la clase Automóvil. 
Métodos para acelerar una cierta velocidad, desacelerar y frenar (colocar la velocidad actual en cero). 
Es importante tener en cuenta que no se debe acelerar más allá de la velocidad máxima permitida para el 
automóvil. De igual manera, tampoco es posible desacelerar a una velocidad negativa. Si se cumplen estos casos,
 se debe mostrar por pantalla los mensajes correspondientes. 
Un método para mostrar los valores de los atributos de un Automóvil en pantalla.

Dado esta clase,  deben crear un automóvil, colocar su velocidad actual en 100 km/h, aumentar su velocidad en 
20 km/h, luego decrementar su velocidad en 50 km/h, y después frenar. Con cada cambio de velocidad, se debe 
mostrar en pantalla la velocidad actual.
 */

class automovil{
    constructor (marca,modelo,velocidadmaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadmaxima = velocidadmaxima;
        this.velocidad = 0;
    }

    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad){
        this.velocidad = velocidad;
    }

    print (){
        return "El modelo del automóvil es: "+this.modelo+"\n"+"La marca es: "+this.marca+"\n"+" La velocidad máxima es de: "+this.velocidad+"km/h";
    }
    velocidadactual(velocidadact){
        this.velocidad+=velocidadact;
        return "La velocidad actual es: "+this.velocidad+"Km/h";
    }

    acelerar(aumento){
        if((this.velocidad+aumento)<this.velocidadmaxima){
            this.velocidad+=aumento;
            return "Se aceleró la velocidad en: "+aumento+"km/h \n"+" La velocidad actual es: "+this.velocidad+"km/h";
        }else{
            return "No se puede acelerar más allá de la velocidad máxima.";
        }
    }

    desacelerar(disminución){
        if((this.velocidad-disminución)>0){
            this.velocidad-=disminución;
            return "La velocidad disminuyó en "+disminución+"km/h \n"+"La velocidad actual es de "+this.velocidad+"km/h";
        }else{
            return "La velocidad no puede disminuir más de los 0km/h.";
        }
    }

    frenar(){
        this.velocidad = 0;
        return "El automóvil ha frenado \n"+"La velocidad actual es de: "+this.velocidad+"km/h";
    }
}

const automovil1 = new automovil("Porsche","Rojo",300);
console.log(automovil1.print());
console.log(automovil1.velocidadactual(100));
console.log(automovil1.acelerar(50));
console.log(automovil1.desacelerar(100));
console.log(automovil1.frenar());