// <&-- VARIABLE VALUES
var edge = 5    // edgeXedge --> example: 5x5
var alph = ["A", "B", "C", "D", "E"]
var x = 2; // equals --> alph[2]
var y = 2;
// --&> VARIABLE VALUES

// --&> CALCULATED VALUES
var topY = y - 1;
var bottomY = y + 1;
var leftX = x - 1;
var rightX = x + 1;
// --&> CALCULATED VALUES

// CREATE FIELD
var field = {
    // FIELD PROPERTIES
    "X": alph[x],
    "Y": y,
    "value": null,
    // TOP & BOTTOM
    // top & bottom x-as = x.value of the field
    "top": {
        "X": alph[x], // if x > 0 = alph[x] else null
        "Y": topY || null // if (y > 0 = y-1) and (top.X !== null) else null
    },
    "bottom": {
        "X": alph[x],   // if x > 0 = x else null
        "Y": bottomY        // if (x < edge-1 = y+ 1 else null
    },
    // SIDES
    // sides y-as = y.value of the field
    "left": {
        "X": alph[leftX] || null,       // if x > 0 = alph[x- 1] else null
        "Y": y                         // if left.X !== null = y 
    },
    "right": {
        "X": alph[rightX],               // if (x < edge-1 = x+ 1)
        "Y": y                         // if right.X !== null = y
    },
    // TOPCORNERS
    "TopLeftCorner": {
        "X": alph[leftX],
        "Y": topY
    },
    "TopRightCorner": {
        "X": alph[rightX],
        "Y": topY
    },
    // BOTTOMCORNERS
    "BottomLeftCorner": {
        "X": alph[leftX],
        "Y": bottomY
    },
    "BottomRightCorner": {
        "X": alph[rightX],
        "Y": bottomY
    }
}

field.value = 100;

console.log(field);