
// ==========================================
// CALENDARIO DE NAVIDAD PARA MARJORIE
// ==========================================

// CONFIGURACIÓN GENERAL

const MODO_PREVIEW = true;
const YEAR = 2026;
const STORAGE_KEY = "calendarioMarjorie2026";
const TIME_ZONE = "America/Guatemala";

// ELEMENTOS HTML

const welcome = document.getElementById("welcome");
const calendar = document.getElementById("calendar");
const openGift = document.getElementById("openGift");
const doorsContainer = document.getElementById("doors");

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

const dialog = document.getElementById("surpriseDialog");
const closeDialog = document.getElementById("closeDialog");
const content = document.getElementById("surpriseContent");

// PUERTAS YA ABIERTAS

let opened = [];

try {
  const savedDoors = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );

  opened = Array.isArray(savedDoors) ? savedDoors : [];
} catch (error) {
  opened = [];
}


// ==========================================
// MENSAJES DE LAS PUERTAS
// ==========================================

const messages = {

  1: `A veces me pongo a pensar en cómo comenzó nuestra historia y me da mucha ternura recordar que todo empezó por aquel termo. Quién diría que algo tan sencillo nos llevaría a conocernos, hablar y poco a poco convertirnos en algo tan especial. Gracias por llegar a mi vida. ♡`,

  4: `No culpo a mi corazón por haberse enamorado de una princesa, ni a mis ojos por haberse deslumbrado con tu belleza. Por eso, en esta noche, te pido que te conviertas en mi reina. ♡`,

  6: `¡Feliz cumpleaños adelantado, mi niña! Jejeje, ya estás viejita. ❤️ Gracias por ser una persona tan especial y por compartir conmigo tantos momentos. Espero que la vida te regale muchísima felicidad. Te amo mucho.`,

  8: `Espero que te haya gustado todo lo que preparé para ti. Cada detalle fue hecho con muchísimo cariño, pensando en ti y en esa sonrisa tan bonita que me encanta. ♡`,

  10: `Ya dentro de 15 días llegará un día especial. Aunque no lo pasemos juntos, recuerda que siempre tendrás un lugar en mi corazón. Si algún día me necesitas, estaré para ti. A pesar de lo que pueda pasar entre nosotros, deseo que nunca olvides todo el cariño que te tengo. ♡`,

  12: `Hay canciones que apenas comienzan y automáticamente me hacen pensar en ti. Me recuerdan nuestras voces, nuestros momentos y todo lo bonito que hemos compartido. Te amo mucho, mucho más que tú jeje. Cuídate y abrígate bien, mi niña. ❤️`,

  14: `Una de las cosas que más me gusta es cantar contigo. Me encanta compartir canciones, reírnos y disfrutar de esos momentos tan nuestros. Ojalá nunca nos falten canciones que cantar juntos. ♡`,

  16: `¿Recuerdas el día de las madres? Yo estaba muy nervioso y no quería salir a actuar, pero tú estuviste ahí para apoyarme y darme ánimos. Gracias por creer en mí incluso cuando yo no estaba seguro de poder hacerlo. Nunca voy a olvidar ese día. ❤️`,

  18: `Nuestra primera cita... aquella película de terror que terminó dándome más miedo a mí que a ti. JAJAJA. Recuerdo cómo te agarraba del brazo y cómo me tranquilizabas. También recuerdo nuestro primer beso. Sin duda, uno de esos momentos que guardaré con muchísimo cariño. ♡`,

  20: `¿Te acuerdas de esa travesura de que me escape? Los dos estábamos nerviosos y con un poquito de miedo, pero al final terminamos viviendo una anécdota que ahora me hace reír. Qué bonito es tener recuerdos tan nuestros. JAJAJA. ❤️`,

  23: `Gracias por todos los momentos que hemos compartido: las risas, las canciones, las salidas, las bromas y hasta las pequeñas tonterías que solamente nosotros entendemos. Cada recuerdo tiene un lugar especial para mí. ♡`,

  24: `Hemos llegado a la última puerta de este calendario. Pero espera... todavía hay una sorpresa más. Busca la puerta número 25. Se abrirá a las 00:00 del 25 de diciembre. ¡Feliz Nochebuena! ♡`

};

// ==========================================
// FOTOGRAFÍAS
// ==========================================

