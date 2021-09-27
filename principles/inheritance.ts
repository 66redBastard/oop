class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  public get getFullName(): string {
    return `full name - ${this._firstName} ${this._lastName}`;
  }

  public get getFirstName(): string {
    return this._firstName;
  }
  public set setFirstName(value: string) {
    this._firstName = value;
  }
  public get getLastName(): string {
    return this._lastName;
  }
  public set setLastName(value: string) {
    this._lastName = value;
  }
  public get getAge(): number {
    return this._age;
  }
  public set setAge(value: number) {
    if (value < 0) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }
}

class Employee extends Person {
  private _email: string;
  private _phone: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: string
  ) {
    super(firstName, lastName, age);
    this._email = email;
    this._phone = phone;
  }

  public get getEmail(): string {
    return this._email;
  }
  public set setEmail(value: string) {
    this._email = value;
  }
  public get getPhone(): string {
    return this._phone;
  }
  public set setPhone(value: string) {
    this._phone = value;
  }
}

const employee = new Employee(
  "Ivan",
  "Ivanich",
  420,
  "gg@gmail.com",
  "+4206667777"
);
console.log(employee);

class Developer extends Employee {
  private _level: string;
  private _stack: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: string,
    level: string,
    stack: string
  ) {
    super(firstName, lastName, age, email, phone);
    this._level = level;
    this._stack = stack;
  }
}

const developer = new Developer(
  "Gerbert",
  "Shieldt",
  420,
  "gg69@gmail.com",
  "+4206669999",
  "jun",
  "js"
);
console.log(developer.getFullName);
