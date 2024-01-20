interface TypeOfThisInTrainTicket {
  name: string;
  trainNumber: number;
  trainName: string;
  amount: number;
  source: string;
  destination: string;
  status: string;
  pnr: string;
}

function TrainTicket(
  this: TypeOfThisInTrainTicket,
  name: string,
  trainNumber: number,
  trainName: string
) {
  this.name = name;
  this.trainNumber = trainNumber;
  this.trainName = trainName;
  this.status = "Booking!";
}

TrainTicket.prototype.bookTrainTicket = function bookTrainTicket(
  amount: number,
  source: string,
  destination: string
) {
  this.amount = amount;
  this.source = source;
  this.destination = destination;
  this.status = "Booked!";
  this.pnr = Math.ceil(Math.random() * 10000).toString();
};

TrainTicket.prototype.cancelTrainTicket = function cancelTrainTicket() {
  this.status = "Cancelled!";
};

const dipeshTrainTicket = new (TrainTicket as any)(
  "Dipesh Paudel",
  8992,
  "Chitwan Express"
);
const rashmiTrainTicket = new (TrainTicket as any)(
  "Rashmi Baruwal",
  2370,
  "Japan Express"
);

dipeshTrainTicket.bookTrainTicket(100, "Chitwan", "Kathmandu");
rashmiTrainTicket.bookTrainTicket(200, "Kathmandu", "Japan");
rashmiTrainTicket.cancelTrainTicket();
console.log({ dipeshTrainTicket, rashmiTrainTicket });
