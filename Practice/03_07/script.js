/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
  name: "water bottle",
  volume: 34,
  color: "clear",
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

const phone = {
  name: "Matt's phone",
  color: "white",
  phoneOn: true,
  togglePhone: function (onStatus) {
    this.phoneOn = onStatus;
  },
};

console.log("This is my water bottle:", bottle);
console.log("This is my phone:", phone);
