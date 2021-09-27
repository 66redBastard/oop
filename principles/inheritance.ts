class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
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
}

const employee1 = new Employee(
  "Ivan",
  "Ivanich",
  420,
  "gg@gmail.com",
  "+4206667777"
);
console.log(employee1);
