const modal = () => {    
    function bindModal(trigerSelector, modalSelector, closSelector) {
        const triger = document.querySelectorAll(trigerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closSelector);

        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault()
                }

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden';
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = '';
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).classList.add('show_modal')
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer_close')
    bindModal('.phone_link', '.popup', '.popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    // showModalByTime('.popup', 60000)
}

export default modal;