function resolveHello() {
  return new Promise((resolve) => setTimeout(() => resolve("hello"), 2000));
}

function resolveWorld() {
  return new Promise((resolve) => setTimeout(() => resolve("world"), 1000));
}

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello); // Logs after 2 seconds
  const world = await resolveWorld();
  console.log(world); // Logs after additional 1 second
}
// sequentialStart();

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();
  console.log(await hello); // Logs after 2 seconds
  console.log(await world); // Logs immediately after, as already fulfilled.
}
// concurrentStart();

function parallel() {
  Promise.all([
    (async () => console.log(await resolveHello()))(), // Logs after 2 secs
    (async () => console.log(await resolveWorld()))(), // Logs after 1 sec
  ]);
}
// parallel(); // Logs 'world' 'hello

// Exercise
// Define a function called sleep which accepts a duration parameter. It should suspend execution of the function it is invoked in

function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Finito"), delay);
  });
}

sleep(2000).then((res) => console.log(res));
