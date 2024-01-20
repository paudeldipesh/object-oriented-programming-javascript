class RocketTicket {
  name: string;
  rocketNumber: number;
  rocketName: string;
  status: string = "Booking";
  amount?: number;
  source?: string;
  destination?: string;
  spr?: string;

  constructor(name: string, rocketNumber: number, rocketName: string) {
    this.name = name;
    this.rocketNumber = rocketNumber;
    this.rocketName = rocketName;
  }

  bookRocketTicket(amount: number, source: string, destination: string) {
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
  fixedCharge = 150;
}

const krishnaUrgentRocketTicket = new UrgentRocketTicket(
  "Krishna God",
  7,
  "Neil"
);
const shivaRocketTicket = new RocketTicket("Shiva God", 2, "Marry");
console.log({ krishnaUrgentRocketTicket, shivaRocketTicket });
