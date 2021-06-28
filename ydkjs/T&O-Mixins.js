// mixins where created to mimick the behaviour of classes in js

// this is an explict-mixin example
// vastly simplied `mixin(..)` exmaple:
function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        // only copy if not already present
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }

    return targetObj;
}

var Vehicle = {
    engines: 1,

    ignition: function () {
        console.log("Turning on my engine.");
    },

    drive: function () {
        this.ignition();
        console.log("Steering and moving forward!");
    }
}

var Car = mixin(Vehicle, {
    wheels: 4,

    drive: function () {
        Vehicle.drive.call(this); // which drive are well calling ?
        console.log("Rolling on all " + this.wheels + " wheels!")
    }
});

// call the function 
Car.drive();

// Conclusion: explict pseudopolymorphism
// should be avoided wherever possible, because the cost outweighs the
// benefit in most respects.