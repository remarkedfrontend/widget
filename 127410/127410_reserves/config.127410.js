document.addEventListener("DOMContentLoaded", function(event) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    function checkTime(startTime, endTime, checkTime) {
		const now = new Date();

		const [startHours, startMinutes] = startTime.split(':');
		const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes);

		const [endHours, endMinutes] = endTime.split(':');
		const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHours, endMinutes);

		const [checkHours, checkMinutes] = checkTime.split(':');
		const checkDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), checkHours, checkMinutes);

		if (endDate < startDate) {
			return checkDate >= startDate || checkDate <= endDate;
		} else {
			return checkDate >= startDate && checkDate <= endDate;
		}
	}

    widgetArea({
        booking: [
            {
                name: 'Городские бани "Дружба" - ул. Стандартная, 2',
                point: 127410
            },
        ],

        button: '[href="#openReMarkedWidget"]',
        phoneMask: true,
        rangeSlotsTime: true,
        blockedOpenTime: true,
        blockedAutoLanding: true,
        errorColor: 'red',
        qtyMax: 10,
        textSuccess: 'Переходим к оплате, это займет минуту',
        withRoomsTimes: true,
        lang: {
            'ru-RU': {
                textPolicy: 'Согласен(-на) с ',
                textLinkPolicy: 'политикой обработки персональных данных',
                thanksTitle: 'Почти готово',
            },
        },
        linkPolicy: 'https://banidruzhba.ru/legal',

        disabledDates: [today],

        customDisabledDate: function(date) {
            const checkDate = new Date(date);
            checkDate.setHours(0, 0, 0, 0);

            if (checkDate.getTime() === today.getTime()) {
                return true;
            }
            return false;
        },

        hookAfterRestaurant: function() {
            return `
                <div class="remarked-primary-widget__notice-text" style="
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.4;
    background-color: #efdeb9;
    border: 1px solid #a83719;
    padding: 10px 12px;">
                    Дорогой друг, на данный момент на сайте ведутся технические работы, возможны сбои в работе сайта и при покупке билетов. Бронирование доступно по телефону <a href="tel:74953236252">8 (495) 323-62-52</a>
                </div>
            `;
        },
    //     hookAfterRestaurant: function() {
    //         return `
    //             <div class="remarked-primary-widget__notice-text" style="
    // font-size: 14px;
    // margin-top: 10px;
    // line-height: 1.4;
    // background-color: #efdeb9;
    // border: 1px solid #a83719;
    // padding: 10px 12px;">
    //                 Дорогой друг, обращаем ваше внимание, что к покупке на сайте доступна только часть билетов. Остальные билеты можно приобрести на кассе в режиме живой очереди. Бронирование через сайт день в день мы не принимаем, но всегда рады видеть тебя в любой день в часы работы бани. При покупке нескольких билетов в общественные бани выкупается соответствующее количество гарантированных посадочных мест, посадка за один стол организуется по возможности, но не гарантируется. Бронирование является подтверждённым после звонка администратора.
    //             </div>
    //         `;
    //     },

        //checkboxs: [
        //    {
        //        id: 'compartment',
        //        name: 'Хочу сидеть в отдельном купе'
        //    },
        //    {
        //        id: 'privateRoom',
        //        name: 'Хочу сидеть в отдельном кабинете'
        //    }
        //],

        changeQtyNumber: function(newQty, widgetWrap, options) {
            const compartmentBlock = widgetWrap.querySelector('.remarked-primary-widget__compartment');
            if (compartmentBlock) {
                if (newQty >= 7) {
                    compartmentBlock.style.display = 'none';
                } else {
                    compartmentBlock.style.display = '';
                }
            }
        },

        beforeSendReserves: function(data, widget, widgetWrap) {
            console.log(data);
            let sum = 0;

            const dateString = widget.querySelector('.remarked-primary-widget__date-select').value;
            const [day, month, year] = dateString.split('/');
            const dayOfWeek = new Date(`${year}-${month}-${day}`).getDay();

            const time = data.reserve.time;
            const person = Number(data.reserve.guests_count);

            let pricePerPerson = 0;

            // Суббота и воскресенье — любое время
            if (dayOfWeek === 6 || dayOfWeek === 0) {
                pricePerPerson = 3500;
            }
            // Понедельник-пятница, 16:00-20:00
            else if (dayOfWeek >= 1 && dayOfWeek <= 5 && checkTime('16:00', '20:00', time)) {
                pricePerPerson = 3000;
            }
            // Вторник-пятница, 09:00-16:00
            else if (dayOfWeek >= 2 && dayOfWeek <= 5 && checkTime('09:00', '16:00', time)) {
                pricePerPerson = 1500;
            } 
            
            else if (dateString == '11/05/2026' && dayOfWeek == 1) {
                pricePerPerson = 3500
            }

            

            sum = pricePerPerson * person;


            if (sum > 0) {
                data.method = 'CreateReserveAfterPayment';
                data.getPaymentLink = 1;
                data.reserve.deposit_status = 'not_paid';
                data.reserve.deposit_sum = sum;
            }
        }
    });
});


// const compartmentChecked = widget.querySelector('#remarked-primary-widget__compartment-input')?.checked;
// const privateRoomChecked = widget.querySelector('#remarked-primary-widget__privateRoom-input')?.checked;

// let duration = data.reserve.duration || 0;
// let commentAdditions = [];

// if (compartmentChecked) {
//     duration = 180;
//     sum = 4000;
// }

// if (privateRoomChecked) {
//     duration = 180;
//     sum = 7000;
// }

// if (commentAdditions.length > 0) {
//     data.reserve.duration = duration;
//     const currentComment = data.reserve.comment || '';
//     const additionalText = commentAdditions.join('; ');
//     data.reserve.comment = currentComment
//         ? currentComment + '\n' + additionalText
//         : additionalText;
// }
