import { postData } from "../services/services";
import validateInput from "./validateInput";

const forms = (extraData) => {
    const forms = document.querySelectorAll('.form'),
          phones = document.getElementsByName('user_phone'),
          inputs = document.querySelectorAll('input');

    phones.forEach(item => {
        validateInput(item)
    })

    const message = {
        sending: 'Идет отправка...',
        sent: 'Отправлено',
        error: 'Ошибка'
    }

    const clearInput = () => {
        inputs.forEach(input => {
            input.value = ''
        })
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const div = document.createElement('div')
            div.classList.add('status')
            form.append(div)

            div.textContent = message.sending;

            const formData = new FormData(form)

            if (extraData) {
                for (let key in extraData) {
                    formData.append(key, extraData[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    div.textContent = message.sent
                })
                .catch(() => div.textContent = message.error)
                .finally(() => {
                    extraData = {};
                    clearInput()
                    setTimeout(() => div.textContent = '', 2000)
                })
        })
    })
}

export default forms;