"use strict";
class RocketTicket {
    constructor(name, rocketNumber, rocketName) {
        this.status = "Booking";
        this.name = name;
        this.rocketNumber = rocketNumber;
        this.rocketName = rocketName;
    }
    bookRocketTicket(amount, source, destination) {
        this.amount = amount;
        this.source = source;
        this.destination = destination;
        this.status = "Booked!";
        this.spr = Math.ceil(Math.random() * 10000).toString();
    }
    cancelRocketTicket() {
        this.status = "Cancelled!";
    }
}
class UrgentRocketTicket extends RocketTicket {
    constructor() {
        super(...arguments);
        this.fixedCharge = 150;
    }
}
const krishnaUrgentRocketTicket = new UrgentRocketTicket("Krishna God", 7, "Neil");
const shivaRocketTicket = new RocketTicket("Shiva God", 2, "Marry");
console.log({ krishnaUrgentRocketTicket, shivaRocketTicket });
