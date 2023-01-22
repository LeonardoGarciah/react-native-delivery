
const Currency = {
	currencyFormat(value: number) {
		return 'R$ ' + Number(value)
			.toFixed(2)
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			.replace('.', ',');
	}
};

export default Currency;