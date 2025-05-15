const timer = () => {
    const deadline = '2025-04-12';

    function getZero(num) {
        if (num >= 10) {
            return num;
        } else {
            return `0${num}`
        }
    }

    function updataTimer() {
        const t = Date.parse(new Date(deadline)) - Date.parse(new Date());
        let days, hours, minutes, seconds;
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / 24 / 60 / 60 / 1000)
            hours = Math.floor((t / 60 / 60 / 1000) % 24)
            minutes = Math.floor((t / 60 / 1000) % 60)
            seconds = Math.floor((t / 1000) % 60)
        }

        document.querySelector('#days').textContent = getZero(days),
        document.querySelector('#hours').textContent = getZero(hours),
        document.querySelector('#minutes').textContent = getZero(minutes),
        document.querySelector('#seconds').textContent = getZero(seconds);
    }

    updataTimer()
    setInterval(updataTimer, 1000)
}

export default timer;