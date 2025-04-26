const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(array) {
    return array.reduce((sum, total) => sum * total);
  };

const divide = function(array) {
    return array.reduce((sum, total) => sum / total);
};