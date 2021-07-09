// constructor

// exmple of inheritance

//  base class
class Vechicle {
    engines = 1;

    iginition(){
        console.log("Turning on my engine.")
    }

    drive(){
        this.iginition();
        console.log("Sterering and moving forward!");
    }
}

// js like c# does not provide multiple inheritance.

// we don't need classes to create meanfull relationships but we do need linked objects.

// do this using Object.create(..)