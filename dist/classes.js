"use strict";
class PlaneTicket {
    constructor(name, planeNumber, planeName) {
        this.status = "Booking";
        this.name = name;
        this.planeNumber = planeNumber;
        this.planeName = planeName;
    }
    bookPlaneTicket(amount, source, destination) {
        this.amount = amount;
        this.source = source;
        this.destination = destination;
        this.status = "Booked!";
        this.pnr = Math.ceil(Math.random() * 10000).toString();
    }
    cancelPlaneTicket() {
        this.status = "Cancelled!";
    }
}
const ramPlaneTicket = new PlaneTicket("Ram God", 434, "Yeti");
const sitaPlaneTicket = new PlaneTicket("Sita God", 435, "Buddha Air");
sitaPlaneTicket.cancelPlaneTicket();
console.log({ ramPlaneTicket, sitaPlaneTicket });
