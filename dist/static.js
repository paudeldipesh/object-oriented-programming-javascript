"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UrgentAutoTicket_fixedCharge, _UrgentAutoTicket_isRefundable;
class AutoTicket {
    constructor(name, autoNumber, autoName) {
        this.status = "Booking";
        this.name = name;
        this.autoNumber = autoNumber;
        this.autoName = autoName;
    }
    static calculatePNR() {
        return Math.ceil(Math.random() * 10000).toString() + AutoTicket.increment;
    }
    bookAutoTicket(amount, source, destination) {
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
AutoTicket.increment = 1;
class UrgentAutoTicket extends AutoTicket {
    constructor() {
        super(...arguments);
        _UrgentAutoTicket_fixedCharge.set(this, 150);
        _UrgentAutoTicket_isRefundable.set(this, true);
    }
    get fixedCharge() {
        return __classPrivateFieldGet(this, _UrgentAutoTicket_fixedCharge, "f");
    }
    bookAutoTicket(amount, source, destination, isRefundable) {
        super.bookAutoTicket(amount, source, destination);
        this.amount += __classPrivateFieldGet(this, _UrgentAutoTicket_fixedCharge, "f");
        __classPrivateFieldGet(this, _UrgentAutoTicket_isRefundable, "f") === isRefundable;
    }
    set fixedCharge(charge) {
        if (typeof charge !== "number")
            throw new Error("Not a Number");
        this.fixedCharge = charge;
    }
}
_UrgentAutoTicket_fixedCharge = new WeakMap(), _UrgentAutoTicket_isRefundable = new WeakMap();
const rudraUrgentTaxiTicket = new UrgentAutoTicket("Rudra God", 7, "Local");
rudraUrgentTaxiTicket.bookAutoTicket(500, "Muglin", "Pokhara", false);
console.log(rudraUrgentTaxiTicket);
console.log(AutoTicket.calculatePNR());
