function fullNames(names) {
  return names.reduce((a, c) => [...a, `${c.firstname} ${c.lastname}`], []);
}

function fullNames2(names) {
  return names.map((n) => [`${n.firstname} ${n.lastname}`]);
}

names = [
  { firstname: "Bruce", lastname: "Wayne" },
  { firstname: "Clark", lastname: "Kent" },
];

console.log(fullNames2(names));
