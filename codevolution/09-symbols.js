const character = {
  name: "Rick Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  [Symbol("admin")]: false,
};

for (const key in character) {
  console.log(key); //name, class, quote
}
