interface FooBarObj2 {
  foo: number;
  bar: string;
}

const obj4: FooBarObj2 = {
  foo: 0,
  bar: 'string',
};

type PriceData = {
  [key: string]: number;
}

const priceData: PriceData = {
  apple: 200,
  coffee: 120,
  bento: 500,
};

// OK
priceData.chicken = 250;

// NG
// priceData.banana = 'banana';



// インデックスシグネチャの危ない例
const propName: string = "foo";

const obj5 = {
  [propName]: 123
};

console.log(obj.foo);

type MyObj2 = {
  hoge: boolean;
  fuga: boolean;
  baz?: number;
}

const obj6: MyObj2 = {
  hoge: false,
  fuga: true,
};

const obj7: MyObj2 = {
  hoge: true,
  fuga: false,
  baz: 123,
};

console.log(obj6.baz);
console.log(obj7.baz);

type MyObj3 = {
  readonly foo: number;
};

const obj8: MyObj3 = {
  foo: 123,
};

// error
// obj8.foo = 456;


const num: number = 0;

// 型Tはnumber型である
type T = typeof num;

// fooはnumber型である
const foo: T = 123;

const obj9 = {
  foo: 123,
  bar: "hi",
};

type U = typeof obj9;

const obj10: U = {
  foo: -50,
  bar: "",
};

type Command = "attack" | "defend" | "run";
const commandList: Command[] = ["attack", "defend", "run"];

type Animal = {
  age: number;
};

type Human = {
  age: number;
  name: string;
};

type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};

type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
};

type User = {name: string; age: number};
const u: User = {
  name: "haiku1135",
  age: 27,
  // error
  // telNumber: "00000000000",
};

type HasName = {
  name: string;
};

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

type Animal2 = {
  name: string;
};

type Family2<Parent = Animal2, Child = Animal2> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

type V = Family2<string>;

const arr: number[] = [1, 2, 3];

// NG
// const arr2: string[] = [123, -456];

const arr3: boolean[] = [false, true];

const arr4: Array<{
  name: string;
}> = [
  {name: "hoge"},
  {name: "fuga"},
];

const arr5: readonly number[] = [1, 10, 100];

// NG
// arr5[0] = -1000;

let tuple: [string, number] = ["foo", 123];
tuple = ["bar", 456];
const strTuple = tuple[0];
const numTuple = tuple[1];

type UserTuple = [name: string, age: number];
const haiku1135: UserTuple = ["haiku1135", 27];
console.log(haiku1135[1]);