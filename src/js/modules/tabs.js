const tabs = () => {
    function changeActiveTab (blockSelector, linkSelector, contentSelector, classActive) {
        const tabsBlock = document.querySelectorAll(blockSelector),
              tabsLink = document.querySelectorAll(linkSelector),
              tabContent = document.querySelectorAll(contentSelector);

        tabsBlock.forEach((item, i) => {
            item.addEventListener('click', () => {
                tabsLink.forEach((elem, j) => {
                    elem.classList.remove(classActive)
                    tabContent[j].style.display = 'none'

                    if(i === j) {
                        elem.classList.add(classActive)
                        tabContent[j].style.display = 'block'
                    }
                })
            })
        })
    }

    changeActiveTab('.glazing_block', '.glazing_slider > div > a', '.glazing_content', 'active')
    changeActiveTab('.no_click', '.no_click', '.decoration_content > div > div', 'after_click')
}

export default tabs;