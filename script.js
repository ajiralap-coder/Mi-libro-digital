/*
  LIBRO DIGITAL — contenido y navegación
  Para añadir o cambiar textos, editá el arreglo BOOK_PAGES de abajo.
  Conservá tus textos originales: reemplazá solamente los marcadores indicados.
*/
const BOOK_PAGES = [
  {
    "type": "cover",
    "title": "Todo lo que todavía no sé decirte",
    "subtitle": "Recuerdos, preguntas y una historia que no necesita tener nombre."
  },
  {
    "type": "contents",
    "title": "Un pequeño mapa",
    "kicker": "ANTES DE EMPEZAR",
    "paragraphs": [
      "Este libro no tiene que leerse de una sola vez. Podés abrirlo por donde quieras, detenerte, volver atrás o dejarlo descansar.",
      "Cada parte tiene su propio ritmo. Algunas guardan recuerdos; otras, preguntas que todavía no sé responder."
    ]
  },
  {
    "title": "Prólogo — ¿Por qué un libro?",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS",
    "paragraphs": [
      "Podría hacer una explicación sencilla, tal vez sea simplemente porque sí, pero no es así. Un libro es más que una carta, ¿un libro puede expresar más? No lo sé, creo que ni uno ni otro. Un libro va a depender de qué enfoque le queremos dar, al igual que la carta. Ambas dependen del enfoque."
    ]
  },
  {
    "title": "Prólogo — ¿Por qué un libro?",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS · CONTINUACIÓN",
    "paragraphs": [
      "Ahora sí, yendo a la pregunta del subtítulo. ¿Por qué un libro? Porque creo que puedo desafiarme y hacer un libro. Porque sé lo mucho que te gusta leer y porque quería dedicar un libro entero —aún no sé cuántas páginas son— para vos, considero que es un buen regalo. Realmente no lo sé, me lo dirás con el tiempo, o no.",
      "Es un libro para explicarte muchas cosas, para decirte muchas cosas. Espero que puedas disfrutar de la lectura."
    ]
  },
  {
    "title": "El día que empecé a guardar palabras",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS",
    "paragraphs": [
      "Una carta mía nace desde varias cosas que podrían ser:",
      "-\tLas emociones: siempre nace desde una emoción, generalmente, cuando me siento feliz. No es solo “escribir y ya” es expresar lo que estoy sintiendo, tal y como lo estoy sintiendo. Esto podría servirme de recuerdo o, también, para que otros puedan entenderme."
    ]
  },
  {
    "title": "El día que empecé a guardar palabras",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS · CONTINUACIÓN",
    "paragraphs": [
      "-\tLas ganas de dejar algo: me gusta que quede lo que pasó en el día, no tanto como un “diario”, sino como unas crónicas. Bueno, la verdad que no existe demasiado diferencia; voy a considerarlo como lo mismo.",
      "-\tReflexionar: a veces, escribo cosas que me pasaron o emociones que estoy sintiendo, pero llega un punto en el que me pongo a pensar y analizar lo que hice o siento. Termino comprendiendo muchas cosas."
    ]
  },
  {
    "title": "Una historia que no necesita tener nombre",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS",
    "paragraphs": [
      "Hay cosas que parecen mejores si están sin una definición exacta. A veces me nublo muchísimo intentando definir un vínculo o una cosa, pero ¿por qué debería definirlo ya? Definir algo en el instante le saca la magia, le saca el toque."
    ]
  },
  {
    "title": "Una historia que no necesita tener nombre",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS · CONTINUACIÓN",
    "paragraphs": [
      "Si yo, por ejemplo, siendo paleontólogo descubriera todas las especies de dinosaurios, ¿qué haría después? Ya no me quedaría nada por saber, ¿y la magia de seguir descubriendo todo de a poco? ¿Acaso nos gustaría definir un vínculo en una sola vez y no ir descubriendo de a poco lo que podríamos llegar a ser, sin apresurar el proceso? Es más fácil querer saber todo en una vez, pero solo es querer."
    ]
  },
  {
    "title": "Una historia que no necesita tener nombre",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS · CONTINUACIÓN",
    "paragraphs": [
      "Nunca podremos definir todo y eso lo hace más lindo, a su manera.",
      "Ir descubriendo juntos lo que podría llegar a ser es más lindo, más divertido y nos quedarán momentos que vamos a recordar por mucho tiempo. Caminar y descubrir juntos, son necesidad de definir todo ya, las dudas siempre te acompañarán; sepas todo o no, lo importante es estar juntos."
    ]
  },
  {
    "title": "Para leer sin apuro",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS",
    "paragraphs": [
      "Este libro no lo leería todo de golpe, pero es algo que no puedo decir con exactitud. Podría ser o no podría ser.",
      "No existe una respuesta para el final, no se descubre todo. No se define nada por completo."
    ]
  },
  {
    "title": "Para leer sin apuro",
    "kicker": "CAPÍTULO I · ANTES DE ESTAS PÁGINAS · CONTINUACIÓN",
    "paragraphs": [
      "Ir descubriendo, poco a poco, lo que espera en este libro cambia mucho su sentido."
    ]
  },
  {
    "title": "Las cosas que veo en vos",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS",
    "paragraphs": [
      "En vos veo mucho, y mucho de eso es invisible.",
      "En vos veo la que trata, con todo su ser, de comprender la tormenta de otro, aunque ni siquiera uno mismo se entienda. Cuando mi propio caos me controla y tengo actitudes que no son propias de mí, vos lo entendés y, por más que a veces te dañe, no te vas."
    ]
  },
  {
    "title": "Las cosas que veo en vos",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "En vos veo la que abraza y no suelta, cuando más lo necesito. Como todas esas veces en las que me costaba pensar y respirar, aún cuando ni te lo decía. Un abrazo tuyo siempre me ayudó y siempre fue una curita más.",
      "En vos veo esa sonrisa maravillosa que te alegra el día con solo mirarla."
    ]
  },
  {
    "title": "Las cosas que veo en vos",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "En vos veo esos ojitos que no pierden la ilusión, incluso cuando todo alrededor está muy oscuro.",
      "En vos veo ese brillo que nadie más tiene, la que ilumina todo con algo tan simple como llegar al colegio."
    ]
  },
  {
    "title": "Las cosas que veo en vos",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "En vos veo a alguien que te da paz, sin que eso la convierta en una salvadora o le dé una carga que tal vez no quiera.",
      "En vos veo una persona maravillosa. En vos veo eso y muchas cosas más."
    ]
  },
  {
    "title": "Las cosas que me hacen sonreír después",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS",
    "paragraphs": [
      "Al final del día lo que nos quedan son los recuerdos, y tengo bastantes que me hacen sonreír."
    ]
  },
  {
    "title": "Las cosas que me hacen sonreír después",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "No olvido la primera vez que te envié un mensaje, exactamente un 29 de noviembre de 2025, ¡qué precisión!, ¿no te parece? Era algo simple, muy simple: te invité a ser parte del Centro de Estudiantes. Hoy, es una de mis mejores decisiones y de las que no me arrepiento. Una conversación tan sencilla que, con el tiempo, lo transformó en algo muy lindo."
    ]
  },
  {
    "title": "Las cosas que me hacen sonreír después",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "Todas las veces que me decís algo tierno, cuando vuelvo a leer esos mensajes no puedo evitar sonreír. Me dan motivos para quererte un poco más todos los días.",
      "Todos los abrazos que nos dimos. Es lo que más amo, estar abrazados siempre. Puedo abrazarte y sentirme bien, como si un gesto tan sencillo me tranquilizara; y, para mí, es todo un acontecimiento, casi no hay nada que logre bajarme un cambio. Vos sí lo hacés."
    ]
  },
  {
    "title": "Las cosas que me hacen sonreír después",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "Son muchísimos más los momentos que me hacen sonreír, casi todas las veces en las que estamos juntos. Disfruto mucho el estar juntos. Realmente amo eso."
    ]
  },
  {
    "title": "La persona detrás de todo lo que veo",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS",
    "paragraphs": [
      "Esa persona que siempre describo es Agustina. Es la que siempre está, pero que también tienen sus días malos, sus días de bajones.",
      "Tiene emociones y sentimientos que nunca voy a conocer del todo. Tiene cosas que no podré conocer ni comprender, eso no le resta valor a ella. Ninguna cosa que ella crea que es imperfección le va a restar valor."
    ]
  },
  {
    "title": "La persona detrás de todo lo que veo",
    "kicker": "CAPÍTULO II · LAS COSAS QUE VEO EN VOS · CONTINUACIÓN",
    "paragraphs": [
      "Sus misterios la hacen ser ella, no necesitamos saberlo todo ni comprenderlo todo. Solo hace falta acompañarse y dar espacio en esos días en los que uno necesita, se volverá cuando se tenga que volver. La paciencia hará que alcancemos aquello que tanto anhelamos."
    ]
  },
  {
    "title": "El beso",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE",
    "paragraphs": [
      "Ese día que todos explotamos, en el que parecía el fin del Centro de Estudiantes. Ese día te quedaste hasta el final, no estabas bien, nadie lo estaba, ni siquiera yo tenía fuerzas de seguir."
    ]
  },
  {
    "title": "El beso",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Todos empezaron a irse, yo me quedé mientras te abrazaba. Los dos estábamos en el piso. Yo ya contuve mis lágrimas porque tenía que estar bien para vos, no me lo pediste, pero yo sabía que debía hacerlo; tal y como siempre hice: cuidarlos a todos y, sobre todo, cuidarte."
    ]
  },
  {
    "title": "El beso",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Dejé de lado mi propio dolor, para estar ahí con vos. No lo veo como un acto que merezca un monumento, lo veo como un simple acto de amor en medio de una de nuestras peores tormentas."
    ]
  },
  {
    "title": "El beso",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Llegó el momento y tenías que irte, te volví a abrazar con esa ternura que siempre te di. Y, ahí, me nació despedirme con algo más: un beso en la frente. No lo considero algo romántico, solo una forma de demostrarte que estaba ahí para vos, que sos importante en mí y recordarte lo mucho que te amo."
    ]
  },
  {
    "title": "El beso",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Nos fuimos todos, yo me fui con la dire. Llegué y le pregunté a tu mamá cómo estabas, aunque eso te molestó un poco después —no te gusta que le hable a tu mamá, para no preocuparnos tal vez, bueno, vos tenés tus motivos—."
    ]
  },
  {
    "title": "El beso",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Ese día no fue un día de derrota. Fue el día en que aprendí que debo seguir amando, a pesar de todo ese huracán y oscuridad que tenía alrededor. Aprendí a estar juntos en los momentos malos, aprendí a acompañarte sin importar como yo esté, porque eso me demostró lo mucho que me importás y que lo harás siempre."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE",
    "paragraphs": [
      "El día que más caos tuve fue ese miércoles, día en que tuvimos que cortar la Estudiantina. Me dejé consumir por los comentarios, por la maldad. Yo tenía que resistir más, pero ya no me daba la cabeza."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "El momento de quiebre no fue uno, fueron varios y durante toda la semana. El verdadero momento en el que todo se rompió fue cuando empecé a notar caritas tristes, cuando los vi llorar. Siempre tuve ese instinto sobreprotector, por más que quiera controlarlo no puedo."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Llegó el momento de despedir a los estudiantes. Yo tenía el micrófono en mano. Miré a los profesores, miré a los estudiantes. Sentí como si mis nervios me controlaran. Me dio bronca, pero de la peores que he tenido. Y verlos a ustedes destrozados, eso terminó de romperme."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "De mí pueden decir lo que sea, me dolerá, pero me la voy a guardar... pero de ustedes, no, de ahí no se vuelve. Cometieron un error al meterse con el proyecto que más amo, con las personas que amo.",
      "Exploté y dije muchas cosas. No me voy a arrepentir de nada, ni me voy a disculpar con nadie. Los docentes no me miraban, los estudiantes tampoco, pero yo no me iba a quedar callado."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Tener un título no te hace más y no te da el derecho de meterte conmigo, los docentes lo aprendieron ese día.",
      "No salió como yo esperaba, porque después fui, roto, con las pocas fuerzas que me quedaban. Ahí pude desahogarme y llorar todo lo que me dio el cuerpo."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "Y en esos momentos también tuve un poquito de razones para amar. Bueno, no fueron un poquito, fueron muchas. Y a pesar del huracán que tenía encima por toda la situación, no sé cómo, pero dejé todo eso de lado para estar ahí con mi niña."
    ]
  },
  {
    "title": "El día que no salió como esperaba",
    "kicker": "CAPÍTULO III · LOS RECUERDOS QUE MERECEN QUEDARSE · CONTINUACIÓN",
    "paragraphs": [
      "No lo considero una prueba de amor, ya que no necesito esas cosas para saber lo mucho que puedo llegar a amar y las fuerzas que me da el amor que siento. Aprendí mucho más que a decir basta y estar cansado. Aprendí a acompañar a quien amo, a quienes amo."
    ]
  },
  {
    "title": "Lo que estoy aprendiendo",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO",
    "paragraphs": [
      "Y aunque me cueste aceptar y entender, estoy aprendiendo que no puedo controlarlo todo. Estoy aprendiendo que la vida es incierta, que no puedo ni voy a saberlo todo y que está bien de esa manera.",
      "Me cuesta, porque me da ansiedad y me hace sobrepensar. Estoy cambiando, porque \"todo cambia\". Quiero cambiar para bien, así puedo estar con los que amo."
    ]
  },
  {
    "title": "Lo que estoy aprendiendo",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO · CONTINUACIÓN",
    "paragraphs": [
      "También estoy aprendiendo a ser paciente y que no puedo apresurar las cosas, solo tengo que dejar que el tiempo haga lo suyo, que los procesos hagan lo suyo. No es una obligación querer controlarlo todo, solo disfruta de la vida y ya."
    ]
  },
  {
    "title": "Lo que estoy aprendiendo",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO · CONTINUACIÓN",
    "paragraphs": [
      "Te vas a agotar por querer todo en una vez, y te vas a frustrar por no poder hacerlo. Y no poder hacerlo tampoco está mal, porque la vida son procesos. Cada día aprendo un poquito más, y trato de dominar esos pensamientos que podrían destruirme."
    ]
  },
  {
    "title": "Lo que aprendí sin darme cuenta",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO",
    "paragraphs": [
      "Aprendí que existen muchas formas de amar y de demostrar cariño. Todas esas formas pueden coexistir y no sé terminará el mundo.",
      "Estoy trabajando en mantener la calma, eso es lo que aún no puedo del todo. Tengo personas que me acompañan y me ayudan."
    ]
  },
  {
    "title": "Lo que aprendí sin darme cuenta",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO · CONTINUACIÓN",
    "paragraphs": [
      "Aprendí que el amor sostiene y que no tenés que cargar todo solo, hay personas que con una mínima muestra de amor ya te dan fuerzas para todo.",
      "Aprendí y sigo aprendiendo gracias a esas personas, gracias a que yo me permito sentir y vivir los momentos con quienes amo."
    ]
  },
  {
    "title": "No todo necesita un nombre",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO",
    "paragraphs": [
      "No puedo ponerle nombre a esto, porque no tiene, al menos para mí. No hace falta ponerle una definición exacta.",
      "Sé que hay cariño, aprecio y amor de los dos, quizá no en el mismo nivel o intensidad, pero está. No necesitamos definir nada más, solo pasar momentos juntos."
    ]
  },
  {
    "title": "No todo necesita un nombre",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO · CONTINUACIÓN",
    "paragraphs": [
      "Ponerle nombre sería como darle un punto final, que no puede crecer o ser más que esto o aquello. Nada tiene punto final, mucho menos esto, al menos para mí."
    ]
  },
  {
    "title": "No todo necesita un nombre",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO · CONTINUACIÓN",
    "paragraphs": [
      "Podemos descubrir, explorar y más, sin que eso lo convierta en una deuda eterna con el otro. No lo veo como una deuda, no debe ser así. Es lindo así, sin definiciones. Esperamos procesos, esperamos que el tiempo acomode todo en su lugar. Esperamos que sea el momento adecuado. Ponerle un nombre no cambiaría nada, no desde mi punto de vista."
    ]
  },
  {
    "title": "No todo necesita un nombre",
    "kicker": "CAPÍTULO IV · LO QUE ESTOY APRENDIENDO · CONTINUACIÓN",
    "paragraphs": [
      "Un nombre no define la cantidad de amor o algo, es solo eso: un nombre... no le pondría nombre. Al menos no por ahora, porque no lo necesito. Ahora la pregunta es, ¿necesitamos que esto tenga nombre? Yo creo que no, podemos estar de acuerdo, o no; pero nada cambiaría, el cariño seguiría presente."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR",
    "paragraphs": [
      "Hay muchas cosas que quiero decirte y, aunque parezca contradictorio, a veces no sé cómo hacerlo. Podría escribirte una carta, otra más, o incluso hacer otro libro entero, pero ¿sería suficiente? No lo sé. Quizás sí, quizás no. Al final, siempre hay algo que queda sin decir, algo que uno siente y que no consigue explicar del todo."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Hay algo que quiero que entiendas: cuando estoy con vos, puedo ser Joa, solo Joa. No necesito ser el presidente del Centro de Estudiantes, el que tiene que resolver las cosas, el que intenta estar bien para los demás o el que tiene que encontrar una respuesta para todo. Puedo dejar todo eso a un lado y simplemente ser yo. Y no sabés lo lindo que es eso."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "No necesito hacer algo extraordinario para sentir que mi presencia vale. No necesito demostrarte nada todo el tiempo. Puedo estar con vos, hablar de cualquier cosa, reírme, abrazarte o simplemente compartir un momento. Y, de alguna manera, eso alcanza. No porque mi vida deje de tener problemas, sino porque puedo dejar de pensar en ellos por un rato."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Es como encontrar un lugar seguro en medio de todo lo que pasa, un lugar donde puedo ser yo sin tener que ser nada más."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Y no quiero que malinterpretes esto. No sos responsable de mis problemas, tampoco tenés que solucionarlos. No espero que siempre sepas qué decirme ni que estés disponible cada vez que te necesite. No quiero convertir algo tan lindo en una obligación. Simplemente quiero que sepas lo que significa para mí poder compartir esos momentos con vos."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Cuando me abrazás, siento que los problemas se van por un rato. Cuando me hablás bonito, me hacés sentir amado. Y cuando te quedás, cuando me hacés saber que te importo, me siento seguro. No porque de repente todo esté resuelto, sino porque recuerdo que también hay cosas lindas en mi vida, personas con las que puedo compartirlas y momentos que merecen ser vividos."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Quizás por eso me importa tanto lo que tenemos. Y quizás por eso también me da miedo perderlo."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "No voy a mentirte diciendo que nunca pienso en eso. Me asusta que las cosas cambien, que un día ya no seamos como ahora, que aparezca alguien más y que el lugar que hoy tengo en tu vida sea diferente. Me da miedo que te vayas. No sé si algún día dejaré de tener ese miedo, pero sí sé que no quiero que él decida por mí ni que termine arruinando algo que disfruto tanto."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Porque, si algo estoy aprendiendo, es que no puedo controlar todo. No puedo pedirle a la vida que las cosas permanezcan exactamente como están solo porque me hacen feliz. Tampoco puedo saber qué va a pasar con nosotros. Y, aunque me cueste aceptarlo, está bien no saberlo todo."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Prefiero seguir descubriendo lo que somos, compartir momentos con vos y dejar que las cosas sucedan a su tiempo. No quiero apresurarte ni convertir mis sentimientos en una obligación para vos. Quiero que podamos disfrutar de esto sin tener que encontrar una respuesta para cada pregunta."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "¿Estoy enamorado realmente? La verdad es que no siempre sé cómo responderme. Hay momentos en los que pienso que sí, que esto que siento es enamoramiento; otros en los que me pongo a analizarlo todo y termino con más preguntas que respuestas. Quizás estoy intentando entender algo que no necesita ser resuelto hoy. Quizás todavía estoy aprendiendo a distinguir lo que siento."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "No lo sé, y no quiero inventar una certeza solamente para quedarme tranquilo.",
      "Lo que sí sé es que te quiero muchísimo. Sé que me importás, que disfruto de estar con vos, que guardo nuestros momentos y que hay cosas tuyas que consiguen hacerme sonreír incluso cuando ya terminó el día. Sé que quiero seguir conociéndote, acompañándote y descubriendo qué nos espera. Y, por ahora, eso es algo que puedo decir sin dudar."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Tal vez estas sean algunas de las palabras que no encontraba. O tal vez, cuando vuelva a leerlas, descubra que todavía me faltan muchas más. Sería bastante gracioso hacer un libro entero y seguir sin encontrar todas las palabras, ¿no te parece?"
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Pero supongo que de eso se trata. No siempre voy a saber explicar lo que siento, ni voy a encontrar una frase que lo resuma todo. A veces voy a escribir mucho y aun así me va a faltar algo. Otras veces, quizás, alcance con un abrazo, una mirada o un momento compartido."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "No quiero que tengas que comprenderme por completo. Solo me gustaría que pudieras conocer un poquito más de este Joa que, cuando te escribe, intenta ordenar todo lo que lleva adentro. Este Joa que siente mucho, que piensa demasiado, que a veces tiene miedo y que todavía está aprendiendo a querer sin querer tener todas las respuestas."
    ]
  },
  {
    "title": "Las palabras que no encuentro",
    "kicker": "LO QUE TODAVÍA NO SÉ DECIR · CONTINUACIÓN",
    "paragraphs": [
      "Si después de leer esto entendés un poquito mejor mi manera de ser y de quererte, entonces estas palabras ya habrán servido para algo."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO",
    "paragraphs": [
      "Si algún día volvés a estas páginas, no sé en qué momento de tu vida estarás. Quizás haya pasado poco tiempo desde que las leíste por primera vez, quizás hayan pasado meses o años. Tal vez recuerdes cada detalle de lo que vivimos, o tal vez algunas cosas se hayan mezclado con otros recuerdos. Es normal, supongo. El tiempo pasa y nosotros también cambiamos."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No sé si vas a leer este libro de la misma manera que ahora. Quizás encuentres frases que todavía te hagan sonreír, recuerdos que te hagan pensar o cosas que ya no veas de la misma forma. Está bien. No escribí estas páginas para que tengas que sentir lo mismo cada vez que las leas."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Si volvés a ellas, me gustaría que pudieras recordar lo que vivimos sin sentir que tenés que volver exactamente a ese momento. No hace falta. Los recuerdos no son una obligación de repetir el pasado, son una manera de conservar algo de lo que fuimos."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Quizás te preguntes por qué escribí tantas cosas, por qué guardé ciertos momentos o por qué me detuve a pensar tanto en algo que, para otra persona, podría parecer sencillo. Bueno, ya me conocés un poquito. A veces pienso demasiado, le doy muchas vueltas a las cosas y termino escribiendo para entenderlas. No prometo que eso vaya a cambiar del todo."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Pero si hay algo que me gustaría que recordaras, es que cada página fue escrita desde lo que yo podía comprender y sentir en ese momento. No desde una versión perfecta de mí, ni desde alguien que sabía exactamente lo que estaba haciendo. Era Joa, con sus dudas, sus emociones, sus ideas y sus ganas de compartir algo con vos."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No sé qué habrá cambiado para cuando vuelvas a leerlo. Tampoco sé qué cosas seguirán siendo iguales. Y no quiero imaginar un futuro por vos, ni decidir de antemano qué lugar tendrá este libro en tu vida. Eso lo vas a descubrir vos, si alguna vez decidís volver a abrirlo."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Solo espero que, al leerlo, puedas reconocer el cariño con el que fue escrito. Que encuentres en estas páginas una parte de nuestra historia, una parte de mí y, sobre todo, una oportunidad de recordar.",
      "Y si algún día una de estas páginas te hace sonreír sin que sepas muy bien por qué, me voy a dar por satisfecho. No hace falta que recuerdes todo. A veces, un pequeño recuerdo alcanza para volver a encontrarnos con algo lindo que vivimos."
    ]
  },
  {
    "title": "Si algún día volvés a estas páginas",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Así que, si volviste hasta acá, gracias por volver. No importa cuánto tiempo haya pasado ni cuántas veces hayas leído estas palabras. Este libro seguirá siendo lo que fue desde el principio: una manera de dejar algo escrito para vos, con la esperanza de que puedas encontrar en él un poquito de todo aquello que a veces no sé decirte."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO",
    "paragraphs": [
      "Hay algo más que quiero decirte antes de terminar este libro. Algo que me cuesta un poco escribir, pero que creo que es importante que sepas."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No sé qué sentís vos, ni pretendo que estas páginas sean una manera de obtener una respuesta. Tampoco quiero que sientas que, por todo lo que escribí, tenés que sentir lo mismo que yo. No sería justo. Los sentimientos no funcionan así, no podemos elegir lo que sentimos por otra persona, por más que a veces nos gustaría poder hacerlo."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Si algún día me decís que no sentís lo mismo, voy a intentar entenderte. Quizás me cueste, quizás necesite tiempo para acomodar mis pensamientos y mis emociones, pero no te voy a culpar por sentir algo distinto. No hiciste nada malo por no sentir lo mismo que yo. No tendrías por qué hacerlo.",
      "Pero hay algo que sí me da mucho miedo, y es que te vayas."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No te voy a mentir diciendo que me daría lo mismo, porque no sería verdad. Me dolería muchísimo. Me costaría acostumbrarme a que ya no estés de la misma manera, a que las cosas cambien y a tener que aprender a vivir con una ausencia que nunca quise. No sé cómo lo atravesaría, pero sé que me dolería mucho."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Y no es porque crea que me debés algo. No me debés tus sentimientos, ni una respuesta que me haga feliz, ni una oportunidad solamente porque yo te quiero. Tampoco quiero que te quedes por lástima, por culpa o por miedo a lastimarme. Si te quedaras, me gustaría que fuera porque vos también querés hacerlo."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Lo que quiero decirte es que, incluso si no sentís lo mismo, me gustaría que pudiéramos seguir compartiendo nuestras cosas, hablando, riéndonos y creando recuerdos. Que no sintamos que todo lo lindo que vivimos pierde su valor por no haber sentido exactamente lo mismo. Porque, para mí, todo eso fue y sigue siendo importante."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Quizás no podamos continuar de la misma manera, y entiendo que algunas cosas podrían necesitar tiempo o cambiar. No quiero fingir que sería fácil ni pedirte que nada cambie. Solo quiero que sepas que, si depende de lo que yo deseo, me gustaría que siguieras en mi vida."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Me da miedo perderte, Agustina. Mucho. Y creo que necesitaba escribirlo porque, a veces, me resulta más fácil explicar cuánto quiero a alguien que reconocer cuánto me asusta que deje de estar.",
      "No te escribo esto para que me prometas que nunca te vas a ir. No puedo pedirte algo así, porque la vida cambia y nosotros también. Te lo escribo porque quiero ser sincero con vos, incluso en las cosas que me cuesta reconocer."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Si no sentís lo mismo, voy a intentar comprenderlo. No voy a convertir mis sentimientos en una deuda tuya. Pero ojalá podamos encontrar una manera de seguir compartiendo nuestras vidas, aunque sea de una forma distinta a la que alguna vez imaginé."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Porque, más allá de lo que pueda llegar a sentir por vos, hay algo que tengo muy claro: no quiero que el valor de lo que tenemos dependa de que algún día lleguemos a sentir exactamente lo mismo.",
      "Y si alguna vez las cosas cambian, espero que podamos tratarnos con el mismo cariño y respeto con el que construimos todo esto."
    ]
  },
  {
    "title": "Si no sentís lo mismo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No sé si estas son las palabras que necesitaba encontrar. Quizás todavía me falten algunas. Pero, por ahora, quería que supieras esto."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO",
    "paragraphs": [
      "Llegamos al final. Bueno, al final de este libro, porque no creo que todo lo que tengo para decirte pueda terminar en estas páginas. Y tampoco creo que todo lo que vivimos necesite una conclusión."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Cuando empecé a escribir, no sabía cuántas páginas iba a tener, qué cosas terminaría contando ni cómo iba a cerrar todo esto. De hecho, todavía me cuesta creer que haya llegado hasta acá. Empecé con una pregunta bastante sencilla: ¿por qué un libro? Y, después de tantas palabras, creo que tengo una respuesta un poquito más clara."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Quería hacer algo para vos. Quería desafiarme, dedicarte algo que pudieras leer y dejar por escrito una parte de todo lo que siento, recuerdo y pienso. Quería que conocieras cosas que quizás no te había explicado de esta manera. Y, en el camino, terminé descubriendo algunas cosas sobre mí."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Escribir me hizo detenerme en momentos que, de otra forma, tal vez habría dejado pasar. Me hizo volver a recuerdos que todavía me hacen sonreír, pensar en otros que fueron difíciles y preguntarme qué aprendí de cada uno. También me hizo reconocer que hay cosas que todavía no comprendo, sentimientos que no sé cómo definir y preguntas que no necesitan una respuesta inmediata."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "¿Te das cuenta? Empecé queriendo escribir un libro para explicarte muchas cosas y terminé descubriendo que no tenía todas las explicaciones. Qué ironía, ¿no? Aunque, pensándolo bien, quizás no sea tan raro. A veces uno empieza algo creyendo que sabe adónde va y termina aprendiendo por el camino."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No quiero que estas páginas sean una definición de lo que somos, ni una promesa sobre lo que vamos a ser. Tampoco quiero que sean una lista de razones por las que deberías quererme de una manera determinada. No escribí esto para convencerte de nada. Lo escribí porque quería compartir con vos una parte de mi mundo, y porque me pareció que merecías tener algo hecho con tiempo, dedicación y cariño."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Si disfrutaste de leerlo, me alegro muchísimo. Si hubo cosas que te hicieron pensar, sonreír o conocerme un poquito más, entonces habrá valido la pena. Y si algunas partes no las entendiste del todo, bueno, tampoco pasa nada. Ni yo entiendo todo lo que escribo a veces."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "No sé qué va a pasar después de este libro. No sé qué cosas vamos a vivir, qué recuerdos nos esperan ni qué respuestas encontraremos con el tiempo. Pero no necesito saberlo para valorar lo que tenemos hoy."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Así que no voy a cerrar estas páginas diciéndote que todo va a salir de una determinada manera, porque no puedo saberlo. Prefiero cerrar agradeciéndote por los momentos compartidos, por el cariño que me das y por permitirme conocerte un poquito más."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Y, si me preguntás si volvería a escribir todo esto, creo que sí. Quizás cambiaría algunas cosas, agregaría otras y me reiría de algunas frases que ahora me parecen buenísimas. Pero lo haría, porque esta también fue una manera de descubrirme y de compartir algo con vos."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Al principio me preguntaba si un libro podía expresar más que una carta. Ahora creo que no se trata de cuál expresa más. Se trata de lo que uno quiere dejar en cada uno. Y yo quería dejarte esto.",
      "No sé si encontré todas las palabras. Probablemente no. Pero, por lo menos, intenté encontrarlas."
    ]
  },
  {
    "title": "Epílogo",
    "kicker": "ANTES DE CERRAR EL LIBRO · CONTINUACIÓN",
    "paragraphs": [
      "Y con eso, por ahora, me alcanza."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS",
    "paragraphs": [
      "Bueno, Joa. Llegaste hasta acá.",
      "No sé si te imaginabas que ibas a terminar escribiendo todo esto. Seguramente empezaste con una idea, después se te ocurrieron otras veinte y, como siempre, terminaste pensando mucho más de lo que habías planeado. No te voy a juzgar por eso; ya nos conocemos."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Pero quiero que te detengas un momento y mires todo lo que hiciste. No para felicitarte por haber escrito un libro como si eso fuera lo más importante, sino para que te des cuenta de algo: te sentaste a intentar comprender lo que sentías. Y eso también tiene valor."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Escribiste sobre una persona que querés muchísimo, sobre momentos que guardás con cariño, sobre cosas que te hacen feliz y sobre otras que te dan miedo. Intentaste explicar lo que te pasa cuando estás con ella, por qué te importa tanto y qué significa para vos compartir esos momentos. Y, aun después de tantas páginas, seguís teniendo preguntas.",
      "¿Sabés qué? Está bien."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "No tenés que comprender todo ahora. No necesitás ponerle un nombre a cada sentimiento ni encontrar una respuesta definitiva para cada duda. Podés estar enamorado y tener miedo. Podés querer a alguien muchísimo y no saber qué va a pasar. Podés disfrutar de lo que tenés hoy sin conocer el final de la historia."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Y, por favor, acordate de algo: no necesitás convertirte en el que sostiene a todo el mundo para merecer que te quieran. No tenés que estar siempre disponible, tener siempre una respuesta o esconder lo que te pasa para cuidar a los demás. También podés cansarte, equivocarte, pedir ayuda y necesitar un abrazo. Eso no te hace menos Joa."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Sé que te importa mucho acompañar a las personas que querés. Sé que, cuando alguien está mal, muchas veces dejás de lado lo tuyo para intentar estar ahí. No quiero que pierdas esa parte tuya, porque nace de algo muy lindo. Pero tampoco quiero que te olvides de vos en el proceso. No tenés que romperte para demostrar que sabés querer."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Y con Agustina, acordate de disfrutar. No conviertas cada momento en una pregunta sobre el futuro. No analices cada palabra como si tuvieras que encontrar una respuesta escondida. A veces, un abrazo es un abrazo. Una conversación linda es una conversación linda. Un momento compartido puede ser valioso sin que tengas que descubrir inmediatamente qué significa todo."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Si algún día las cosas cambian, vas a tener que aprender a atravesarlo. Si las cosas crecen, también vas a tener que aprender a vivirlas. Pero no necesitás adelantarte a ninguna de esas posibilidades. Todavía estás acá, escribiendo sobre lo que sentís hoy."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Y no te olvides de que vos también sos alguien a quien vale la pena conocer. No solamente por lo que hacés, por los proyectos que impulsás o por las responsabilidades que asumís. También por tus ocurrencias, tus contradicciones, tus ganas de escribir, tu manera de recordar y todas esas cosas que te hacen ser vos."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Quizás esa sea una de las razones por las que quisiste hacer este libro. Querías que Agustina conociera un poquito más de vos. Pero espero que, mientras lo escribías, vos también hayas podido conocerte un poco más."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "No hace falta que salgas de estas páginas con todas las respuestas. Seguí aprendiendo. Seguí queriendo. Seguí escribiendo, aunque a veces no encuentres las palabras. Y cuando te toque descansar, descansá. No tenés que ganarte el derecho a estar tranquilo haciendo algo por los demás."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Por último, no conviertas este libro en una prueba que tengas que superar. No necesitás escribir algo más hermoso cada vez, ni demostrar que podés querer más que ayer. Si alguna vez volvés a estas páginas, leelas con cariño. Eran las palabras que pudiste encontrar en este momento de tu vida, y eso ya es suficiente.",
      "Bueno, Joa. Creo que por ahora es todo."
    ]
  },
  {
    "title": "Algo para Joa",
    "kicker": "UNA ÚLTIMA PÁGINA, PARA VOS · CONTINUACIÓN",
    "paragraphs": [
      "Aunque, conociéndote, probablemente dentro de unos días se te ocurra algo más que agregar."
    ]
  },
  {
    "type": "end",
    "title": "Por ahora, eso es todo.",
    "subtitle": "Hay palabras que terminan en una página. Otras siguen viviendo después de cerrar el libro."
  }
];

const $ = (selector) => document.querySelector(selector);
const intro = $("#intro");
const reader = $("#reader");
const leftPage = $("#leftPage");
const rightPage = $("#rightPage");
const turnSheet = $("#turnSheet");
const turnFront = $("#turnFront");
const turnBack = $("#turnBack");
const pageCounter = $("#pageCounter");
const sectionHeading = $("#sectionHeading");
const prevButton = $("#prevButton");
const nextButton = $("#nextButton");
const progressFill = $("#progressFill");
const contentsPanel = $("#contentsPanel");
const contentsList = $("#contentsList");
const soundButton = $("#soundButton");

let current = 0;
let isTurning = false;
let audioContext = null;
let soundEnabled = false;

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function isMobile() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function pageMarkup(page, index, side = "") {
  const number = String(index + 1).padStart(2, "0");
  if (!page) return `<div class="page-ornament">✳</div><span class="page-number">${number}</span>`;

  if (page.type === "cover") {
    return `
      <div class="cover-page">
        <div class="cover-frame"></div>
        <div class="cover-small">un libro personal</div>
        <h2 class="cover-title">${escapeHTML(page.title).replace("todavía no sé decirte", "<em>todavía no sé decirte</em>")}</h2>
        <p class="cover-subtitle">${escapeHTML(page.subtitle)}</p>
        <div class="cover-flower">✳</div>
      </div>`;
  }
  if (page.type === "end") {
    return `<div class="cover-page">
      <div class="cover-frame"></div><div class="cover-small">fin de estas páginas</div>
      <h2 class="cover-title">${escapeHTML(page.title)}</h2>
      <p class="cover-subtitle">${escapeHTML(page.subtitle)}</p><div class="cover-flower">✳</div>
    </div>`;
  }

  const paragraphs = (page.paragraphs || []).map((paragraph) => {
    const isPlaceholder = /^\[.*\]$/.test(paragraph.trim());
    return isPlaceholder
      ? `<div class="page-placeholder">${escapeHTML(paragraph)}</div>`
      : `<p>${escapeHTML(paragraph)}</p>`;
  }).join("");

  return `
    <p class="page-kicker">${escapeHTML(page.kicker || "")}</p>
    <h3 class="page-title">${escapeHTML(page.title || "")}</h3>
    <div class="page-body">${paragraphs}</div>
    <span class="page-number">${number}</span>`;
}

function renderPage(element, page, index, side = "") {
  element.className = `paper ${side}-paper`;
  if (page && (page.type === "cover" || page.type === "end")) element.classList.add("special-paper");
  element.innerHTML = pageMarkup(page, index, side);
}

function currentSpreadIndexes() {
  if (isMobile()) return { left: null, right: current };
  return { left: current, right: current + 1 };
}

function renderSpread() {
  const { left, right } = currentSpreadIndexes();
  if (isMobile()) {
    renderPage(leftPage, null, -1, "left");
    renderPage(rightPage, BOOK_PAGES[right], right, "right");
  } else {
    renderPage(leftPage, BOOK_PAGES[left], left, "left");
    renderPage(rightPage, BOOK_PAGES[right], right, "right");
  }
  const visibleIndex = isMobile() ? current : Math.min(current + 1, BOOK_PAGES.length - 1);
  sectionHeading.textContent = BOOK_PAGES[visibleIndex]?.title || "Estas páginas";
  pageCounter.textContent = `${String(visibleIndex + 1).padStart(2, "0")} / ${String(BOOK_PAGES.length).padStart(2, "0")}`;
  prevButton.disabled = current <= 0 || isTurning;
  nextButton.disabled = current >= BOOK_PAGES.length - (isMobile() ? 1 : 2) || isTurning;
  progressFill.style.width = `${((visibleIndex + 1) / BOOK_PAGES.length) * 100}%`;
  $("#turnHint").textContent = isMobile() ? "Una página a la vez" : "Una página a la vez";
  buildContents();
}

function buildContents() {
  contentsList.innerHTML = "";
  BOOK_PAGES.forEach((page, index) => {
    if (page.type === "cover" || page.type === "end") return;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span class="contents-number">${String(index + 1).padStart(2, "0")}</span><span>${escapeHTML(page.title)}</span>`;
    button.addEventListener("click", () => {
      current = index;
      if (!isMobile() && current % 2 !== 0) current -= 1;
      closeContents();
      renderSpread();
      $("#reader").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    li.appendChild(button);
    contentsList.appendChild(li);
  });
}

function playPageSound() {
  if (!soundEnabled) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.07;
    const bufferSize = Math.floor(audioContext.sampleRate * duration);
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) * 0.13;
    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    filter.type = "lowpass";
    filter.frequency.value = 1300;
    gain.gain.value = 0.12;
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    source.start();
  } catch (_) {
    // El sonido es opcional; el libro funciona sin él.
  }
}

function turn(direction) {
  if (isTurning) return;
  const max = BOOK_PAGES.length - (isMobile() ? 1 : 2);
  const target = Math.max(0, Math.min(max, current + direction * (isMobile() ? 1 : 2)));
  if (target === current) return;

  isTurning = true;
  const forward = direction > 0;
  const currentRightIndex = isMobile() ? current : current + 1;
  const targetLeftIndex = target;
  turnFront.innerHTML = pageMarkup(BOOK_PAGES[currentRightIndex], currentRightIndex, "right");
  turnBack.innerHTML = pageMarkup(BOOK_PAGES[targetLeftIndex], targetLeftIndex, "left");
  turnSheet.classList.remove("turning");
  void turnSheet.offsetWidth;
  turnSheet.style.display = "block";
  turnSheet.style.animationDirection = forward ? "normal" : "reverse";
  turnSheet.classList.add("turning");
  playPageSound();

  window.setTimeout(() => {
    current = target;
    turnSheet.classList.remove("turning");
    turnSheet.style.display = "none";
    isTurning = false;
    renderSpread();
  }, 830);
}

function openBook() {
  intro.classList.add("hidden");
  reader.classList.remove("hidden");
  current = 0;
  renderSpread();
  reader.scrollIntoView({ behavior: "smooth", block: "start" });
}
function closeContents() { contentsPanel.classList.add("hidden"); }

$("#openBookButton").addEventListener("click", openBook);
$("#homeLink").addEventListener("click", (event) => {
  event.preventDefault();
  reader.classList.add("hidden");
  intro.classList.remove("hidden");
  closeContents();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("#prevButton").addEventListener("click", () => turn(-1));
$("#nextButton").addEventListener("click", () => turn(1));
$("#backToIntro").addEventListener("click", () => {
  reader.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("#contentsButton").addEventListener("click", () => {
  if (reader.classList.contains("hidden")) openBook();
  contentsPanel.classList.remove("hidden");
});
$("#closeContents").addEventListener("click", closeContents);
contentsPanel.addEventListener("click", (event) => {
  if (event.target === contentsPanel) closeContents();
});
soundButton.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundButton.textContent = `Sonido: ${soundEnabled ? "encendido" : "apagado"}`;
  soundButton.setAttribute("aria-pressed", String(soundEnabled));
});
document.addEventListener("keydown", (event) => {
  if (!contentsPanel.classList.contains("hidden")) {
    if (event.key === "Escape") closeContents();
    return;
  }
  if (reader.classList.contains("hidden")) {
    if (event.key === "Enter" && document.activeElement === $("#openBookButton")) openBook();
    return;
  }
  if (event.key === "ArrowRight") turn(1);
  if (event.key === "ArrowLeft") turn(-1);
});
let touchStartX = null;
$("#book").addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
$("#book").addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 45) turn(delta < 0 ? 1 : -1);
  touchStartX = null;
});
window.addEventListener("resize", () => { if (!reader.classList.contains("hidden") && !isTurning) renderSpread(); });
renderSpread();
