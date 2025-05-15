import validateInput from './validateInput';

const changeState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          width = document.querySelector('#width'),
          height = document.querySelector('#height'),
          type = document.querySelector('#view_type'),
          windowTemp = document.querySelectorAll('.checkbox');

    windowTemp[0].checked = true;

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
        })
    })
              
    const inputProp = (selector) => {
        validateInput(selector)

        selector.addEventListener('input', () => {
            state[selector.id] = selector.value;
        })
    }

    inputProp(width)
    inputProp(height)

    type.addEventListener('click', () => {
        state.type = type.value;
    })

    windowTemp.forEach(item => {
        item.addEventListener('click', () => {
            windowTemp.forEach(elem => {
                elem.checked = false;
            })
            item.checked = true;
            state.temp = item.nextElementSibling.id
        })
    })
}

export default changeState;