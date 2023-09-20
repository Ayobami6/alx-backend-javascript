const calculateNumber = (a, b) => {
	const roundA = Math.round(a);
	const roundB = Math.round(b);
	const result = roundA + roundB;
	return result;
}

export default calculateNumber;