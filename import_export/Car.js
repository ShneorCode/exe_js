// תרגיל 3

class Car {
    constructor(make, model){
        this.make = make;
        this. model = model;

    }
    
    getDetails() {
        return `${this.make}, ${this.model}`
    }

}

export {Car};