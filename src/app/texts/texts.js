const title = "Nails by Nicole Guzman";
const email = "Nstefany2301@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los servicios de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = ""; // No se proporcionó número

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Nails by Nicole Guzman, te ofrecemos servicios profesionales en el cuidado estético de las uñas para que luzcan siempre perfectas. Nuestro objetivo es brindarte una experiencia de cuidado personal que resalte tu belleza y te haga sentir especial.",
        description2: "Utilizamos productos de alta calidad y técnicas avanzadas para garantizar un acabado impecable. Cada detalle está cuidadosamente pensado para ofrecerte un servicio que no solo embellezca tus uñas, sino que también te proporcione un momento de relajación y bienestar. Déjate consentir y disfruta de un servicio que hará que tus uñas brillen tanto como tú. ¡Visítanos y experimenta la diferencia con Nails by Nicole Guzman!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Deja que tus uñas brillen tanto como tú.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61564897329273", // Enlace a Facebook proporcionado
        instagram: "https://www.instagram.com/nails_by_nicoleg?igsh=aHhlcGc4ZDc2bW1m", // Enlace a Instagram proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
