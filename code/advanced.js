/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */
unitedKingdom[1].attractions = ["London Eye", "Stonehenge", "Angel of the North"]
england = unitedKingdom[1];
console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = null;

for (country of unitedKingdom) {
  if (country.capital === "Swansea") {
    country.capital = "Cardiff";
    wales = country.capital;
  }
}

console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = null;

for (country of unitedKingdom) {
  if (country.name === "Northern Ireland") {
    northernIrelandKeys = Object.keys(country);
  }
}

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

populations = [];
scotlandPopulation = null;

for (country of unitedKingdom) {
  populations.push(country.population);
  if (country.name === "Scotland") {
    scotlandPopulation = country.population;
  }
}

populations.sort(function (a, b) { return a - b }); // Sorts the populations in numeric order


if (scotlandPopulation === populations[0]) {
  console.log("The population of Scotland is the smallest in the UK");
} else if (scotlandPopulation === populations.length) {
  console.log("The population of Scotland is the largest in the UK");
} else {
  console.log("The population of Scotland is somewhere in the middle");
}