class Phone {
  #password;

  constructor(brand, model, password) {
    this.brand = brand;
    this.model = model;
    this.#password = password;
    this.batteryLevel = 100;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.batteryLevel = 100;
    return 'Phone fully charged';
  }

  unlock(password) {
    return password === this.#password;
  }
}

class IPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super('Apple', model, password);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number} using FaceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `Facetiming ${name}`;
  }
}
