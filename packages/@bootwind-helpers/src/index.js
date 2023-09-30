
const getFloating = (btn, el, position, x = 0, y = 0) => {
    if(btn && el && position){

        const btnWidth = btn.offsetWidth
        const btnTop = btn.offsetTop
        const btnLeft = btn.offsetLeft

        let top = btnTop + y

        const elTop = el.offsetTop
        const elHeight = el.offsetHeight
        if(elTop + elHeight > window.innerHeight){
            top = window.innerHeight - elHeight - y
        }

        if(position === 'right') {
            const left = btnWidth + btnLeft + x
            return `left:${left}px;top:${top}px`
        }
        
        if(position === 'left') {
            const right = window.innerWidth - btnLeft + x
            return `right:${right}px;top:${top}px`
        }

    }
    return ''
   
}

export {
    getFloating
}