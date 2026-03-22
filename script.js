const estaciones = [
    // PORTALES
    { nombre: "Portal Norte", lat: 4.7561, lng: -74.0455 },
    { nombre: "Portal Sur", lat: 4.5972, lng: -74.1463 },
    { nombre: "Portal 80", lat: 4.7197, lng: -74.1014 },
    { nombre: "Portal Américas", lat: 4.6280, lng: -74.1795 },
    { nombre: "Portal Eldorado", lat: 4.6983, lng: -74.1163 },
    { nombre: "Portal Usme", lat: 4.5380, lng: -74.1100 },
    { nombre: "Portal Suba", lat: 4.7411, lng: -74.0838 },
    { nombre: "Portal Tunal", lat: 4.5683, lng: -74.1297 },
    { nombre: "Toberin", lat: 4.7392, lng: -74.0560 },
    { nombre: "Cardio Infantil", lat: 4.7302, lng: -74.0500 },
    { nombre: "Alcalá", lat: 4.7215, lng: -74.0493 },
    { nombre: "Mazurén", lat: 4.7137, lng: -74.0486 },
    { nombre: "Calle 100", lat: 4.6867, lng: -74.0497 },
    { nombre: "Héroes", lat: 4.6767, lng: -74.0497 },
    { nombre: "Calle 72", lat: 4.6671, lng: -74.0538 },
    { nombre: "Flores", lat: 4.6630, lng: -74.0530 },
    { nombre: "Calle 63", lat: 4.6585, lng: -74.0551 },
    { nombre: "Calle 57", lat: 4.6519, lng: -74.0551 },
    { nombre: "Calle 45", lat: 4.6478, lng: -74.0558 },
    { nombre: "Marly", lat: 4.6433, lng: -74.0601 },
    { nombre: "Calle 34", lat: 4.6371, lng: -74.0651 },
    { nombre: "Universidades", lat: 4.6317, lng: -74.0651 },
    { nombre: "Calle 26", lat: 4.6341, lng: -74.0891 },
    { nombre: "Bicentenario", lat: 4.6050, lng: -74.0750 },
    { nombre: "Las Aguas", lat: 4.6013, lng: -74.0683 },
    { nombre: "Museo del Oro", lat: 4.6017, lng: -74.0717 },
    { nombre: "Av. Jiménez", lat: 4.5983, lng: -74.0763 },
    { nombre: "Santa Isabel", lat: 4.5883, lng: -74.0997 },
    { nombre: "Restrepo", lat: 4.5797, lng: -74.1063 },
    { nombre: "Albán", lat: 4.5697, lng: -74.1097 },
    { nombre: "Quiroga", lat: 4.5597, lng: -74.1197 },
    { nombre: "Olaya", lat: 4.5697, lng: -74.1097 },
    { nombre: "Venecia", lat: 4.5897, lng: -74.1197 },
    { nombre: "Calle 40 Sur", lat: 4.5785, lng: -74.1150 },
    { nombre: "Comuneros", lat: 4.5583, lng: -74.1097 },
    { nombre: "Transversal 86", lat: 4.6897, lng: -74.1097 },
    { nombre: "Quirigua", lat: 4.7097, lng: -74.1097 },
    { nombre: "Bolivia", lat: 4.6997, lng: -74.1097 },
    { nombre: "Granja", lat: 4.6897, lng: -74.1097 },
    { nombre: "Minuto de Dios", lat: 4.6797, lng: -74.1030 },
    { nombre: "Shaio", lat: 4.7197, lng: -74.0631 },
    { nombre: "Contador", lat: 4.7297, lng: -74.0531 },
    { nombre: "Pepe Sierra", lat: 4.7097, lng: -74.0497 },
    { nombre: "NQS Calle 75", lat: 4.6697, lng: -74.0831 },
    { nombre: "NQS Calle 57", lat: 4.6519, lng: -74.0831 },
    { nombre: "NQS Calle 45", lat: 4.6419, lng: -74.0931 },
    { nombre: "NQS CAN", lat: 4.6597, lng: -74.0897 },
    { nombre: "NQS Calle 30 Sur", lat: 4.5597, lng: -74.0997 },
    { nombre: "NQS Calle 38 Sur", lat: 4.5697, lng: -74.0997 },
    { nombre: "Banderas", lat: 4.6278, lng: -74.1462 },
    { nombre: "General Santander", lat: 4.6197, lng: -74.1362 },
    { nombre: "Patio Bonito", lat: 4.6297, lng: -74.1597 },
    { nombre: "Tintal", lat: 4.6497, lng: -74.1497 },
    { nombre: "Biblioteca Tintal", lat: 4.6397, lng: -74.1497 },
    { nombre: "Alquería", lat: 4.6097, lng: -74.1297 },
    { nombre: "Sevillana", lat: 4.6197, lng: -74.1497 },
    { nombre: "Gran Britalia", lat: 4.5897, lng: -74.1297 },
    { nombre: "Gratamira", lat: 4.7311, lng: -74.0838 },
    { nombre: "Niza Calle 127", lat: 4.7211, lng: -74.0738 },
    { nombre: "Calle 106", lat: 4.7011, lng: -74.0638 },
    { nombre: "Escuela Militar", lat: 4.6911, lng: -74.0538 },
    { nombre: "El Tiempo", lat: 4.6441, lng: -74.0891 },
    { nombre: "CAN", lat: 4.6597, lng: -74.0897 },
    { nombre: "Quinta Paredes", lat: 4.6497, lng: -74.0897 },
    { nombre: "La Despensa", lat: 4.6383, lng: -74.1163 },
    { nombre: "Normandía", lat: 4.6583, lng: -74.1063 },
    { nombre: "Av. Rojas", lat: 4.6683, lng: -74.1163 },
    { nombre: "Ferias", lat: 4.6783, lng: -74.1063 },
    { nombre: "Molinos", lat: 4.5380, lng: -74.1100 },
    { nombre: "Granjas de Techo", lat: 4.6297, lng: -74.1363 },
    { nombre: "Ricaurte", lat: 4.6097, lng: -74.0862 },
    { nombre: "La Sabana", lat: 4.6117, lng: -74.0833 },
    { nombre: "Paloquemao", lat: 4.6133, lng: -74.0883 },
];
const rutasPorEstacion = {
    "Portal Norte": { buses: ["B74", "C43", "J22", "K11", "T14"] },
    "Portal Sur": { buses: ["D40", "D41", "G21", "H20"] },
    "Portal 80": { buses: ["G11", "G12", "C43", "B74"] },
    "Portal Américas": { buses: ["D40", "D41", "F28"] },
    "Portal Eldorado": { buses: ["L21", "L22", "C43"] },
    "Portal Usme": { buses: ["P2", "P7", "Z2"] },
    "Portal Suba": { buses: ["J12", "J22", "A34"] },
    "Portal Tunal": { buses: ["D40", "P7", "Z2"] },
    "Toberin": { buses: ["B74", "K11", "T14"] },
    "Cardio Infantil": { buses: ["B74", "C43", "K11"] },
    "Alcalá": { buses: ["B74", "C43"] },
    "Mazurén": { buses: ["B74", "J22"] },
    "Calle 100": { buses: ["B74", "C43", "J22", "K11"] },
    "Héroes": { buses: ["B74", "C43", "K11"] },
    "Calle 72": { buses: ["B74", "C43", "J22", "K11", "H20"] },
    "Flores": { buses: ["B74", "C43"] },
    "Calle 63": { buses: ["B74", "J22", "K11"] },
    "Calle 57": { buses: ["B74", "C43", "H20"] },
    "Calle 45": { buses: ["B74", "C43", "J22"] },
    "Marly": { buses: ["B74", "K11"] },
    "Calle 34": { buses: ["B74", "C43"] },
    "Universidades": { buses: ["B74", "C43", "J22", "K11"] },
    "Calle 26": { buses: ["B74", "C43", "L21"] },
    "Bicentenario": { buses: ["B74", "C43"] },
    "Las Aguas": { buses: ["B74", "J22"] },
    "Museo del Oro": { buses: ["B74", "C43", "K11"] },
    "Av. Jiménez": { buses: ["B74", "C43", "J22", "K11", "H20"] },
    "Santa Isabel": { buses: ["D40", "H20", "P7"] },
    "Restrepo": { buses: ["D40", "D41", "H20"] },
    "Albán": { buses: ["D40", "P7"] },
    "Quiroga": { buses: ["D40", "D41", "Z2"] },
    "Olaya": { buses: ["D40", "H20"] },
    "Venecia": { buses: ["D40", "D41", "P7"] },
    "Calle 40 Sur": { buses: ["D40", "Z2"] },
    "Comuneros": { buses: ["D40", "P7", "Z2"] },
    "Transversal 86": { buses: ["G11", "G12", "C43"] },
    "Quirigua": { buses: ["G11", "G12"] },
    "Bolivia": { buses: ["G11", "C43"] },
    "Granja": { buses: ["G11", "G12"] },
    "Minuto de Dios": { buses: ["G11", "G12", "C43"] },
    "Shaio": { buses: ["G11", "B74"] },
    "Contador": { buses: ["G11", "G12"] },
    "Pepe Sierra": { buses: ["G11", "B74", "C43"] },
    "NQS Calle 75": { buses: ["H20", "H21", "K12"] },
    "NQS Calle 57": { buses: ["H20", "H21"] },
    "NQS Calle 45": { buses: ["H20", "K12"] },
    "NQS CAN": { buses: ["H20", "H21", "K12"] },
    "NQS Calle 30 Sur": { buses: ["H20", "H21"] },
    "NQS Calle 38 Sur": { buses: ["H20", "K12"] },
    "Banderas": { buses: ["D40", "D41", "F28"] },
    "General Santander": { buses: ["D40", "F28"] },
    "Patio Bonito": { buses: ["D40", "D41"] },
    "Tintal": { buses: ["D40", "F28"] },
    "Biblioteca Tintal": { buses: ["D40", "D41", "F28"] },
    "Alquería": { buses: ["D40", "F28"] },
    "Sevillana": { buses: ["D40", "D41"] },
    "Gran Britalia": { buses: ["D40", "F28"] },
    "Gratamira": { buses: ["J12", "J22"] },
    "Niza Calle 127": { buses: ["J12", "J22", "A34"] },
    "Calle 106": { buses: ["J12", "J22"] },
    "Escuela Militar": { buses: ["J12", "A34"] },
    "El Tiempo": { buses: ["L21", "L22"] },
    "CAN": { buses: ["L21", "L22", "C43"] },
    "Quinta Paredes": { buses: ["L21", "C43"] },
    "La Despensa": { buses: ["L21", "L22"] },
    "Normandía": { buses: ["L21", "G11"] },
    "Av. Rojas": { buses: ["L21", "L22", "G11"] },
    "Ferias": { buses: ["L21", "G11"] },
    "Molinos": { buses: ["P2", "P7"] },
    "Granjas de Techo": { buses: ["D40", "F28"] },
    "Ricaurte": { buses: ["B74", "C43", "H20", "L21"] },
    "La Sabana": { buses: ["B74", "L21"] },
    "Paloquemao": { buses: ["B74", "C43", "H20"] },
};
const mapaContenedor = document.querySelector(".mapa");
const bogota = { lat: 4.7110, lng: -74.0721 };
const buscador = document.querySelector(".buscador");
const lupa = document.querySelector(".logo");
const formContenedor = document.querySelector("#formContenedor");
let mapa = null;
let informacion = null;
const cerrar = document.querySelector(".cerrar");
const flashCard = document.querySelector(".flashCard");
const scrollOpciones = document.querySelector(".rutasDisponibles");
const nombreEstacion = document.querySelector(".nombreEstacion");
let iconoRojo = null;
let marcadorActivo = null;
function iniciarMapa() {
    mapa = new google.maps.Map(mapaContenedor, {
        zoom: 12,
        center: bogota,
    });
    iconoRojo = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "red",
        fillOpacity: 1,
        strokeColor: "white",
        strokeWeight: 3,
    }
    informacion = new google.maps.InfoWindow();
    estaciones.forEach((estacion) => {
        estacion.marcador = new google.maps.Marker({
            position: { lat: estacion.lat, lng: estacion.lng },
            map: mapa,
            title: estacion.nombre,
            visible: true,
            icon: iconoRojo,
        });
        let div = document.createElement("div");
        div.classList.add("infoWindow");
        div.innerHTML = estacion.nombre;
        let busIcono = document.createElement("div");
        busIcono.classList.add("busIcono");
        div.appendChild(busIcono);
        estacion.marcador.addListener("click", () => {
            cambiarMarcador(estacion);
            mostrarBuses(estacion);
            informacion.setContent(div);
            informacion.open(mapa, estacion.marcador);
        });
    });
}
buscador.addEventListener("input", () => {
    let texto = buscador.value.toLowerCase();
    texto = texto.trim();
    if (texto !== "") {
        const menu = menuCreacion();
        estaciones.forEach((estacion) => {
            estacion.marcador.setVisible(false);
            const estacionMinuscula = estacion.nombre.toLowerCase();
            if (estacionMinuscula.includes(texto)) {
                estacion.marcador.setVisible(true);
                estacionesLoop(menu, estacion);
            }
        });
        formContenedor.appendChild(menu)
    }
});
lupa.addEventListener("click", () => {
    buscador.focus();
    if (buscador.value.trim() === "") {
        const menu = menuCreacion();
        estaciones.forEach((estacion) => {
            estacionesLoop(menu, estacion);
        });
        formContenedor.appendChild(menu)
    }
})
function menuCreacion() {
    const menuViejo = document.querySelector(".menu");
    if (menuViejo) {
        menuViejo.remove();
    }
    const menu = document.createElement("div");
    menu.classList.add("menu");
    return menu
}
function estacionesLoop(menu, estacion) {
    const item = document.createElement("div");
    item.classList.add("itemMenu");
    item.innerHTML = estacion.nombre;
    item.addEventListener("click", () => {
        cambiarMarcador(estacion);
        buscador.value = "";
        menuCreacion();
        mapa.panTo(estacion.marcador.getPosition());
        mapa.setZoom(17);
        mostrarBuses(estacion);
        estaciones.forEach((estacion) => {
            estacion.marcador.setVisible(true);
        });
    })
    menu.appendChild(item);
    const ubi = document.createElement("div");
    ubi.classList.add("ubi");
    item.appendChild(ubi);
}
function frecuencia() {
    //se maneja por horas pico y depende de la hora del dispositivo
    let tiempo = new Date().getHours();
    let trafico = 20
    if (tiempo >= 6 && tiempo <= 9) {
        //mañana pico(trabajo/universidad)
        trafico = 3;
    }
    if (tiempo >= 17 && tiempo <= 20) {
        //tarde pico(todo el mundo vuelve a casa)
        trafico = 4;
    }
    if (tiempo >= 10 && tiempo <= 16) {
        //hora regular(menos gente solicita los servicios)
        trafico = 7;
    }
    if (tiempo >= 21 && tiempo <= 23) {
        //noche(poca demanda)
        trafico = 12
    }
    //madrugada
    return trafico
}
function tiempoFaltante() {
    let frec = frecuencia();
    let tiempoActual = new Date();
    let segundos = tiempoActual.getSeconds() + (tiempoActual.getMinutes() * 60);
    frec = frec * 60;
    let tiempoFaltante = frec - (segundos % frec);
    let minutos = Math.floor(tiempoFaltante / 60)
    return { minutos, frec }
}
cerrar.addEventListener("click", () => {
    flashCard.style.display = "none";
})
function crearItemFlashCard(nombreBus, minutos) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("itemFlashCard");
    scrollOpciones.appendChild(itemCard);
    const nameCard = document.createElement("div");
    nameCard.classList.add("nameCard");
    itemCard.appendChild(nameCard);
    const tiempoCard = document.createElement("div");
    tiempoCard.classList.add("tiempoCard");
    itemCard.appendChild(tiempoCard);
    const reloj = document.createElement("div");
    reloj.classList.add("reloj");
    tiempoCard.appendChild(reloj);
    const relojIcono = document.createElement("div");
    relojIcono.classList.add("relojIcono");
    reloj.appendChild(relojIcono);
    const tiempoMinutos = document.createElement("div");
    reloj.appendChild(tiempoMinutos);
    tiempoMinutos.innerHTML = minutos + "min"
    if (minutos == 0) {
        tiempoMinutos.innerHTML = "Llegando🤗​"
    }
    nameCard.innerHTML = nombreBus;
}
function mostrarBuses(estacion) {
    const info = rutasPorEstacion[estacion.nombre];
    const tiempoActual = tiempoFaltante();
    scrollOpciones.innerHTML = "";
    nombreEstacion.innerHTML = estacion.nombre;
    flashCard.style.display = "block";
    if (info) {
        info.buses.forEach((bus) => {
            crearItemFlashCard(bus, tiempoActual.minutos);
        })
    }
}
function cambiarMarcador(estacion) {
    if (marcadorActivo) {
        marcadorActivo.setIcon(iconoRojo)
    }
    estacion.marcador.setIcon(null)
    marcadorActivo = estacion.marcador
}