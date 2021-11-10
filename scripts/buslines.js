const fs = require('fs');

function newBusline(busNumber, smer, places) {
    return {
        number: busNumber,
        smer: smer,
        route: places,
    };
}

async function run() {
    var buslines = [];

    buslines = [...buslines, newBusline(1, "A", [190, 188, 196, 175, 117, 116, 97, 98, 116, 117, 176, 196, 187, 188, 189])];
    buslines = [...buslines, newBusline(2, "A", [85, 84, 82, 81, 74, 86, 87, 88, 107, 106, 105, 102, 98, 97, 92, 95, 207, 208, 210, 230, 250, 251, 259, 271, 272, 273, 274, 275, 299, 301, 299, 298, 321, 295, 287, 285, 258, 257])];

    const buslinesJson = JSON.stringify(buslines);
    fs.writeFile(__dirname + "/../server/files/buslines.json", buslinesJson, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("Buslines were updated successfully!");
    });
}

run();