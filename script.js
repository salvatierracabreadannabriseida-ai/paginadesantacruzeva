document.addEventListener('DOMContentLoaded', () => {
  // 1. Navegación activa al hacer clic
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // 2. Línea de tiempo interactiva en Reseña Histórica
  const timelineData = {
    "1561": {
      title: "1561 - Fundación Original",
      text: "Ñuflo de Chaves funda Santa Cruz de la Sierra el 26 de febrero de 1561 a orillas del arroyo Sutós, en la serranía de Chiquitos."
    },
    "1810": {
      title: "1810 - Grito Libertario",
      text: "El 24 de septiembre de 1810 se proclama la revolución emancipadora en Santa Cruz, liderada por patriotas cruceños."
    },
    "1864": {
      title: "1864 - Creación de la Bandera Cruceña",
      text: "El Prefecto Tristán Roca instituye oficialmente la bandera verde, blanco y verde como emblema del departamento."
    },
    "hoy": {
      title: "Actualidad - Motor Económico",
      text: "Hoy es la ciudad más poblada y el principal motor productivo, agroindustrial y comercial de Bolivia."
    }
  };

  const tabBtns = document.querySelectorAll('.tab-btn');
  const timelinePanel = document.getElementById('timelinePanel');

  tabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      tabBtns.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const year = tab.getAttribute('data-year');
      const info = timelineData[year];
      timelinePanel.innerHTML = `<h4>${info.title}</h4><p>${info.text}</p>`;
    });
  });

  // 3. Tarjetas interactivas de Reseña Típicas
  const cardToggles = document.querySelectorAll('.btn-card-toggle');
  cardToggles.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.tipica-card');
      const extraBox = card.querySelector('.card-extra-info');
      const detailText = card.getAttribute('data-detail');

      if (extraBox.classList.contains('open')) {
        extraBox.classList.remove('open');
        button.textContent = 'Ver reseña completa';
      } else {
        extraBox.textContent = detailText;
        extraBox.classList.add('open');
        button.textContent = 'Ocultar reseña';
      }
    });
  });

  // 4. Botón desplegable y lista interactiva de Curiosidades
  const toggleBtn = document.getElementById('toggleCuriosidadesBtn');
  const dropdown = document.getElementById('curiosidadesDropdown');
  const btnText = document.getElementById('btnText');
  const arrowIcon = document.getElementById('arrowIcon');

  toggleBtn.addEventListener('click', () => {
    const isHidden = dropdown.classList.contains('hidden');
    if (isHidden) {
      dropdown.classList.remove('hidden');
      btnText.textContent = 'Ocultar Lista de Curiosidades';
      arrowIcon.classList.add('rotated');
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      dropdown.classList.add('hidden');
      btnText.textContent = 'Mostrar Lista de Curiosidades';
      arrowIcon.classList.remove('rotated');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Contenido con foto para cada una de las 5 curiosidades
  const curiosidadesData = {
    anillos: {
      badge: "Urbanismo Único",
      title: "Ciudad de los anillos",
      desc: "Santa Cruz de la Sierra es conocida como la 'Ciudad de los Anillos' por su trazado urbano concéntrico basado en el concepto de ciudad jardín. Avenidas circulares numeradas (1er anillo, 2do anillo, etc.) rodean el casco viejo y se conectan mediante avenidas radiales.",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
      alt: "Vista aérea urbana de la Ciudad de los Anillos"
    },
    fundacion: {
      badge: "Historia",
      title: "Fundación",
      desc: "Fue fundada el 26 de febrero de 1561 por Ñuflo de Chaves en las proximidades de San José de Chiquitos. Curiosamente, la ciudad tuvo tres traslados históricos antes de establecerse de forma definitiva a orillas del río Piraí.",
      img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=80",
      alt: "Arquitectura histórica de la fundación de Santa Cruz"
    },
    bandera: {
      badge: "Símbolo Departamental",
      title: "Bandera",
      desc: "Creada el 24 de julio de 1864 por iniciativa del Prefecto Tristán Roca. Está compuesta por tres franjas horizontales del mismo ancho: verde bandera en los extremos (simbolizando la riqueza vegetal y bosques) y blanco al centro (la nobleza de su gente).",
      img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
      alt: "Naturaleza verde que inspira los colores de la bandera cruceña"
    },
    crucena: {
      badge: "Identidad y Cultura",
      title: "Cruceña",
      desc: "La mujer cruceña es símbolo de hospitalidad, alegría y belleza en el oriente boliviano, destacando por su carisma, calidez al recibir visitantes y su elegante porte al vestir el tradicional tipoy adornado con flores tropicales.",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
      alt: "Cultura y tradición cruceña"
    },
    tajibo: {
      badge: "Flora Emblemática",
      title: "El Tajibo",
      desc: "El Tajibo (Handroanthus) es el árbol más querido de Santa Cruz. Durante la época seca pierde sus hojas y se cubre por completo de vibrantes flores rosadas, amarillas o blancas, tiñendo de color las plazas y avenidas de toda la ciudad.",
      img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=900&q=80",
      alt: "Árbol de Tajibo florecido en primavera"
    }
  };

  const itemBtns = document.querySelectorAll('.curiosidad-item-btn');
  const curiosidadImg = document.getElementById('curiosidadImg');
  const curiosidadBadge = document.getElementById('curiosidadBadge');
  const curiosidadTitle = document.getElementById('curiosidadTitle');
  const curiosidadDesc = document.getElementById('curiosidadDesc');

  itemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      itemBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const topic = btn.getAttribute('data-topic');
      const data = curiosidadesData[topic];

      curiosidadImg.src = data.img;
      curiosidadImg.alt = data.alt;
      curiosidadBadge.textContent = data.badge;
      curiosidadTitle.textContent = data.title;
      curiosidadDesc.textContent = data.desc;
    });
  });
});
