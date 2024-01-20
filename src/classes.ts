class PlaneTicket {
  name: string;
  planeNumber: number;
  planeName: string;
  status: string = "Booking";
  amount?: number;
  source?: string;
  destination?: string;
  pnr?: string;

  constructor(name: string, planeNumber: number, planeName: string) {
    this.name = name;
    this.planeNumber = planeNumber;
    this.planeName = planeName;
  }

  bookPlaneTicket(amount: number, source: string, destination: string) {
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
