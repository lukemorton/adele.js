// Adele module
//
// This module contains the core logic of our project.
//

// Helper functions
//
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main export is the Adele object
//
var Adele = {};

Adele.random = function () {
  return randomInt(1, 13);
};

module.exports = Adele;
