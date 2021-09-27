// Classes serve as templates to create new objects
class Rectangle {
  private _width: number;
  private _height: number;

  // block of instruction for objects
  constructor(w, h) {
    this._width = w;
    this._height = h;
  }

  //   getters/setters for outer exess to variables
  public get getWidth() {
    return this._width;
  }
  public set setWidth(value: number) {
    if (value <= 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }

  calcArea(): number {
    return this._width * this._height;
  }
  calcPerimeter(): number {
    return this._width * this._height * 2;
  }
  checkIfSquare(): boolean {
    return this._width === this._height ? true : false;
  }
}

const rect = new Rectangle(5, 10);
const rect2 = new Rectangle(1, 4);
const rect3 = new Rectangle(10, 10);

rect.calcArea();
rect.setWidth = -2;
console.log(rect);

rect2.calcPerimeter();
rect3.checkIfSquare();
console.log(rect3.checkIfSquare());
