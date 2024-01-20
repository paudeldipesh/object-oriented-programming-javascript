class TaxiTicket {
  name: string;
  taxiNumber: number;
  taxiName: string;
  status: string = "Booking";
  amount?: number;
  source?: string;
  destination?: string;
  pnr?: string;

  constructor(name: string, taxiNumber: number, taxiName: string) {
    this.name = name;
    this.taxiNumber = taxiNumber;
    this.taxiName = taxiName;
  }

  bookTaxiTicket(amount: number, source: string, destination: string) {
    this.amount = amount;
    this.source = source;
    this.destination = destination;
    this.status = "Booked!";
    this.pnr = Math.ceil(Math.random() * 10000).toString();
  }

  cancelTaxiTicket() {
    this.status = "Cancelled!";
  }
}

class UrgentTaxiTicket extends TaxiTicket {
  #fixedCharge = 150;
  #isRefundable = true;

  get fixedCharge() {
    return this.#fixedCharge;
  }

  bookTaxiTicket(
    amount: number,
    source: string,
    destination: string,
    isRefundable?: boolean
  ) {
    super.bookTaxiTicket(amount, source, destination);
    this.amount! += this.#fixedCharge;

    this.#isRefundable === isRefundable;
  }

  set fixedCharge(charge: number) {
    if (typeof charge !== "number") throw new Error("Not a Number");

    this.fixedCharge = charge;
  }
}

const radhaUrgentTaxiTicket = new UrgentTaxiTicket("Radha God", 7, "Local");
radhaUrgentTaxiTicket.bookTaxiTicket(500, "Muglin", "Pokhara", false);
console.log(radhaUrgentTaxiTicket);
