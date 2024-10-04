// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles = [];

// Truck instantiation - uncommented and aligned with README requirements
const truck1 = new Truck(
  Cli.generateVin(),      // Unique identifier
  "red",                  // Color
  "Ford",                 // Brand
  "F-150",                // Model
  2021,                   // Year
  5000,                   // Weight in kg
  120,                    // Max speed in km/h
  [new Wheel(18, "Goodyear"), new Wheel(18, "Goodyear"), new Wheel(18, "Goodyear"), new Wheel(18, "Goodyear")],  // Default wheels
  10000                   // Load capacity in kg (Truck-specific)
);

// Car instantiation
const car1 = new Car(
  Cli.generateVin(),      // Unique identifier
  "blue",                 // Color
  "Toyota",               // Brand
  "Camry",                // Model
  2021,                   // Year
  3000,                   // Weight in kg
  130,                    // Max speed in km/h
  [new Wheel(16, "Bridgestone"), new Wheel(16, "Bridgestone"), new Wheel(16, "Bridgestone"), new Wheel(16, "Bridgestone")] // Default wheels
);

// Motorbike instantiation - uncommented and aligned with README requirements
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(),      // Unique identifier
  "black",                // Color
  "Harley Davidson",      // Brand
  "Sportster",            // Model
  2021,                   // Year
  500,                    // Weight in kg
  125,                    // Max speed in km/h
  motorbike1Wheels        // Specific motorbike wheels
);

// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
