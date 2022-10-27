/*Crea una clase Persona con los siguientes atributos: nombre, apellido y edad.
Crea su constructor, get y set.
Dado estos datos mostrar el nombre completo de la persona y constatar que la persona sea mayor de edad, 
si lo es, imprimir en pantalla “Es mayor de edad”, caso contrario imprimir “No es mayor de edad”.
================================================================
Basado en esta clase, la clase Usuario tendrá sus atributos de usuario y contraseña, además de un método el cual 
imprima todos los datos de este usuario.
 */

class Persona{

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

getEdad(){
    return this.edad;
   }

setEdad(edad){
    this.edad = edad;
}

print(){
    if(this.edad <= "17"){
        return "Nombre: "+this.nombre+" "+this.apellido+"\n"+"Es menor de edad";
    } else (this.edad >= "18")
    return "Nombre: "+this.nombre+" "+this.apellido+"\n"+"Es mayor de edad";
    }
}

const Persona1 = new Persona ("Adriana","Pérez",22);
console.log(Persona1.print());

console.log(`-------------------------`);

class Usuario extends Persona{
 constructor(nombre,apellido,edad,usuario,contraseña){
    super(nombre,apellido,edad);
    this.usuario = usuario;
    this.contraseña = contraseña;
 }
 print (){
    return "Nombre: "+this.nombre+ " "+this.apellido+ "\n"+"Edad: "+this.edad+ " Años"+"\n"+"Usuario es: "+this.usuario+"\n"+"Contraseña: "+this.contraseña;
 }
}

const Usuario1 = new Usuario("Adriana","Pérez",22,"adri","abcdefgh");
console.log(Usuario1.print());