export const formData = (form: HTMLFormElement) => {
	const inputs = form.querySelectorAll('input');
	console.log(inputs);
	let values: { [prop: string]: string } = {};
	console.log(values);
	inputs.forEach(input => {
		values[input.id] = input.value;
	});
	console.log(values);
	return values;
};
