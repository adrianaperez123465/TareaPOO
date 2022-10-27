/* 4.	Definir una clase Libro para manejar la información asociada a un libro. La información de interés 
para un libro es: el título, el autor y el precio. Los métodos de interés son:
Un constructor para crear un objeto libro, con título y autor como parámetros. ○ Imprimir en pantalla el 
título, los autores y el precio del libro. 
Métodos get y set para cada atributo de un libro.
Se debe extender la clase Libro definiendo las siguientes clases: 
○ Libros de texto con un nuevo atributo que especifica el curso al cual está asociado el libro. 
○ Libros de texto de la Universidad: subclase de la clase anterior. Esta subclase tiene un atributo que 
especifica cuál facultad lo publicó. 
○ Novelas: pueden ser de diferente tipo, histórica, romántica, policíaca, realista, ciencia ficción o 
aventuras. 
○ Para cada una de las clases anteriores se debe definir su constructor y redefinir adecuadamente el método 
para visualizar del objeto.
 */

class libro{
    constructor(titulo,autor,precio){
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }

    getprecio(){
        return this.precio;
    }

    setprecio (){
        this.precio = precio;
    }

    print(){
        return "El título del libro es "+this.titulo+"\n su autor es "+this.autor+"\n y su precio es de: $"+this.precio;

    }
}

const libro1 = new libro("Pedro Páramo","Juan Rulfo",5);
console.log(libro1.print());

class librotexto extends libro{
    constructor (titulo,autor,precio,curso){
        super(titulo,autor,precio);
        this.curso = curso;
    }
    print(){
        return "El título del libro es "+this.titulo+"\nSu autor es"+this.autor+"\n y su precio es de: $"+this.precio+"\n y es del curso: "+this.curso;

    }

}

const libro2 = new librotexto("Los Miserables","Victor Hugo",15,"Literatura");
console.log(libro2.print());

class librouniversidad extends librotexto{
    constructor(titulo,autor,precio,curso,facultad){
    super(titulo,autor,precio,curso);
    this.facultad = facultad;
    }

    print(){
        return "El titulo es: "+this.titulo+"\nSu autor es: "+this.autor+"\nSu precio es: $"+this.precio+"\ndel curso: "+this.curso+"\nde la facultad de: "+this.facultad;
    }
}

const libro3 = new librouniversidad("Álgebra","Baldor",3,"Matemáticas","Ciencias económicas");
console.log(libro3.print());

class novelas extends libro{
    constructor(titulo,autor,precio,tiponov){
        super(titulo,autor,precio);
        this.tiponov = tiponov;
    }
    print(){
        return "Título es:"+this.titulo+"\nAutor: "+this.autor+"\nSu precio es de: $"+this.precio +"\nEl tipo de la novela es: "+this.tiponov;
    }
}

const libro4 = new novelas("Harry Potter","J.K. Rowling",25,"fantástica");
console.log(libro4.print());
