function boilWater() {
  return new Promise((resolve) => {
    console.log("Boiling water...");
    setTimeout(() => {
      console.log("Water is boiled! ✅");
      resolve();
    }, 3000);
  });
}

function brewCoffee() {
  return new Promise((resolve) => {
    console.log("Brewing coffee...");
    setTimeout(() => {
      console.log("Coffee is ready! ☕✅");
      resolve();
    }, 2000);
  });
}

function toastBread() {
  return new Promise((resolve) => {
    console.log("Toasting bread...");
    setTimeout(() => {
      console.log("Toast is ready! 🍞✅");
      resolve();
    }, 1000);
  });
}

async function makeBreakfast() {
  console.log("Starting breakfast preparation... 🍽️");

  await boilWater(); // Wait for water to boil
  await brewCoffee(); // Wait for coffee to be ready
  await toastBread(); // Wait for toast to be done

  console.log("Breakfast is ready! 🍽️✅");
}

// Async flow control callback
makeBreakfast();

// ------------------------------------------------------------------------------

function boilWater() {
  return new Promise((resolve) => {
    console.log("Boiling water...");
    setTimeout(() => {
      console.log("Water is boiled! ✅");
      resolve();
    }, 3000);
  });
}

function brewCoffee() {
  return new Promise((resolve) => {
    console.log("Brewing coffee...");
    setTimeout(() => {
      console.log("Coffee is ready! ☕✅");
      resolve();
    }, 2000);
  });
}

function toastBread() {
  return new Promise((resolve) => {
    console.log("Toasting bread...");
    setTimeout(() => {
      console.log("Toast is ready! 🍞✅");
      resolve();
    }, 1000);
  });
}

async function makeBreakfastFaster() {
  console.log("Starting breakfast preparation... 🍽️");

  // Run all tasks in parallel
  await Promise.all([boilWater(), brewCoffee(), toastBread()]);

  console.log("Breakfast is ready! 🍽️✅ (Completed faster!)");
}

// Run the function
makeBreakfastFaster();
