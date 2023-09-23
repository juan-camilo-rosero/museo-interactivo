const d = document

export function dissappearDiv(div) {
    const $div = d.querySelector(div)

    $div.classList.add("hidden")
    setTimeout(() => {
        $div.classList.add("none")
    }, 300);
}

export function appearDiv(div) {
    const $div = d.querySelector(div)

    $div.classList.remove("none")
    setTimeout(() => {
        $div.classList.remove("hidden")
    }, 300);
}