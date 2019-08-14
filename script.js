// zad 1

const hello = "hello";

const world = "world";
console.log("zad 1");
console.log(`${hello} ${world}`);

//zad 2

const multiply = (a, b = 1) => {
  return a * b;
};
console.log("zad 2");
console.log(multiply(5), multiply(5, 2));

// zad 3

const average = (...args) => {
  argArr = [...args];
  let averageCounter = 0;
  argArr.map(arg => {
    averageCounter += arg;
  });
  console.log(averageCounter / argArr.length);
};
console.log("zad 3");
average(1, 5, 3);
average(2, 2, 2, 2);

//zad 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("zad 4");
average(...grades);

// zad 5

const names = [1, 4, "Iwona", false, "Nowak"];
console.log("zad 5");
const [, , third, , fifth] = names;
console.log(`${third} ${fifth}`);
