const person = { name: 'Kiran', age: 21 };
for (const key in person) {
  console.log(key, ":", person[key]);
}
const vehicle = { brand: 'Tesla', miles: '2100km/h' };
for (const key in vehicle) {
  console.log(key, ":", vehicle[key]);
}