
const getFloating = (btn, el, position, x = 0, y = 0) => {
    if(btn && el && position){

        const btnWidth = btn.getBoundingClientRect().width
        const btnHeight = btn.getBoundingClientRect().height
        const btnTop = btn.getBoundingClientRect().top
        const btnLeft = btn.getBoundingClientRect().left

        const elTop = el.getBoundingClientRect().top
        const elHeight = el.getBoundingClientRect().height
        const innerWidth = window.innerWidth

        const topLeftRight = btnTop + btnHeight + y

        if(position === 'left') {
            return `top:${topLeftRight}px`
        }

        if(position === 'right') {
            return `top:${topLeftRight}px`
        }


        let top = btnTop + y

        if(elTop + elHeight > innerHeight){
            top = innerHeight - elHeight - y
        }
        

        if(position === 'top-left') {
            const right = innerWidth - btnLeft + x
            return `right:${right}px;top:${top}px`
        }

        if(position === 'top-right') {
            const left = btnWidth + btnLeft + x
            return `left:${left}px;top:${top}px`
        }

    }
    return ''
}

export {
    getFloating
}