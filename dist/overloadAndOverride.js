"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UrgentTaxiTicket_fixedCharge, _UrgentTaxiTicket_isRefundable;
class TaxiTicket {
    constructor(name, taxiNumber, taxiName) {
        this.status = "Booking";
        this.name = name;
        this.taxiNumber = taxiNumber;
        this.taxiName = taxiName;
    }
    bookTaxiTicket(amount, source, destination) {
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
    constructor() {
        super(...arguments);
        _UrgentTaxiTicket_fixedCharge.set(this, 150);
        _UrgentTaxiTicket_isRefundable.set(this, true);
    }
    get fixedCharge() {
        return __classPrivateFieldGet(this, _UrgentTaxiTicket_fixedCharge, "f");
    }
    bookTaxiTicket(amount, source, destination, isRefundable) {
        super.bookTaxiTicket(amount, source, destination);
        this.amount += __classPrivateFieldGet(this, _UrgentTaxiTicket_fixedCharge, "f");
        __classPrivateFieldGet(this, _UrgentTaxiTicket_isRefundable, "f") === isRefundable;
    }
    set fixedCharge(charge) {
        if (typeof charge !== "number")
            throw new Error("Not a Number");
        this.fixedCharge = charge;
    }
}
_UrgentTaxiTicket_fixedCharge = new WeakMap(), _UrgentTaxiTicket_isRefundable = new WeakMap();
const radhaUrgentTaxiTicket = new UrgentTaxiTicket("Radha God", 7, "Local");
radhaUrgentTaxiTicket.bookTaxiTicket(500, "Muglin", "Pokhara", false);
console.log(radhaUrgentTaxiTicket);
