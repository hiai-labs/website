const {
  flatColorIcons,
} = require("@iconify/json/collections/flat-color-icons.json");

// Get all icon names in the collection
const iconNames = Object.keys(flatColorIcons.icons);

console.log(iconNames);
