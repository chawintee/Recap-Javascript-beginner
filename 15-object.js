// Build JavaScript Objects
var ourDog = {
    "name" : "Camper",
    "legs" : 4, 
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3, 
    "tails": 2,
    "friends": []
}

//Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log({hatValue,shirtValue});

//Accessing Object Properties with Bracket Notation
var testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj1["an entree"];
var sideValue = testObj1[`my side`];
var drinkValue = testObj1['the drink'];

console.log({entreeValue, sideValue, drinkValue});

//Accessing Object Properties with Variables

var testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};


var playerNumber = 16;
var player = testObj2[playerNumber]

console.log({player});


//Updating Object Properties
var ourDog1 = {
    "name": "Camper", 
    "legs": 4,
    "tails": 1,
    "friends": ["everthing!"]
};

console.log({ourDog1});
ourDog1.name = "Happy Camper";
console.log({ourDog1});

var myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
console.log({myDog1});
myDog1.name = "Happy Coder";
console.log({myDog1});



//Add New Properties to an Object
var ourDog2 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

console.log({ourDog2});
ourDog2.bark = "bow-wow";
console.log({ourDog2});

var myDog2 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

console.log({myDog2});
myDog2['bark'] = "woof!"
console.log({myDog2});

//Delete Properties From an Object
var ourDog3 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
}
console.log({ourDog3});

delete ourDog3.bark;

console.log({ourDog3});

var myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
}

console.log({myDog3});
delete myDog3.tails
console.log({myDog3});

//Using Objects for Lookups

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot":"frank"
    };
    result = lookup[val];
    return result;
}
console.log({phoneticLookup:phoneticLookup("foxtrot")});

//Testing Objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else {
        return "Not Found";
    }
}

console.log({checkObj: checkObj("bed")});

//Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold":true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ],
    }
];

//Accessing  Nested Objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log({gloveBoxContents});

//Accessing Nested Arrays 
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1];

console.log({secondTree});

//Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop]
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value
    }
    return collection;
}


console.log(collection);
updateRecords(2468,"tracks","test")
console.log({updateRecords:updateRecords(5439,"artist","ABBA")});







