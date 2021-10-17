const array = ['one', 'two', 'three'];
// for
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(`Element ${index}: ${element}.`);
}

// while
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(x);

// do while
do {
  i += 1;
  console.log(i);
} while (i < 5);

// for in
let arr = [3, 5, 7];
arr.foo = 'Hello';

for (let i in arr) {
  console.log(i); // 0, 1, 2, foo
}

// for of
for (let i of arr) {
  console.log(i); // 3, 5, 7
}

// break
console.log('EX: da utilização de break');
let index = 0;

while (true) {
  index++;
  if (index > 2) {
    break;
  }
  console.log(index);
}

// continue
console.log('EX: da utilização de continue');
const array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
  const element = array[i];

  if (element % 2 === 0) continue;
  console.log(element);
}