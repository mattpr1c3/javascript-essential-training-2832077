/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

const hikingBackpack = new Backpack(
  "Hiking Backpack",
  40,
  "white",
  16,
  24,
  24,
  true
);

console.log("The hikingBackpack object:", hikingBackpack);
