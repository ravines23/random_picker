function getRandomByWeight(weights) {
	var keys = Object.keys(weights);
	var random = Math.random();
	var total = 0;
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		total += weights[key];
		if (total > random) {
			return key;
		}
	}
	return keys[keys.length - 1];
}
