import { appearDiv, dissappearDiv } from "./transitions.js"

const d = document

export function firstVideo(btn, video, div, secondDiv) {
    const $btn = d.querySelector(btn),
    $div = d.querySelector(div),
    $video = d.querySelector(video)
    
    $btn.addEventListener("click", e => {
        dissappearDiv(div)
        $video.play()
    })

    $video.addEventListener("ended", e => {
        dissappearDiv(video)
        $video.volume = 0
        appearDiv(secondDiv)
    })
}