const photoDoors = {

  3: {
    src: "fotos/foto-1.jpg",
    caption: "Nuestra foto de perfil juntos lastima solo la tuvimos un tiempo jeje. Aquel día de las madres en el que me apoyaste cuando estaba nervioso. Gracias por estar conmigo. ❤️"
  },

  4: {
    src: "fotos/foto-6.jpg",
    caption: "No culpo a mi corazón por haberse enamorado de una princesa, ni a mis ojos por haberse deslumbrado con tu belleza. Por eso, en esta noche, te pido que te conviertas en mi reina. ♡"
  },

  7: {
    src: "fotos/foto-2.jpg",
    caption: "Aquel día que salimos por un helado al Andaría. Un momento sencillo, pero uno de esos que me encanta recordar contigo. ♡"
  },

  8: {
    src: "fotos/foto-7.jpg",
    caption: "Espero que te haya gustado todo lo que preparé para ti. Cada detalle fue hecho con muchísimo cariño, pensando en ti y en esa sonrisa tan bonita que me encanta. ♡"
  },

  11: {
    src: "fotos/foto-3.jpg",
    caption: "Cuando llegaste a mi casa, compartimos tiempo juntos y cantamos. Me encanta recordar esos momentos a tu lado. ❤️"
  },

  15: {
    src: "fotos/foto-4.jpg",
    caption: "Otra fotografía que guarda un pedacito de nuestra historia. Gracias por cada momento y cada sonrisa que hemos compartido. ♡"
  },

  16: {
    src: "fotos/foto-8.jpg",
    caption: "¿Recuerdas este día? Fue nuestra 1ra cita yo iba nervioso pero tu ibas muy hermosa, ese 1er beso lo mejor y esta foto queda como recuerdo de nustro amor el inicio de una hermosa relación. ❤️"
  },

  19: {
    src: "fotos/foto-5.jpg",
    caption: "Nuestra primera cita, aquella película de terror y nuestro primer beso. Un recuerdo que siempre tendrá un lugar especial para mí. ❤️"
  }

};

// ==========================================
// CANCIONES
// ==========================================

const songDoors = {

  2: {
    title: "No Hay Nadie Más",
    artist: "Sebastián Yatra",
    url: "https://open.spotify.com/intl-es/track/0U8WdltGpu3OC0ma9yLmjX",
    caption: "Una canción que me recuerda lo especial que eres para mí. ♡"
  },

  5: {
    title: "Chachachá",
    artist: "Jósean Log",
    url: "https://open.spotify.com/intl-es/track/6aommJFM8i3iT4inKuDSXh",
    caption: "Porque hay canciones que tienen un encanto especial, igual que tú. ❤️"
  },

  9: {
    title: "Te Quiero Tanto",
    artist: "Kevin Kaarl",
    url: "https://open.spotify.com/intl-es/track/6pfKQaiWcelILwxkf6adUz",
    caption: "Una canción para recordarte cuánto cariño te tengo. ♡"
  },

  13: {
    title: "San Lucas",
    artist: "Kevin Kaarl",
    url: "https://open.spotify.com/intl-es/track/3aZxnqYFM8UI2jLgUD3B2a",
    caption: "De esas canciones que quisiera escuchar contigo una y otra vez. ❤️"
  },

  17: {
    title: "Pero Te Conocí",
    artist: "Reik",
    url: "https://open.spotify.com/intl-es/track/30brAfx64jxQMeUNUgDFaj",
    caption: "Y qué bonito que nuestros caminos se hayan encontrado. ♡"
  },

  21: {
    title: "M.A.I",
    artist: "Milo J",
    url: "https://open.spotify.com/intl-es/track/35ttE4t8lQZA2vuCYDg4G7",
    caption: "Una canción más que se suma a nuestra pequeña colección de recuerdos. ❤️"
  },

  22: {
    title: "A Dónde Vamos",
    artist: "Morat",
    url: "https://open.spotify.com/intl-es/track/0udtG5QhvvM9pvbiXIhKvT",
    caption: "Porque todavía nos quedan muchos momentos bonitos por vivir y muchos lugares por descubrir. ♡"
  }

};


// ==========================================
// FECHA DE GUATEMALA
// ==========================================

function getGuatemalaDate() {

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).formatToParts(new Date());

  const result = {};

  parts.forEach(part => {
    if (part.type !== "literal") {
      result[part.type] = Number(part.value);
    }
  });

  return {
    year: result.year,
    month: result.month,
    day: result.day
  };

}


// ==========================================
// COMPROBAR SI UNA PUERTA ESTÁ DESBLOQUEADA
// ==========================================

