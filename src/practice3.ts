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