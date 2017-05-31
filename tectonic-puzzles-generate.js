var alph = ["A", "B", "C", "D", "E", "F", "G", "H"];
var edge = 5;    // edgeXedge --> example: 5x5 USERINPUT

var fields = [];

for (var y = 0; y < edge; y++) {
    for (var x = 0; x < edge; x++) {
        // --&> CALCULATED VALUES
        if (y !== 0)
        { var topY = y - 1; } else { var topY = null; }

        if (x !== 0)
        { var leftX = x - 1; } else { var leftX = null; }

        if (y < edge - 1)
        { var bottomY = y + 1; } else { var bottomY = null; }

        if (x < edge - 1)
        { var rightX = x + 1; } else { var rightX = null; }
        // --&> CALCULATED VALUES

        // CREATE FIELD
        var field = {
            "X": alph[x],
            "Y": y,
            "value": null
        }

        // TOP & BOTTOM
        if (alph[x] !== undefined) {
            if (topY !== null) {
                field.top = {
                    "X": alph[x],
                    "Y": topY
                }
            }

            if (bottomY !== null) {
                field.bottom = {
                    "X": alph[x],
                    "Y": bottomY
                }
            }
        }

        // SIDES
        if (y !== null) {
            if (alph[leftX] !== undefined) {
                field.left = {
                    "X": alph[leftX],
                    "Y": y
                }
            }

            if (alph[rightX] !== undefined) {
                field.right = {
                    "X": alph[rightX],
                    "Y": y
                }
            }
        }

        // TOP CORNERS
        if (topY !== null) {
            if (alph[leftX] !== undefined) {
                field.left = {
                    "X": alph[leftX],
                    "Y": topY
                }
            }

            if (alph[rightX] !== undefined) {
                field.right = {
                    "X": alph[rightX],
                    "Y": topY
                }
            }
        }

        // BOTTOM CORNERS
        if (bottomY !== null)
        {
            if (alph[leftX] !== undefined) {
                field.left = {
                    "X": alph[leftX],
                    "Y": bottomY
                }
            }

            if (alph[rightX] !== undefined) {
                field.right = {
                    "X": alph[rightX],
                    "Y": bottomY
                }
            }
        }

        // add field to array
        fields.push(field);
    }
}

console.log(fields);