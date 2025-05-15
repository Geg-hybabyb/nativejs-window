const tabs = () => {
    function changeActiveTab (blockSelector, linkSelector, contentSelector, classActive, display = 'block') {
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
                        tabContent[j].style.display = display
                    }
                })
            })
        })
    }

    changeActiveTab('.glazing_block', '.glazing_slider > div > a', '.glazing_content', 'active')
    changeActiveTab('.no_click', '.no_click', '.decoration_content > div > div', 'after_click')
    changeActiveTab('.balcon_icons_img', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline')
}

export default tabs;