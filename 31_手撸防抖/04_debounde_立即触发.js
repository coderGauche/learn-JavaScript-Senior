function debounceChange(fn, delay, immediate = false) {
    let time = null
    let isInvoke = null
    const debounce = function (...params) {
        if (time) clearTimeout(time)
        if (immediate && !isInvoke) {
            fn.apply(this, params)
            isInvoke = true
        } else {
            time = setTimeout(() => {
                fn.apply(this, params)
                isInvoke = false
            }, delay)
        }

    }
    time = null
    return debounce
}
