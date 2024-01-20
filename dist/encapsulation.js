"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UrgentBusTicket_instances, _UrgentBusTicket_fixedCharge, _UrgentBusTicket_changeFixedChargeByAdmin;
class BusTicket {
    constructor(name, busNumber, busName) {
        this.status = "Booking";
        this.name = name;
        this.busNumber = busNumber;
        this.busName = busName;
    }
    bookBusTicket(amount, source, destination) {
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
    constructor() {
        super(...arguments);
        _UrgentBusTicket_instances.add(this);
        _UrgentBusTicket_fixedCharge.set(this, 150);
    }
    get fixedCharge() {
        return __classPrivateFieldGet(this, _UrgentBusTicket_fixedCharge, "f");
    }
    set fixedCharge(charge) {
        if (typeof charge !== "number") {
            throw new Error("Not a Number");
        }
        __classPrivateFieldGet(this, _UrgentBusTicket_instances, "m", _UrgentBusTicket_changeFixedChargeByAdmin).call(this);
    }
}
_UrgentBusTicket_fixedCharge = new WeakMap(), _UrgentBusTicket_instances = new WeakSet(), _UrgentBusTicket_changeFixedChargeByAdmin = function _UrgentBusTicket_changeFixedChargeByAdmin() {
    __classPrivateFieldSet(this, _UrgentBusTicket_fixedCharge, 500, "f");
};
const narayanBusTicket = new UrgentBusTicket("Narayan God", 7, "Metro");
narayanBusTicket.fixedCharge = 700;
console.log(narayanBusTicket.fixedCharge);
