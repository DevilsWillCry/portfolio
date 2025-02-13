import React, { useEffect, useRef } from 'react';

const Carousel3D = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const currIndexRef = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slider = carousel.querySelector('.carousel__slider');
    const items = carousel.querySelectorAll('.carousel__slider__item');
    const prevBtn = carousel.querySelector('.carousel__prev');
    const nextBtn = carousel.querySelector('.carousel__next');

    const margin = 20;
    let width, height, totalWidth;
    const intervalTime = 2500;

    // Actualiza las dimensiones del slider y de cada item
    function resize() {
      width = Math.max(window.innerWidth * 0.25, 275);
      height = window.innerHeight * 0.5;
      totalWidth = width * items.length;
      if (slider) slider.style.width = totalWidth + 'px';
      items.forEach((item) => {
        item.style.width = (width - margin * 2) + 'px';
        item.style.height = height + 'px';
      });
    }

    // Mueve el slider al índice indicado, aplicando las transformaciones 3D a cada item
    function move(index) {
      if (index < 1) index = items.length;
      if (index > items.length) index = 1;
      currIndexRef.current = index;

      items.forEach((item, i) => {
        const box = item.querySelector('.item__3d-frame');
        if (i === (index - 1)) {
          item.classList.add('carousel__slider__item--active');
          box.style.transform = 'perspective(1200px)';
        } else {
          item.classList.remove('carousel__slider__item--active');
          box.style.transform =
            'perspective(1200px) rotateY(' +
            (i < (index - 1) ? 40 : -40) +
            'deg)';
        }
      });

      // Centra el slider usando la fórmula original
      slider.style.transform =
        'translate3d(' +
        ((index * -width) + (width / 2) + window.innerWidth / 2) +
        'px, 0, 0)';
    }

    // Inicia el auto-slide
    function timer() {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        move(++currIndexRef.current);
      }, intervalTime);
    }

    // Funciones para los botones prev y next
    function prev() {
      move(--currIndexRef.current);
      timer();
    }

    function next() {
      move(++currIndexRef.current);
      timer();
    }

    // Vincula los eventos de redimensionado y clic en los botones
    function bindEvents() {
      window.addEventListener('resize', resize);
      if (prevBtn) prevBtn.addEventListener('click', prev);
      if (nextBtn) nextBtn.addEventListener('click', next);
    }

    function unbindEvents() {
      window.removeEventListener('resize', resize);
      if (prevBtn) prevBtn.removeEventListener('click', prev);
      if (nextBtn) nextBtn.removeEventListener('click', next);
    }

    // --- NUEVO: Funciones para pausar/reanudar el auto-slide al pasar el mouse ---
    function pauseTimer() {
      clearInterval(intervalRef.current);
    }

    function resumeTimer() {
      timer();
    }

    // Agrega los event listeners para pausar/reanudar al pasar el mouse sobre el carrusel
    carousel.addEventListener('mouseenter', pauseTimer);
    carousel.addEventListener('mouseleave', resumeTimer);

    // Inicializa el carrusel
    resize();
    move(Math.floor(items.length / 2) + 1);
    bindEvents();
    timer();

    // Cleanup: remueve listeners y el intervalo
    return () => {
      unbindEvents();
      clearInterval(intervalRef.current);
      carousel.removeEventListener('mouseenter', pauseTimer);
      carousel.removeEventListener('mouseleave', resumeTimer);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel__body">
        <div className="carousel__prev">
          <i className="far fa-angle-left"></i>
        </div>
        <div className="carousel__next">
          <i className="far fa-angle-right"></i>
        </div>
        <div className="carousel__slider">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => (
            <div className="carousel__slider__item" key={index}>
              <div className="item__3d-frame">
                <div className="item__3d-frame__box item__3d-frame__box--front">
                  <h1>{val}</h1>
                </div>
                <div className="item__3d-frame__box item__3d-frame__box--left"></div>
                <div className="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
