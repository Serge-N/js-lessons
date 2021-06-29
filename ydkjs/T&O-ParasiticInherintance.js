// somewhat applies both implict and explict inherantance

// traditional class
function Vehicle() {
    Vehicle.prototype.ignition = function () {
        console.log("Turning on my engine");
    }

    Vehicle.prototype.drive = function () {
        console.log("Steering and moving forward!");
    }
}

// Parasitic class
function Car() {
    var car = new Vehicle(); // well, car is a vechile\

    car.wheels = 4; // modified to specialize

    var vehDrive = car.drive; // previleged reference to Vehicle::drive()

    //override Vehicle::drive()
    car.drive = function () {
        vehDrive.call( this );
        console.log("Rolling on all " + this.wheels + " wheels");
    }

    return car;
}

var myCar = new Car();

myCar.drive();

//conclusion : faking classes in JS often sets more landmines for future coding than solving present real problems.