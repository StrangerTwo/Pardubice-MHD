class Place {
    x;
    y;

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

class BusStop {
    x;
    y;
    name;
    
    constructor (name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

export default {
    Place : Place,
    BusStop : BusStop
}