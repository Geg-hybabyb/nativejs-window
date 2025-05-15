const validateInput = (input) => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/, '')
    })
}

export default validateInput;