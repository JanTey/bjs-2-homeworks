function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];

	for (let i = 1; i < arr.length; i++) {

		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}
	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	const initialValue = 0;
	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let difference = Math.max.apply(null, arr) - Math.min.apply(null, arr);
	if (arr.length == 0) {
		difference = 0;
	}
	return difference
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	let average = sumEvenElement / countEvenElement;
	if (arr.length == 0) {
		average = 0;
	}
	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	if (arrOfArr.length === 0) return 0;
	for (let i = 0; i < arrOfArr.length; i++) {
		numbers = arrOfArr[i];
		let res = func(...numbers);
		if (res > maxWorkerResult) maxWorkerResult = res;
	}
	return maxWorkerResult;
}