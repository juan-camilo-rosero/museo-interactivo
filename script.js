import { appearDiv, dissappearDiv } from "./transitions.js"
import { firstVideo, videos_Rooms } from "./videos.js"

const d = document,
$previous_Btn = d.querySelector(".previous"),
$next_Btn = d.querySelector(".next"),
$room_Num = d.querySelector(".room-num"),
$first_Frame = d.querySelector(".first-frame"),
$second_Frame = d.querySelector(".second-frame"),
$third_Frame = d.querySelector(".third-frame"),
$roomsBtn = d.querySelector(".start-btn"),
$capsule_Title = d.querySelector(".content-title"),
$capsule_Content = d.querySelector(".content-text"),
max = 6,
less = 1,
content = {
    1: {
        img1: "assets/images/CASO 1, 1.jpg",
        img2: "assets/images/CASO 1, 2.jpg",
        img3: "assets/images/CASO 1, 3.jpg"
    },
    2: {
        img1: "assets/images/CASO 2, 1.jpg",
        img2: "assets/images/CASO 2, 2.jpg",
        img3: "assets/images/CASO 2, 3.jpg"
    },
    3: {
        img1: "assets/images/CASO 1, 1.jpg",
        img2: "assets/images/CASO 1, 2.jpg",
        img3: "assets/images/CASO 1, 3.jpg",
        img4: "assets/images/CASO 1, 1.jpg",
        img5: "assets/images/CASO 1, 2.jpg",
        img6: "assets/images/CASO 1, 3.jpg"
    },
    4: {
        img1: "assets/images/CASO 4, 1.jpg",
        img2: "assets/images/CASO 4, 2.jpg",
        img3: "assets/images/CASO 4, 3.jpg"
    },
    5: {
        img1: "assets/images/CASO 5, 1.jpg",
        img2: "assets/images/CASO 5, 2.jpg",
        img3: "assets/images/CASO 5, 3.jpg"
    },
    6: {
        img1: "assets/images/CASO 6, 1.jpg",
        img2: "assets/images/CASO 6, 2.jpg",
        img3: "assets/images/CASO 6, 3.jpg"
    },
},
text_Content = {
    1: {
        text1: "La polarización política históricamente ha sido una piedra de tropiezo para la sociedad Colombiana. Gran parte de los conflictos armados en el país derivan de una sociedad profundamente polarizada, ya que continuamos buscando relacionar los partidos políticos hacia dos extremos; Izquierda o Derecha, como lo antes eran; Liberales y Conservadores, y más atrás aún lo eran Federalistas y Centralistas.",
        text2: 'En la segunda mitad del siglo XIX, se llevaron a cabo debates cruciales sobre el papel de los medios de comunicación en la constitución política de 1886. Se instituyen los "derechos civiles y garantías sociales" en relación con la libertad de expresión. Sin embargo, estos “derechos” actuaron más como restricciones, ya que se creía que el gobierno debía educar solo sobre opciones consideradas adecuadas. En los años siguientes, entre 1900 y 1930, se estableció la hegemonía conservadora que empezó a ejercer la censura de manera más pronunciada. Durante este período, la publicación requería permiso del Ministerio de Gobierno, y la censura se ejercía mediante la evaluación del ministro. En respuesta, y ante la constante búsqueda de libertad  surgen figuras como Jorge Eliecer Gaitan, quien se convirtió en una víctima del conflicto bipartidista persistente en el país.',
        text3: 'Colombia ahora trata con una problemática  ya que otra forma en la que perdemos libertad de expresarnos es por la polarización, la manera en la que nos hemos pensado la política ha provocado obstáculos desde lo más institucional, hasta lo más sutil como lo son los diálogos y percepciones que se mantienen en la actualidad, así entonces la libertad desde comunicación se ve perjudicada. Para trabajar en esta libertad genuina se sueña con un futuro en el que los medios puedan coexistir y contrastar posturas e ideologías, reconociendo que ninguno está completamente desligado de opiniones, pero que en Colombia hay suficiente espacio para discutir y crear.'
    },
    2: {
        text1: "La mujer a lo largo de las épocas ha luchado por permanecer en el espacio, por su reconocimiento en la sociedad. Asimismo, la mujer latina se ha encontrado con ciertas particularidades, y al estar en un entorno en constante construcción comunicativa y política, en los medios ha encontrado cierto espacio, pero constantemente se ve ridiculizada; perpetuando la minimización sistemática de los movimientos femeninos. El espacio del poder político y elección por voto es un campo que las mujeres uruguayas en 1927  deciden aventurarse, siendo las primeras latinas en hacerlo. A partir de allí se desencadenan una serie de movimientos ideológicos y comunicativos que sentarán las bases de la deconstrucción hacia una sociedad mucho más equitativa.",
        text2: 'Para las Uruguayas los obstáculos no se hacen esperar, aparecen figuras como el periodico El País,  que consideraba que la mujer es “ fácilmente dominada por la ternura, y es claro, el hombre en Cerro Chato le ha impuesto su voluntad o sus simpatías en el acto comicial.” Este episodio de la lucha por el sufragio femenino representa una de las formas en las que la dinámica del patriarcado incide en la representación femenina, entonces así a la par; crece una tendencia en los medios tradicionales hacia quitarle credibilidad e importancia al espacio femenino.',
        text3: 'Las industrias culturales y de comunicación reflejan las conversaciones sobre lo femenino al permitir la masificación de estos temas, sin embargo no necesariamente existe una perspectiva hacia la equidad y respeto hacia las mismas. Actualmente encontramos que en Argentina, 6 de cada 10 mujeres periodistas consideran el desafío de equilibrar vida familiar y desarrollo profesional, así como la representación de las mujeres en los medios se ha limitado a cánones de belleza y genera escándalos como la edición de fotos para portadas de revista. Las prácticas comunicativas ahora podrían develar que de cierta forma seguimos escuchando lo que el patrón diga. Aunque no hay que desconocer los avances por la equidad y empoderamiento femenino, pero tampoco olvidar que la opresión patriarcal persiste y si construimos estos imaginarios desde la comunicación, también podemos seguir reconstruyendonos'
    },
    3: {
        text1: 'Hemos buscado exaltar y mantener la identidad tradicional de cada país, pero al mismo tiempo existe un afán por pertenecer a un estilo de vida de la clase alta o fuera del folclor de lo popular, de eso es lo que hablaremos en esta sala.  Se explorará una gran cantidad de países, ahora encontramos al Salvador, en 1811. Desde la imagen, la representación del pueblo o la clase baja hay un discurso en el que se encuentran debajo de aquellas personas con una cultura aparentemente superior, lo que comienza a construir los roles en la población, los que comenzamos a conocer como lo popular, o la clase alta.',
        text2: 'La dualidad de latinoamérica está en todo, para bien o para mal la diversidad nos ha construido históricamente. Esta fotografía de México, en 1897, tiene el propósito de retratar el modo de vida común para las personas de la clase trabajadora. Para esta época se entendía como simplemente personas en su dia a dia, (el comercio y ventas)  pero ahora estos trajes se constituyen como la "cultura típica" de un país, y por el contexto socioeconómico de aquel entonces se comienza a construir el relacionamiento entre la cultura y la desigualdad.',
        text3: 'La danza y la música existen en el corazón de América latina, por lo que es un medio ideal para vislumbrar los contextos de la época. Por aquél entonces, en 1930 en Perú se dio el espectáculo de la Diablada, en el que ciertas personas encarnaban la tradición, mientras que otras (de la clase alta)  la observaban.  En esta imagen, en el lado derecho es posible ver a un hombre, con una vestimenta que sugiere un mejor nivel económico, observando el espectáculo. Esta tradición es una danza mestiza que exhibe los elementos de la religiosidad autóctona y cristiana. Su origen, por recientes estudios, se basa en las tradiciones de adoración a la Pachamama nacidas en Juli en la colonia.',
        text4: 'La transformación de la representación de las diversas maneras de vivir se encuentra ahora en el ojo de otros países, y personas fuera de latinoamérica.  Esta fotografía de México en 1950 y otras de la misma época fueron tomadas por extranjeros, con el ánimo de entender tanto la cultura típica del país (folclor, por ejemplo), como los cambios culturales que surgían en torno a nuevas corrientes y pensamientos. En esta foto esto se vé por medio de la diferencia de vestimenta y condiciones de las mujeres y el hombre sentado.',
        text5: 'En esta imagen de Chile en 1973 se destaca un concepto diferente sobre la diversidad, ya que esta imagen se encuentra en medio de un golpe de estado en chile, y las nuevas influencias ideológicas generaron aún más diversidad, y colectivos que se apropiaron de ciertos ideales en relación a su condición social y económica.',
        text6: 'Las imágenes de la actualidad, como el videoclip de residente “This is not america” cabe destacar la naturaleza de denuncia social que tiene, luego de la transformación de la representación de la diversidad cultural, de la vida cotidiana, a algo más intencionado, ahora vemos como esta intencionalidad también se trabaja sobre la denuncia social, desde la consciencia de la desigualdad en latinoamérica y como las muestras culturales, o "Lo típico" intervienen en este proceso.'
    },
    4: {
        text1: 'Entre la risa y el llanto, el arte y el dolor; Hasta el momento pareciera que América Latina es una región llena de tragedia y aunque esto en parte es cierto, ahora hay que hablar de la forma en la que hemos gestionado todo esto, la manera en la que decidimos contar nuestras historias. Para los latinos, no hay mejor forma para superar las penas que al son de una salsa, porque no importa que tanto cambios, o cambien los medios, o cambie la época; aquí existe una forma muy única de afrontar los problemas, para grandes o pequeños o ricos y pobres nos mueve el mismo sentimiento. ',
        text2: 'Eso que es de todos, eso que se comparte y está en el centro de la sociedad es “Lo nuestro” Lo popular se ha reflejado en el reggaeton, el pop y la salsa, y con estas canciones. Lo que pasa es que Latinoamérica tiene una  problemática exclusiva sobre lo popular, lo que entendemos por popular termina por construir la identidad latina, y todos los diferenciadores que encontramos en las industrias culturales componen algo transversal a los fenómenos socioeconómicos y políticos de nuestros países, que hemos llamado hermanos.',
        text3: 'Esa forma particular de narrarnos nos ha posicionado en el mundo, cuando entra la época masiva y posmasiva de la comunicación aparece  la idea de lo latino, en la cual explicaremos más adelante, pero por ahora el recorrido desde canciones tán antiguas como La china que yo tenía, de jorge velosa, hasta figuras con el impacto de bad bunny o kali uchis relatan cómo es que se manejan y construyen ciertos temas en américa latina.'
    },
    5: {
        text1: 'Hasta el momento, el gran impulso de los latinos para huir de sus tierras ha sido la ilusión de una vida mejor, constantemente esperamos poder trasladar o vivir lo que hemos visto a lo lejos; la gran vida que ofrecen países más desarrollados ha sido el referente. Porque al voltear la vista hacia Colombia, Venezuela, Honduras, o Cuba, el panorama es desesperanzador, la diferencia es abrumadora. Se nos ha metido en la cabeza la idea de que aquí ya no hay nada más que hacer; determinamos como modo de vida la ley del sálvese quien pueda',
        text2: 'El panorama en cuba entre los años 60s y 80s nos da una idea de cómo la supervivencia está en una balanza, o prefiero ser “Libre” del país que me rechaza, y soy ilegal en los estados unidos, o me quedo siendo un preso político de fidel castro. Como este hay muchos casos en los que los latinos parecieran huir, pero en realidad allá afuera; solo sobreviven. Porque claro; Somos berracos y esforzados, o al menos eso es lo que siempre se ha dicho sobre los latinos. Entonces terminamos buscando la forma de insertarnos al engranaje de una sociedad distinta.',
        text3: 'Los movimientos migratorios siempre se relacionan con lo ilegal, con lo marginales que resultan las personas que se atreven a hacerlo, sin embargo es importante pensarnos que una pieza importante en el rompecabezas es que al estar constantemente de aquí para allá no solo se dificulta la construcción de una nación, sino que nos hemos visto envueltos en etiquetas, condiciones y preceptos que ahora pueden resultar problemáticos, la idea de lo latino a no solo significa la música, el folclor y la fiesta, sino que también se refleja en nuestra imagen de vándalos, narcotraficantes, o ilegales.'
    },
    6: {
        text1: 'La imagen ante el mundo de los latinnos como esa tierra de la samba, el trago, el goce y las mujeres puede ser más problemático de lo que parece Si bien se presenta como una alternativa positiva, porque pareciera ser mejor que nos llamen fiesteros a narcotraficantes, la popularización de este tipo de ideas genera cambios no solo en la construcción social del país, sino que impone maneras de relacionarse con estos pueblos ante otras naciones.',
        text2: 'El boom de lo “latino” se establece en la época de la comunicación posmasiva, y si bien esta idea de glorificar nuestra cultura por encima de cualquier obstáculo aparece en el mapa desde décadas atrás, esta idea nunca antes había sido tan influyente en la percepción del extrranjero. Diversas figuras e industrias culturales ahora han hecho que en época de turismo lleguen miles de personas a Medellín por ejemplo, con la ilusión de encontrar ese paraíso de drogas y mujeres que les han pintado.',
        text3: 'Este fenómeno resulta muy atractivo no solo para el extranjero, sino que aquí mismo gestionamos ese tipo de imagen, y se pretende exaltar ya que los latinos se han dado cuenta que esto trae cierto beneficio económico. Popularizar esta idea es problemático al generar una versión hegemónica sobre la vida del latino, pero también en esto se involucra  el sentido de identidad que estamos generando, la comunidad en torno a la fiesta como aquello que nos une y representa como latinos, y la felicidad que emana de estos territorios, puede ser algo amable de pensar, pero debe tratarse con cuidado.'
    },

}