function isUnlocked(day) {

  if (MODO_PREVIEW) return true;

  const today = getGuatemalaDate();

  if (today.year !== YEAR) return false;

  if (today.month !== 12) return false;

  if (day === 25) {
    return today.day >= 25;
  }

  return today.day >= day;

}


// ==========================================
// MOSTRAR LAS PUERTAS
// ==========================================

function renderDoors() {

  if (!doorsContainer) {
    console.error("No se encontró el contenedor de puertas.");
    return;
  }

  doorsContainer.innerHTML = "";

  for (let day = 1; day <= 25; day++) {

    const unlocked = isUnlocked(day);
    const alreadyOpened = opened.includes(day);

    const door = document.createElement("button");

    door.type = "button";
    door.className = "door";

    if (!unlocked) {
      door.classList.add("locked");
    }

    if (alreadyOpened) {
      door.classList.add("opened");
    }

    door.disabled = !unlocked;

    door.setAttribute(
      "aria-label",
      unlocked
        ? `Abrir puerta ${day}`
        : `Puerta ${day} bloqueada`
    );

    door.innerHTML = `
      <span class="door-number">${day}</span>
      <span class="door-decoration">
        ${day === 25 ? "✦" : "♡"}
      </span>
    `;

    door.addEventListener("click", () => {
      openDoor(day);
    });

    doorsContainer.appendChild(door);

  }

}


// ==========================================
// ANIMACIÓN DE LAS PUERTAS
// ==========================================

function animateDoors() {

  const allDoors = doorsContainer.querySelectorAll(".door");

  allDoors.forEach((door, index) => {

    door.style.animationDelay = `${index * 0.04}s`;

    door.classList.add("show");

  });

}


// ==========================================
// ABRIR UNA PUERTA
// ==========================================

