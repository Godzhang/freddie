class Person {
  constructor(firstname, lastname, ssn, birthYear = null, address = null) {
    this._ssn = ssn;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthYear = birthYear;
    this._address = address;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname) {
    this._firstname = firstname;
    return this;
  }

  get lastname() {
    return this._lastname;
  }

  set birthYear(year) {
    this._birthYear = year;
  }

  get birthYear() {
    return this._birthYear;
  }

  set address(addr) {
    this._address = addr;
  }

  get address() {
    return this._address;
  }

  get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }
}

class Address {
  constructor(country, state = null, city = null, zip = null, street = null) {
    this._country = country;
    this._state = state;
    this._city = city;
    this._zip = zip;
    this._street = street;
  }

  get street() {
    return this._street;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get zip() {
    return this._zip;
  }

  get country() {
    return this._country;
  }

  set country(country) {
    this._country = country;
    return this;
  }
}

const isValid = (val) => !_.isUndefined(val) && !_.isNull(val);
