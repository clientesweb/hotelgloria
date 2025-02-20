document.addEventListener('DOMContentLoaded', function() {
    // Navegación responsive
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Slider del hero
    const heroSection = document.getElementById('hero');
    const heroImages = [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-hotel-gloria-1.jpg-bPZtUrodOhvFJv3kJZP96x5MYUiFI6.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-hotel-gloria-2.jpg-HvbQVZoGS2OLxpU0xiX8SpH1zEo5d7.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-hotel-gloria-3.jpg-863TgS7vrAPdQfGccw6bVrJAbkjkxE.jpeg'
    ];
    let currentHeroImage = 0;

    function changeHeroImage() {
        heroSection.style.backgroundImage = `url(${heroImages[currentHeroImage]})`;
        currentHeroImage = (currentHeroImage + 1) % heroImages.length;
    }

    setInterval(changeHeroImage, 5000);

    // Formulario de reserva
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(bookingForm);
        const message = `
            Nueva reserva:
            Habitación: ${formData.get('room-type')}
            Check-in: ${formData.get('check-in')}
            Check-out: ${formData.get('check-out')}
            Huéspedes: ${formData.get('guests')}
            Nombre: ${formData.get('name')}
            Email: ${formData.get('email')}
            Teléfono: ${formData.get('phone')}
        `;
        const whatsappNumber = "5493546545435";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Cargar habitaciones dinámicamente
    const roomsGrid = document.querySelector('.rooms-grid');
    const rooms = [
        {
            title: "Habitación Individual",
            description: "Perfecta para viajeros solitarios, nuestras habitaciones individuales ofrecen todo lo necesario para una estadía confortable, con una cama individual y todas las comodidades esenciales.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-individual.jpg-IoCF4YIuU3y2tkswO7dGn6rWGn5DAi.jpeg",
            price: "$15.000",
            capacity: "1 persona",
            features: ["Aire Acondicionado", "Baño Privado", "DirecTV", "WiFi", "Ropa de Cama", "Servicio Diario"]
        },
        {
            title: "Habitación Doble",
            description: "Ideal para parejas o viajeros que buscan más espacio, cuenta con una cama matrimonial o dos camas individuales, aire acondicionado frío-calor, DirecTV y baño privado.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-dobles.jpg-LRhF4sdi6qP3OKorjWTOJAOESEc5Fb.jpeg",
            price: "$20.000",
            capacity: "2 personas",
            features: ["Aire Acondicionado", "Baño Privado", "DirecTV", "WiFi", "Ropa de Cama", "Servicio Diario"]
        },
        {
            title: "Habitación Triple",
            description: "Espaciosa habitación con una cama matrimonial y una individual, perfecta para familias pequeñas o grupos de amigos, con todas las comodidades necesarias.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-triples.jpg-gkSY9wV3KixtbvdZIJNHilvssGXFGs.jpeg",
            price: "$25.000",
            capacity: "3 personas",
            features: ["Aire Acondicionado", "Baño Privado", "DirecTV", "WiFi", "Ropa de Cama", "Servicio Diario"]
        },
        {
            title: "Habitación Cuádruple",
            description: "Amplia habitación familiar con dos camas individuales, ideal para familias o grupos, con espacio adicional para mayor comodidad y vista al jardín.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-cuadruples.jpg-31edth0goGUgFNVZF0YUJuECI5l9vG.jpeg",
            price: "$30.000",
            capacity: "4 personas",
            features: ["Aire Acondicionado", "Baño Privado", "DirecTV", "WiFi", "Ropa de Cama", "Servicio Diario"]
        },
        {
            title: "Habitación Quíntuple",
            description: "Nuestra habitación más espaciosa, perfecta para grupos grandes o familias numerosas, con múltiples camas y amplio espacio para garantizar una estadía cómoda.",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habitacion-quintuples.jpg-HfLPNYZ9Ev8DFH8SwXkIrcC23oagxD.jpeg",
            price: "$35.000",
            capacity: "5 personas",
            features: ["Aire Acondicionado", "Baño Privado", "DirecTV", "WiFi", "Ropa de Cama", "Servicio Diario"]
        }
    ];

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <img src="${room.image}" alt="${room.title}" class="room-image">
            <div class="room-details">
                <h3 class="room-title">${room.title}</h3>
                <p class="room-price">Desde ${room.price} por noche</p>
                <p>${room.description}</p>
                <div class="room-features">
                    ${room.features.map(feature => `<span class="room-feature">${feature}</span>`).join('')}
                </div>
                <p>Capacidad máxima: ${room.capacity}</p>
                <button class="cta-button">Reservar Ahora</button>
            </div>
        `;
        roomsGrid.appendChild(roomCard);
    });

    // Cargar instalaciones dinámicamente
    const amenitiesGrid = document.querySelector('.amenities-grid');
    const amenities = [
        { icon: "🏊", title: "Pileta climatizada", description: "Descubierta, disponible del 21 de septiembre hasta abril" },
        { icon: "☕", title: "Desayuno incluido", description: "Completo desayuno continental todas las mañanas" },
        { icon: "📍", title: "Excelente ubicación", description: "A una cuadra del río y a dos del centro" },
        { icon: "🚗", title: "Cocheras cubiertas", description: "Estacionamiento techado para huéspedes" },
        { icon: "🌳", title: "Amplio parque", description: "1000 m² de espacios verdes para disfrutar" },
        { icon: "🎮", title: "Área de juegos", description: "Juegos para los más pequeños" },
        { icon: "❄️", title: "Climatización completa", description: "Aire acondicionado frío/calor y calefacción central" },
        { icon: "🍽️", title: "Comodidades en habitación", description: "Vajilla, microondas y heladera" },
        { icon: "📺", title: "Entretenimiento", description: "DirecTV en habitaciones y codificado en el comedor" },
        { icon: "🔥", title: "Asador", description: "Área de parrilla para uso de huéspedes" },
        { icon: "🚑", title: "Servicio de emergencia", description: "Asistencia médica las 24 horas" },
        { icon: "🎥", title: "Seguridad", description: "Vigilancia por CCTV las 24 horas" }
    ];

    amenities.forEach(amenity => {
        const amenityCard = document.createElement('div');
        amenityCard.className = 'amenity-card';
        amenityCard.innerHTML = `
            <div class="amenity-icon">${amenity.icon}</div>
            <h3>${amenity.title}</h3>
            <p>${amenity.description}</p>
        `;
        amenitiesGrid.appendChild(amenityCard);
    });

    // Cargar galería dinámicamente
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryImages = [
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-sala.jpg-u1RS87khEfgduWzjyX3M4lwZgkCUcX.jpeg", alt: "Sala de estar con vista al jardín" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-pileta.jpg-IeZn7Fbh5BUkVyGRZlTh22bzeHg5Bk.jpeg", alt: "Piscina iluminada por la noche" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-parque.jpg-i9zcXrKadnmzWBwKGjZ1Ph1HtnVmoj.jpeg", alt: "Parque con gazebos" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-recepcion.jpg-JgrdIPUipx6TDQx8b8abCi8LxA6bWy.jpeg", alt: "Recepción del hotel" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-pileta-2.jpg-2dQNVtHOBvUzgJcU11mHgrX7YalkCb.jpeg", alt: "Vista de la piscina a través de la vegetación" },
        { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel-gloria-noche.jpg-s6TmXMmqyLKO6jg4c2GAfUe265nHZO.jpeg", alt: "Vista nocturna del Hotel Gloria" }
    ];

    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        galleryGrid.appendChild(galleryItem);
    });

    // Cargar reseñas dinámicamente
    const reviewsGrid = document.querySelector('.reviews-grid');
    const reviews = [
        { name: "María González", rating: 5, comment: "Excelente atención, las instalaciones impecables y el desayuno delicioso. La pileta climatizada es perfecta y la ubicación inmejorable, a una cuadra del río. El personal muy amable y atento a todos los detalles.", date: "hace 2 semanas" },
        { name: "Carlos Rodríguez", rating: 5, comment: "Un lugar hermoso para descansar. La pileta climatizada es un plus y el personal muy amable. Las habitaciones son amplias y cómodas, con aire acondicionado que funciona perfectamente. El desayuno variado y abundante.", date: "hace 1 mes" },
        { name: "Laura Martínez", rating: 4, comment: "Nos encantó la ubicación y la tranquilidad del lugar. Las habitaciones muy cómodas y limpias. El parque está muy bien cuidado y es perfecto para relajarse. El único detalle es que el wifi era un poco lento en algunas zonas.", date: "hace 2 meses" },
        { name: "Juan Pablo Sánchez", rating: 5, comment: "Increíble estadía. El hotel tiene todo lo necesario para unas vacaciones perfectas. El personal siempre dispuesto a ayudar, las instalaciones muy bien mantenidas y el desayuno exquisito. Volveremos sin dudas.", date: "hace 3 meses" }
    ];

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <h3 class="reviewer-name">${review.name}</h3>
            <p class="review-date">${review.date}</p>
            <div class="stars">
                ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
            </div>
            <p>${review.comment}</p>
        `;
        reviewsGrid.appendChild(reviewCard);
    });

    // Cargar preguntas frecuentes dinámicamente
    const faqAccordion = document.querySelector('.faq-accordion');
    const faqs = [
        { question: "¿Cuál es el horario de check-in y check-out?", answer: "El check-in es a partir de las 14:00 hs y el check-out hasta las 10:00 hs. Consultar por late check-out según disponibilidad." },
        { question: "¿Se aceptan mascotas?", answer: "Por el momento no aceptamos mascotas en nuestras instalaciones." },
        { question: "¿El desayuno está incluido?", answer: "Sí, todas nuestras tarifas incluyen desayuno continental completo." },
        { question: "¿Hay estacionamiento disponible?", answer: "Sí, contamos con cocheras cubiertas sin cargo adicional para nuestros huéspedes." },
        { question: "¿La pileta está climatizada todo el año?", answer: "La pileta está disponible y climatizada desde el 21 de septiembre hasta abril." }
    ];

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question" onclick="toggleFaq(${index})">
                ${faq.question}
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">${faq.answer}</div>
        `;
        faqAccordion.appendChild(faqItem);
    });

    // Función para toggle de FAQs
    window.toggleFaq = function(index) {
        const faqItems = document.querySelectorAll('.faq-item');
        const faqAnswer = faqItems[index].querySelector('.faq-answer');
        const faqToggle = faqItems[index].querySelector('.faq-toggle');
        
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            faqToggle.textContent = '+';
        } else {
            faqAnswer.style.display = 'block';
            faqToggle.textContent = '-';
        }
    };

    // Botón de WhatsApp
    const whatsappButton = document.getElementById('whatsapp-button');
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        const phoneNumber = "5493546545435";
        const message = "Hola! Me gustaría hacer una consulta sobre el hotel.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
