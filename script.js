const d = document,

$start_Btn = d.querySelector(".start-btn"),
$start_Screen = d.querySelector("#start-screen"),
$previous_Btn = d.querySelector(".previous"),
$next_Btn = d.querySelector(".next"),
$room_Num = d.querySelector(".room-num"),
$first_Frame = d.querySelector(".first-frame"),
$second_Frame = d.querySelector(".second-frame"),
max = 3,
less = 1,

content = {
    1: {
        img1: "https://www.medianalisis.org/wp-content/uploads/2021/06/DESINFORMACION-Y-CENSURA.png",
        img2: "https://previews.123rf.com/images/jansucko/jansucko1610/jansucko161000044/65571184-de-cerca-de-cuatro-diferentes-rosas-rojas-de-tama%C3%B1o-en-fondo-gris-con-muchas-peque%C3%B1as-gotas-en-los.jpg"
    },
    2: {
        img1: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Anas_platyrhynchos_qtl1.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mallard_080508.jpg/1200px-Mallard_080508.jpg"
    },
    3: {
        img1: "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg",
        img2: "https://okdiario.com/img/2023/04/10/-es-malo-que-los-gatos-coman-moscas-y-mosquitos-635x358.jpg"
    },
}

$start_Btn.addEventListener("click", e => {
    $start_Screen.classList.add("hidden")
    setTimeout(() => {
        $start_Screen.classList.add("none")
        alert("Presiona los cuadros para ver cada ensayo y cambia de sala con los controles en la parte inferior")
    }, 500);
})

$next_Btn.addEventListener("click", e => {
    let room_Num = parseInt($room_Num.textContent)
    if(room_Num < max){
        $room_Num.textContent = room_Num + 1
        $first_Frame.setAttribute("src", content[room_Num + 1].img1)
        $second_Frame.setAttribute("src", content[room_Num + 1].img2)
    }
    if (room_Num == max - 1) {
        $next_Btn.classList.add("gray")
    }
    $previous_Btn.classList.remove("gray")
})
$previous_Btn.addEventListener("click", e => {
    let room_Num = parseInt($room_Num.textContent)
    if(room_Num > less){
        $room_Num.textContent = room_Num - 1
        $first_Frame.setAttribute("src", content[room_Num - 1].img1)
        $second_Frame.setAttribute("src", content[room_Num - 1].img2)
    }
    if (room_Num == less + 1) {
        $previous_Btn.classList.add("gray")
    }
    $next_Btn.classList.remove("gray")
})