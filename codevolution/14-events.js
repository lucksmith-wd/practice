const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e) => {
  console.log("grandparent-bubble");
});

parent.addEventListener(
  "click",
  (e) => {
    console.log("parent-bubble");
  },
  { once: true }
);

child.addEventListener("click", (e) => {
  console.log("child-bubble");
});
