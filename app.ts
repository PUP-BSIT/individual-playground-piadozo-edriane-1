enum DistanceUnit {
    KILOMETER = "km",
    MILE = "m"
};

type Vehicle = {
    plate_no: string,
    owner_name: string,
    speed: number,
    printSpeed(): void,
    distance: DistanceUnit;
};

type Person = {
    full_name: string,
    birthday: Date,
    speed: number,
    printSpeed(): void,
    distance: DistanceUnit;
};

type Contestant = Person | Vehicle;

function speedTest (contestant: Contestant ): void {
    contestant.printSpeed();
}

const myCar: Vehicle = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed() {
        console.log(`The current speed of ${this.plate_no} is ${this.speed}`)
    },

}

const janeDee: Person = {
    full_name: "Jane Dee",
    birthday: new Date ("2002-03-25"),
    speed: 6.5,
    printSpeed() {
        console.log(`The current speed of ${this.full_name} is ${this.speed}`)
    },
}

myCar.printSpeed();
janeDee.printSpeed();

speedTest(myCar);
speedTest(janeDee);