function openDoor(day) {

  if (!isUnlocked(day)) return;

  if (!opened.includes(day)) {

    opened.push(day);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(opened)
    );

  }

  content.innerHTML = "";


  // FOTOGRAFÍAS

  if (photoDoors[day]) {

    const photo = photoDoors[day];

    content.innerHTML = `
      <p class="eyebrow">UN RECUERDO ESPECIAL ♡</p>

      <h2>Para Marjorie</h2>

      <figure class="photo-card">

        <img
          src="${photo.src}"
          alt="Fotografía de un recuerdo especial"
        >

        <figcaption>${photo.caption}</figcaption>

      </figure>

      <p class="heart-mark">♡</p>
    `;

    const img = content.querySelector("img");

    img.addEventListener("click", () => {
      img.parentElement.classList.toggle("zoomed");
    });

    img.addEventListener("error", () => {

      img.alt = "No se pudo cargar esta fotografía";

      img.insertAdjacentText(
        "afterend",
        " Revisa el archivo de la carpeta fotos."
      );

    });


  // CANCIONES

  } else if (songDoors[day]) {

    const song = songDoors[day];

    content.innerHTML = `
      <p class="eyebrow">UNA CANCIÓN PARA TI ♡</p>

      <h2>${song.title}</h2>

      <p class="song-artist">${song.artist}</p>

      <div class="music-decoration">
        ♫ ♪ ♡ ♪ ♫
      </div>

      <p>${song.caption}</p>

      <a
        class="spotify-button"
        href="${song.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ♫ Escuchar en Spotify
      </a>

      <p class="heart-mark">♡</p>
    `;


  // PUERTA 24

  } else if (day === 24) {

    content.innerHTML = `
      <h2>¡Una sorpresa más! ✨</h2>

      <p>${messages[24]}</p>

      <p class="eyebrow">
        PUERTA 25 · NAVIDAD
      </p>
    `;


  // PUERTA 25

  } else if (day === 25) {

    content.innerHTML = `
      <p class="eyebrow">25 DE DICIEMBRE</p>

      <h2>¡Feliz Navidad, mi Marjorie! ♡</h2>

      <div class="letter-content">

        <h3>Para mi niña, mi Marjorie ❤️</h3>

        <p>Mi niña hermosa:</p>

        <p>
          ¡Feliz Navidad, mi amor! ❤️
        </p>

        <p>
          Si llegaste hasta aquí, significa que abriste la última puertita
          de este calendario que preparé para ti con muchísimo cariño.
          Y aunque durante estos 24 días te fui dejando canciones,
          fotografías, recuerdos y pequeñas palabras, quería reservar
          esta última puerta para decirte algo que no cabía en ninguna
          de las anteriores: todo lo que significas para mí.
        </p>

        <p>
          A veces me pongo a pensar en cómo comenzó nuestra historia
          y me da mucha ternura recordar que todo empezó por un termo.
          JAJAJA. Quién diría que algo tan sencillo terminaría
          convirtiéndose en una de las historias más bonitas de mi vida.
          Primero nos conocimos, después comenzamos a hablar, nos hicimos
          amigos y, sin darme cuenta, empezaste a convertirte en alguien
          demasiado especial para mí. Poco a poco aparecieron esos
          sentimientos que ya no podía esconder y que terminaron
          convirtiéndose en todo este amor que te tengo.
        </p>

        <p>
          Si pudiera volver a vivir algunos de nuestros momentos,
          definitivamente lo haría. Como aquel día de las madres,
          cuando me tocó actuar y estaba tan nervioso que ni siquiera
          quería salir. Pero tú estuviste ahí, apoyándome y dándome ánimos.
          Gracias a ti me atreví a hacerlo, y de ese día también guardamos
          nuestra primera fotografía. Tal vez para alguien más sea una
          foto cualquiera, pero para mí representa mucho más: uno de esos
          momentos en los que comenzamos a construir nuestros recuerdos.
        </p>

        <p>
          También recuerdo nuestra primera cita, cuando fuimos a ver
          aquella película de terror. JAJAJA, creo que terminé teniendo
          más miedo yo que la película. Recuerdo cómo te agarraba del brazo
          y cómo me hacías sentir tranquilo. Y claro, tampoco puedo olvidar
          nuestro primer beso. Es de esos recuerdos que se quedan guardados
          en un rinconcito muy especial del corazón.
        </p>

        <p>
          ¿Y qué decir de aquella salida al centro comercial por un helado?
          Puede parecer algo pequeño, pero son precisamente esas cosas
          las que hacen que te recuerde con tanta alegría. También recuerdo
          cuando llegaste a mi casa, cuando compartimos tiempo juntos,
          cantamos y disfrutamos de estar el uno con el otro.
          Son momentos sencillos que para mí valen muchísimo.
        </p>

        <p>
          Y cómo olvidar aquella aventura con tu hermanita, cuando los dos
          estábamos nerviosos y con un poquito de miedo por lo que estábamos
          haciendo. JAJAJA. Ahora lo recuerdo y me da mucha risa.
          Al final, hasta esos momentos inesperados terminaron formando
          parte de nuestra historia.
        </p>

        <p>
          Una de las cosas que más me gustan de nosotros es cantar juntos.
          Me encanta compartir canciones contigo, reírnos, molestarnos
          y disfrutar de esos momentos en los que no necesitamos hacer
          nada extraordinario para pasarla bien. A veces una canción
          puede transportarme directamente a ti, y entonces entiendo
          que hay recuerdos que se quedan viviendo en las cosas más pequeñas.
        </p>

        <p>
          Y bueno, tampoco podía dejar fuera nuestros momentos más privados
          y especiales. Esos que no necesitan demasiadas explicaciones,
          nuestras miradas cómplices, los abrazos que parecen durar poquito
          aunque uno quisiera que fueran eternos, los besitos que siempre
          dan ganas de repetir y esas pequeñas travesuras que solamente
          nosotros entendemos. Hay recuerdos que prefiero guardar entre
          nosotros, porque no queremos revelar todos nuestros secretos,
          ¿verdad? Jejeje. ❤️
        </p>

        <p>
          Mi amor, sé que nuestra historia no ha sido perfecta.
          Hemos tenido momentos difíciles, errores y situaciones que
          nos hicieron pensar mucho. No quiero hacer como si nada hubiera
          pasado ni olvidar lo que tuvimos que aprender. Al contrario,
          quiero que todo eso nos ayude a construir algo más bonito,
          con más confianza, comunicación, respeto y sinceridad.
        </p>

        <p>
          Por eso quiero agradecerte esta nueva oportunidad.
          No quiero que mis palabras se queden solamente en una carta bonita;
          quiero que puedas ver con el tiempo que mis acciones también hablan.
          Quiero cuidar lo que estamos construyendo, escucharte, respetarte,
          darte tu lugar y demostrarte que puedo aprender de mis errores.
          No espero que todo sea perfecto de un día para otro,
          pero sí quiero poner de mi parte cada día.
        </p>

        <p>
          Gracias por volver a compartir tu tiempo conmigo, por permitirme
          seguir creando recuerdos a tu lado y por dejarme formar parte
          de tu vida. Quiero seguir conociéndote, descubrir nuevas cosas
          de ti, acompañarte en tus días buenos y también en los complicados.
          Quiero que sigamos teniendo nuestras canciones, nuestras bromas,
          nuestras fotografías y esos momentos que algún día volveremos
          a recordar con una sonrisa.
        </p>

        <p>
          Y si algo deseo para esta Navidad, es que podamos seguir
          escribiendo nuestra historia, sin olvidar lo bonito que nos
          trajo hasta aquí y aprendiendo de todo lo que nos hizo crecer.
        </p>

        <p>
          Te amo muchísimo, mi niña. Más de lo que a veces consigo
          explicar con palabras. Gracias por ser tú, por cada sonrisa,
          cada abrazo, cada beso y cada recuerdo que hemos creado.
        </p>

        <p>
          <strong>
            Feliz Navidad, mi princesa. Que esta sea una de muchas Navidades
            en las que podamos mirar atrás y decir:
            «¿Te acuerdas de aquello? JAJAJA».
          </strong>
        </p>

        <p>
          Con muchísimo amor,
        </p>

        <p>
          <strong>
            Tu niño, que te ama y que quiere seguir eligiéndote cada día. ❤️
          </strong>
        </p>

        <p>
          Postata: Espero que te haya gustado este calendario.
          Y recuerda que todavía nos quedan muchísimas canciones por cantar,
          fotografías por tomar, helados por compartir y besitos pendientes y sobre todo
          momentos que nos harán sonreír, llorar, enojarnos y los todos los años que nos esperan.
          Jejeje. Te amo, mi niña.
        </p>

      </div>

      <div class="snow-message">
        ✦ ❄ ✧ ❄ ✦
      </div>
    `;


  // MENSAJES GENERALES

  } else {

    content.innerHTML = `
      <p class="eyebrow">UN DETALLE PARA TI ♡</p>

      <h2>Una sorpresa para ti</h2>

      <p>
        ${messages[day] ||
        "Hoy te espera una pequeña sorpresa preparada con cariño."}
      </p>

      <p class="heart-mark">♡</p>
    `;

  }

  dialog.showModal();

  renderDoors();

}