d.addEventListener("DOMContentLoaded", e => {
    firstVideo(".volume-btn", ".first-video", ".volume-div", "#start-screen")
    $roomsBtn.addEventListener("click", e => {
        dissappearDiv("#start-screen")
        appearDiv("#rooms")
    })

    $next_Btn.addEventListener("click", e => {
        let room_Num = parseInt($room_Num.textContent)
        if(room_Num < max){
            if (room_Num === 2){
                d.querySelectorAll(".frame")[3].classList.remove("none")
                d.querySelectorAll(".frame")[4].classList.remove("none")
                d.querySelectorAll(".frame")[5].classList.remove("none")
            }
            else if (room_Num === 3){
                d.querySelectorAll(".frame")[3].classList.add("none")
                d.querySelectorAll(".frame")[4].classList.add("none")
                d.querySelectorAll(".frame")[5].classList.add("none")
            }
            $room_Num.textContent = room_Num + 1
            $first_Frame.setAttribute("src", content[room_Num + 1].img1)
            $second_Frame.setAttribute("src", content[room_Num + 1].img2)
            $third_Frame.setAttribute("src", content[room_Num + 1].img3)
        }
        if (room_Num == max - 1) {
            $next_Btn.classList.add("gray")
        }
        $previous_Btn.classList.remove("gray")
    })

    $previous_Btn.addEventListener("click", e => {
        let room_Num = parseInt($room_Num.textContent)
        if(room_Num > less){
            if (room_Num === 4){
                d.querySelectorAll(".frame")[3].classList.remove("none")
                d.querySelectorAll(".frame")[4].classList.remove("none")
                d.querySelectorAll(".frame")[5].classList.remove("none")
            }
            else if (room_Num === 3){
                d.querySelectorAll(".frame")[3].classList.add("none")
                d.querySelectorAll(".frame")[4].classList.add("none")
                d.querySelectorAll(".frame")[5].classList.add("none")
            }
            $room_Num.textContent = room_Num - 1
            $first_Frame.setAttribute("src", content[room_Num - 1].img1)
            $second_Frame.setAttribute("src", content[room_Num - 1].img2)
            $third_Frame.setAttribute("src", content[room_Num - 1].img3)
        }
        if (room_Num == less + 1) {
            $previous_Btn.classList.add("gray")
        }
        $next_Btn.classList.remove("gray")
    })

    videos_Rooms(".second-video", ".next", ".room-num", ".start-btn")
})

d.querySelector(".volume-btn").addEventListener("click", e => {
    d.querySelector("video").play()
})

d.querySelectorAll(".frame img").forEach((frame, frame_Num) => {
    frame.addEventListener("click", e => {
        let room_Num = parseInt($room_Num.textContent)
        d.querySelector(".content").classList.remove("none")
        $capsule_Title.textContent = `Cápsula ${frame_Num+1}`
        $capsule_Content.textContent = text_Content[room_Num][`text${frame_Num+1}`]
    })
});

d.querySelector(".close-content").addEventListener("click", e => {
    d.querySelector(".content").classList.add("none")
})