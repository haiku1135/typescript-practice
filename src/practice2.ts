const obj = {
  foo: 123,
  bar: 'Hello, World!',
};

const obj2: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: 'Hello, World!',
};

type FooBarObj = {
  foo: number;
  bar: string;
};

const obj3: FooBarObj = {
  foo: 123,
  bar: 'Hello, World!',
};

type UserId = string;

const id: UserId = 'haiku1135';

type FooObj = {
  foo: number;
};

type MyObj = FooObj;

const ob: MyObj = { foo: 0 };