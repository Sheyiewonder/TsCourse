function greetUser(name: string, role: "admin" | "user") {
    return `Sorry ${name}, you're not an admin!`
}

const ay = greetUser("Emmanuel Adeoye", "user")

enum subscriptions {
    free = "FREE",
    premium = "PREMIUM",
    enterprise = "ENTERPRISE"
  }
  
  let subscription: subscriptions = subscriptions.free;
    
// console.log(ay, '\n', 'You are subscribed to the', subscription, 'plan',)

let user: ([name: string, age: number]) 

user = (["Ade Ife", 23])

// console.log(user)

class Employee {
  public name: string;   // Accessible anywhere
  private salary: number;  // Only accessible within the class
  protected department: string; // Accessible within the class & subclasses

  constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
  }

  getSalary(): number {
      return this.salary;  // ✅ Allowed
  }

  getDepartment(): string{
      return this.department;
  }
}

const emp1 = new Employee("Bob", 50000, "Engineering");
// console.log(emp1.name);   // ✅ Allowed
// console.log(emp1.getSalary()); // ❌ Error: 'salary' is private

// console.log(`${emp1.name}, is in the ${emp1.getDepartment()} department, \n and is recieving a monthly salary of ${emp1.getSalary()}.`)

class BankAccount {
  private balance: number = 0;

  get getBalance(): number {
      return this.balance;
  }

  set setBalance(amount: number) {
      if (amount < 0) throw new Error("Invalid amount");
      this.balance = amount;
  }
}

const account = new BankAccount();
account.setBalance = 1000;  // ✅ Allowed
// console.log(account.getBalance); // Output: 1000

interface Vehicle {
  brand: string;
  speed: number;
  drive?(): void;
  ride?(): string;

}

class Car implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
  }

  drive(): void {
      console.log(`${this.brand} is driving at ${this.speed} km/h.`);
  }
}

class Bike extends Car {
    super(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
  }

  ride(): string {
      return(`${this.brand} is riding at ${this.speed} km/h.`);
  }
}

const myCar = new Car("Tesla", 120);
myCar.drive();

const myBike = new Bike("TVS", 80);
console.log(myBike.ride());

function getLastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

// Example usage:
console.log(getLastElement<number>([10, 20, 30]));    // Output: 30
console.log(getLastElement<string>(["apple", "banana", "cherry"])); // Output: "cherry"
console.log(getLastElement<boolean>([true, false, true])); // Output: true
console.log(getLastElement<number>([])); // Output: undefined
