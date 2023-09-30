
const getFloating = (btn, element, position, x = 0, y = 0) => {
    if(btn && element && position){

        const btnWidth = btn.offsetWidth
        const btnTop = btn.offsetTop
        const btnLeft = btn.offsetLeft

       
        if(position === 'right') {
            const left = btnWidth + btnLeft + x
            return `position:fixed;left:${left}px;top:${btnTop + y}px`
        }

        if(position === 'left') {
            const right = window.innerWidth - btnLeft + x
            return `position:fixed;right:${right}px;top:${btnTop + y}px;`
        }

    }
    return ''
   
}

export {
    getFloating
}