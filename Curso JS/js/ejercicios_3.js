const numeroAleatorio = () => {
	return 501 + Math.round(Math.random() * 99);
};

const capicua = (numero) => {
	if (typeof numero !== "number") return `Ingresa un numero`;
	numero = numero.toString();
	return numero === numero.split("").reverse().join("")
		? `El numero es capicúa`
		: `El numero ingresado no es capicúa`;
};

const factorial = (numero) => {
	if (typeof numero !== "number") return `Ingresa un numero`;
	let number = 1;
	for (let i = 1; i <= numero; i++) {
		number = number * i;
	}
	return number;
};

console.log(numeroAleatorio());
console.log(capicua(555));
console.log(factorial(5));
