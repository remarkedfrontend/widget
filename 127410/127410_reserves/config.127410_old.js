document.addEventListener("DOMContentLoaded", function(event) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
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
                    Дорогой друг, обращаем ваше внимание, что к покупке на сайте доступна только часть билетов. Остальные билеты можно приобрести на кассе в режиме живой очереди. Бронирование через сайт день в день мы не принимаем, но всегда рады видеть тебя в любой день в часы работы бани. При покупке нескольких билетов в общественные бани выкупается соответствующее количество гарантированных посадочных мест, посадка за один стол организуется по возможности, но не гарантируется.
                </div>
            `;
        },

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
            const compartmentChecked = widget.querySelector('#remarked-primary-widget__compartment-input')?.checked;
            const privateRoomChecked = widget.querySelector('#remarked-primary-widget__privateRoom-input')?.checked;

            let duration = data.reserve.duration || 0;
            let commentAdditions = [];

            if (compartmentChecked) {
                duration = 180;
                sum = 4000;
            }

            if (privateRoomChecked) {
                duration = 180;
                sum = 7000;
            }
            
            if (commentAdditions.length > 0) {
                data.reserve.duration = duration;
                const currentComment = data.reserve.comment || '';
                const additionalText = commentAdditions.join('; ');
                data.reserve.comment = currentComment 
                    ? currentComment + '\n' + additionalText 
                    : additionalText;
            }
        }
    });
});