const modal = () => {    
    function bindModal(trigerSelector, modalSelector, closSelector, insetWindow = true) {
        const triger = document.querySelectorAll(trigerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll(closSelector);

        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault()
                }

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden';
            })
        })

        close.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'none'
                document.body.style.overflow = '';
            })
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal && insetWindow) {
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

    bindModal(
        '.popup_engineer_btn', 
        '.popup_engineer', 
        '.popup_engineer_close'
    )
    bindModal(
        '.phone_link', 
        '.popup', 
        '.popup_close'
    )
    bindModal(
        '.popup_calc_btn', 
        '.popup_calc', 
        ['.popup_calc_close', '.popup_calc_button']
    )
    bindModal(
        '.popup_calc_button', 
        '.popup_calc_profile', 
        ['.popup_calc_profile_close', '.popup_calc_profile_button'],
        false
    )
    bindModal(
        '.popup_calc_profile_button', 
        '.popup_calc_end', 
        ['.popup_calc_end_close'],
        false
    )
    // showModalByTime('.popup', 60000)
    // document.querySelector('.popup_calc_profile').style.display = 'block';
}

export default modal;