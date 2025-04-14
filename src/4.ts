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
    constructor(private key: Key) {}
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
  
    constructor(protected key: Key) {}
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person entered the house');
      } else {
        console.log('Door is closed');
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key === this.key) {
        this.door = true;
        console.log('Door is now open');
      } else {
        console.log('Wrong key');
      }
    }
  }
  
  const realKey = new Key();
  const fakeKey = new Key();
  
  const house = new MyHouse(realKey);
  const person = new Person(realKey);
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  const stranger = new Person(fakeKey);
  house.openDoor(stranger.getKey());
  house.comeIn(stranger);