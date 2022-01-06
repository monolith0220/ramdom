let a = ["A", "B", "C", "D", "E"];
a.push("F");
console.log(a);

const len = a.length;

for (let i = 0; i < len; i++) {
  const r = Math.floor(Math.random() * a.length);
  const v = a.splice(r, 1);
  console.log(v);
}
console.log(a);
