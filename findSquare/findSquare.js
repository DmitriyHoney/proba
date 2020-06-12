;export default const getSquare = {
	round: (radius = 0) => {
		let localR = radius;
		if(!isNaN(+localR)) {
			if (localR < 0) return "Вы ввели число меньше нуля";
			return Math.pow(radius, 2) * Math.PI;
		} else return "Введите число"
	},
	triangle: (a = 1, b = 1, c = 1) => {
		if (a <= 0 || b <= 0 || c <= 0) return "Вы ввели число меньше нуля или равное нулю";
		if(!isNaN(+a) || !isNaN(+b) || !isNaN(+c)) {
			let perimetr = +a + +b + +c;
			let p2 = perimetr / 2;
			let res = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 -c));
			return res;
		} else return "Введите число"
		
	}
};
