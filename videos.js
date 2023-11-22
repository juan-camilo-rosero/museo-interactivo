const d = document

export function videos_Rooms(video, btn, room_Num, first_Btn) {
    const $video = d.querySelector(video),
    $btn_Continue = d.querySelector(btn),
    $room_Num = d.querySelector(room_Num),
    $first_Btn = d.querySelector(first_Btn)

    let counter = 1

    $video.addEventListener("ended", e => {
        $video.classList.add("none")
        $video.setAttribute("src", "assets/videos/video_room_" + (counter + 1) + ".mp4")
    })
    
    $first_Btn.addEventListener("click", e => {
        $video.classList.remove("none")
        $video.play()
    })

    $btn_Continue.addEventListener("click", e => {
        let num = parseInt($room_Num.textContent)
        if (num - 1 == counter){
            $video.classList.remove("none")
            $video.play()
            counter++
        }
    })
}