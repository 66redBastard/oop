// інкапсуляція - обєднання властивостей та методів всередині класу
// сокритіє - ховання всластивостей та методів за допомогою  private, щоб із зовні ми не могли впливати на ці властивості та методи
class User {
  private _url: string;
  private _port: number;
  private _id: number = Math.random();
  private _username: string;
  private _password: string;
  private _tables: object;

  constructor(url: string, port: number, username: string, password: string) {
    this._url = url;
    this._port = port;
    this._username = username;
    this._password = password;
    this._tables = [];
  }

  public get getUsername(): string {
    return this._username;
  }
  public set setUsername(value: string) {
    this._username = value;
  }
  public get getId(): number {
    return this._id;
  }
}

const user = new User("gg.com", 420, "ololo", "xy69");
user.setUsername = "xxx";
console.log(user.getId);
console.log(user);
