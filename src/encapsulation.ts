class BusTicket {
  name: string;
  busNumber: number;
  busName: string;
  status: string = "Booking";
  amount?: number;
  source?: string;
  destination?: string;
  pnr?: string;

  constructor(name: string, busNumber: number, busName: string) {
    this.name = name;
    this.busNumber = busNumber;
    this.busName = busName;
  }

  bookBusTicket(amount: number, source: string, destination: string) {
    this.amount = amount;
    this.source = source;
    this.destination = destination;
    this.status = "Booked!";
    this.pnr = Math.ceil(Math.random() * 10000).toString();
  }

  cancelBusTicket() {
    this.status = "Cancelled!";
  }
}

class UrgentBusTicket extends BusTicket {
  #fixedCharge = 150;

  #changeFixedChargeByAdmin() {
    this.#fixedCharge = 500;
  }

  get fixedCharge() {
    return this.#fixedCharge;
  }

  set fixedCharge(charge: number) {
    if (typeof charge !== "number") {
      throw new Error("Not a Number");
    }
    this.#changeFixedChargeByAdmin();
  }
}

const narayanBusTicket = new UrgentBusTicket("Narayan God", 7, "Metro");
narayanBusTicket.fixedCharge = 700;
console.log(narayanBusTicket.fixedCharge);
