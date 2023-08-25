const d = document,

$start_Btn = d.querySelector(".start-btn"),
$start_Screen = d.querySelector("#start-screen")

$start_Btn.addEventListener("click", e => {
    $start_Screen.classList.add("hidden")
    setTimeout(() => {
        $start_Screen.classList.add("none")
    }, 500);
})