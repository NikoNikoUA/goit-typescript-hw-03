abstract class House {
  protected tenants: Person[] = [];
  protected door: boolean = false;
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract OpenDoor(key: Key): void;
}

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