// ==========================================
// ABRIR LA PORTADA
// ==========================================

openGift.addEventListener("click", () => {

  welcome.classList.add("hidden");

  calendar.classList.remove("hidden");

  renderDoors();

  animateDoors();

});


// ==========================================
// CERRAR LAS VENTANAS
// ==========================================

closeDialog.addEventListener("click", () => {

  dialog.close();

});

dialog.addEventListener("click", event => {

  if (event.target === dialog) {
    dialog.close();
  }

});


// ==========================================
// MÚSICA DE FONDO
// ==========================================

music.volume = 0.35;

musicToggle.addEventListener("click", async () => {

  if (music.paused) {

    try {

      await music.play();

      musicToggle.textContent = "♫ Música: encendida";

      musicToggle.setAttribute("aria-pressed", "true");

    } catch (error) {

      musicToggle.textContent = "No se pudo reproducir";

      console.error(
        "Error al reproducir la música:",
        error
      );

    }

  } else {

    music.pause();

    musicToggle.textContent = "♫ Música: pausada";

    musicToggle.setAttribute("aria-pressed", "false");

  }

});


// ==========================================
// INICIAR EL CALENDARIO
// ==========================================

renderDoors();


// ==========================================
// EFECTO DE NIEVE NAVIDEÑA
// ==========================================

function createSnow() {

  if (document.querySelector("#snow-layer")) return;

  const snowLayer = document.createElement("div");

  snowLayer.id = "snow-layer";

  snowLayer.setAttribute("aria-hidden", "true");

  document.body.appendChild(snowLayer);

  const snowCount = 40;

  for (let i = 0; i < snowCount; i++) {

    const snowflake = document.createElement("span");

    snowflake.className = "snowflake";

    snowflake.textContent = "❄";

    snowflake.style.setProperty(
      "--left",
      Math.random() * 100 + "vw"
    );

    snowflake.style.setProperty(
      "--size",
      (8 + Math.random() * 13) + "px"
    );

    snowflake.style.setProperty(
      "--duration",
      (9 + Math.random() * 12) + "s"
    );

    snowflake.style.setProperty(
      "--delay",
      (-Math.random() * 20) + "s"
    );

    snowflake.style.setProperty(
      "--drift",
      (-60 + Math.random() * 120) + "px"
    );

    snowLayer.appendChild(snowflake);

  }

}

createSnow();
