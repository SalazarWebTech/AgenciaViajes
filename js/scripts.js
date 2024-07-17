document.addEventListener('DOMContentLoaded', function() {
    const paquetes = [
        {
            titulo: 'Aventura en los Alpes',
            destino: 'Europa',
            duracion: '7 días',
            precio: '$1200',
            incluye: 'Alojamiento, Desayuno, Tours Guiados, Equipos de Aventura',
            imagen: 'https://via.placeholder.com/300x200',
        },
        {
            titulo: 'Relax en el Caribe',
            destino: 'América',
            duracion: '5 días',
            precio: '$950',
            incluye: 'Alojamiento, Todas las comidas, Deportes Acuáticos, Excursiones',
            imagen: 'https://via.placeholder.com/300x200',
        },
        {
            titulo: 'Descubre Japón',
            destino: 'Asia',
            duracion: '10 días',
            precio: '$2000',
            incluye: 'Alojamiento, Desayuno, Tours Guiados, Transporte',
            imagen: 'https://via.placeholder.com/300x200',
        },
        {
            titulo: 'Safari en Kenia',
            destino: 'África',
            duracion: '7 días',
            precio: '$1500',
            incluye: 'Alojamiento, Comidas, Safaris, Transporte',
            imagen: 'https://via.placeholder.com/300x200',
        },
        {
            titulo: 'Tour por Australia',
            destino: 'Oceanía',
            duracion: '14 días',
            precio: '$2500',
            incluye: 'Alojamiento, Desayuno, Tours Guiados, Transporte',
            imagen: 'https://via.placeholder.com/300x200',
        }
    ];

    const listaPaquetes = document.getElementById('lista-paquetes');
    const modal = document.getElementById('modal-paquete');
    const closeModal = document.getElementsByClassName('close')[0];
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDestino = document.getElementById('modal-destino');
    const modalDuracion = document.getElementById('modal-duracion');
    const modalPrecio = document.getElementById('modal-precio');
    const modalIncluye = document.getElementById('modal-incluye');

    paquetes.forEach(paquete => {
        const paqueteDiv = document.createElement('div');
        paqueteDiv.classList.add('paquete');
        paqueteDiv.innerHTML = `
            <img src="${paquete.imagen}" alt="${paquete.titulo}">
            <h3>${paquete.titulo}</h3>
            <p>Destino: ${paquete.destino}</p>
            <p>Duración: ${paquete.duracion}</p>
            <p>Precio: ${paquete.precio}</p>
            <button>Más Información</button>
        `;
        paqueteDiv.querySelector('button').addEventListener('click', () => {
            modalTitulo.textContent = paquete.titulo;
            modalDestino.textContent = `Destino: ${paquete.destino}`;
            modalDuracion.textContent = `Duración: ${paquete.duracion}`;
            modalPrecio.textContent = `Precio: ${paquete.precio}`;
            modalIncluye.textContent = `Incluye: ${paquete.incluye}`;
            modal.style.display = 'block';
        });
        listaPaquetes.appendChild(paqueteDiv);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
