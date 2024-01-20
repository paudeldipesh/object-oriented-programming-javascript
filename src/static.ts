class AutoTicket {
  name: string;
  autoNumber: number;
  autoName: string;
  status: string = "Booking";
  amount?: number;
  source?: string;
  destination?: string;
  pnr?: string;
  static increment = 1;

  constructor(name: string, autoNumber: number, autoName: string) {
    this.name = name;
    this.autoNumber = autoNumber;
    this.autoName = autoName;
  }

  static calculatePNR() {
    return Math.ceil(Math.random() * 10000).toString() + AutoTicket.increment;
  }

  bookAutoTicket(amount: number, source: string, destination: string) {
    this.amount = amount;
    this.source = source;
    this.destination = destination;
    this.status = "Booked!";
    this.pnr = AutoTicket.calculatePNR();
  }

  cancelAutoTicket() {
    this.status = "Cancelled!";
  }
}

class UrgentAutoTicket extends AutoTicket {
  #fixedCharge = 150;
  #isRefundable = true;

  get fixedCharge() {
    return this.#fixedCharge;
  }

  bookAutoTicket(
    amount: number,
    source: string,
    destination: string,
    isRefundable?: boolean
  ) {
    super.bookAutoTicket(amount, source, destination);
    this.amount! += this.#fixedCharge;

    this.#isRefundable === isRefundable;
  }

  set fixedCharge(charge: number) {
    if (typeof charge !== "number") throw new Error("Not a Number");

    this.fixedCharge = charge;
  }
}

const rudraUrgentTaxiTicket = new UrgentAutoTicket("Rudra God", 7, "Local");
rudraUrgentTaxiTicket.bookAutoTicket(500, "Muglin", "Pokhara", false);
console.log(rudraUrgentTaxiTicket);

console.log(AutoTicket.calculatePNR());
