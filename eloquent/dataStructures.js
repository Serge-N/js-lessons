let ListOfNumbers = [2, 3, 5, 7, 11];


console.log(ListOfNumbers[3]);
console.log(ListOfNumbers.length);
//DONE ARRAYS

//DONE PROPERTIES

//DOING METHODS
//ADDING AND REMOVING FROM ARRAYS


let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
sequence.pop();
console.log(sequence);
console.clear();

//OBJECTS
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
}
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};


let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({
    x: 0,
    y: 0,
    z: 2
}));


let objectA = {
    a: 1,
    b: 2
};
Object.assign(objectA, {
    b: 3,
    c: 4
});
console.log(objectA);


let journal = [{
        events: ["work", "touched tree", "pizza",
            "running", "television"
        ],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"
        ],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"
        ],
        squirrel: true
    }
];

console.clear();
console.log(journal);

let object1 = {
    value: 10
};
let object2 = object1;
let object3 = {
    value: 10
};

console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);


const score = {
    visitors: 0,
    home: 0
};
//score.visitors = 1;
//score = {visitors: 1, home: 1};

function addEntry(events, squirrel) {
    journal.push({
        events,
        squirrel
    });
}

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));


function tableFor(event, journal) {
    let table = [0, 0, 0, 0];

    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i],
            index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", journal));

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(journal));


for (let event of journalEvents(journal)) {
    console.log(event + ":", phi(tableFor(event, journal)));
    }