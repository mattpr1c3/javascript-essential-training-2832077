/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (nameStatus) {
    this.name = nameStatus;
  },
  newVolume: function (volumeStatus) {
    this.volume = volumeStatus;
  },
  newColor: function (colorStatus) {
    this.color = colorStatus;
  }
};

backpack.newName("Hiking backpack")
console.log("This is the new name:", backpack.name)

backpack.newVolume(60)
console.log("This is the new volume:", backpack.volume)

backpack.newColor("blue")
console.log("This is the new color:", backpack.color)