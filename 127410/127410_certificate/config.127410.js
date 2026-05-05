document.addEventListener("DOMContentLoaded", (event) => {
	const certificate = certificateReMarked('[href="#openReMarked"]', {
		token: '5fd4695db761bc31dbd191947d03e06d',
		getCertificatesFields: {
			type: 'categories',
		},
		
		hideCount: true,
		hideNameField: false,
		hidePhoneField: false,
		showCertificatesSelect: true,
		hideBuyerNameField: true,
		valuta: 'руб.',
        hideSurnameField: true,
		hideEmailField: true,

		hideBuyerPhoneField: true,
		hideBuyerEmailField: true,
		hideBuyerCommentField: true,
		hidePolicyField: false,

		buyCertificateFields: {
			type: 'categories',
		},
		getTemplateSuccess: function (count, sum) {
			return ``;
		},
		customTitle: 'Подарочный сертификат',
		labelTextSelect: 'Выберите сумму сертификата',
		selectFieldPlaceholder: 'Выберите сумму сертификата',
		payTextLabel: 'Перейти к оплате',

		nameRealPlaceholder: 'Имя',
		phoneRealPlaceholder: 'Телефон',

		nameBuyerPlaceholder: "Имя получателя",
		phoneBuyerPlaceholder: "Телефон получателя",

		buyerRealCommentPlaceholder: '*Пожелания от отправителя',
		
		linkPolicy: 'Я принимаю <a href="https://banidruzhba.ru/legal">условия пользовательского соглашения</a>'
	});
});
