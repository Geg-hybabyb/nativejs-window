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

                modal.classList.add('show_modal')
                document.body.style.overflow = 'hidden';
            })
        })

        close.addEventListener('click', () => {
            modal.classList.remove('show_modal')
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('show_modal')
                document.body.style.overflow = '';
            }
        })
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer_close')
    bindModal('.phone_link', '.popup', '.popup_close')

    setTimeout(() => {
        document.querySelector('.popup').classList.add('show_modal')
    }, 60000000)
}

export default modal;