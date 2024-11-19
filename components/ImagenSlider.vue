<template>
  <div class="slider-container">
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Imagen del slider" class="slide-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Lista de imágenes para el slider
const images = [
  '/images/slider/1.jpg',
  '/images/slider/1.jpg',
  '/images/slider/1.jpg',
  // Agrega más rutas de imágenes según sea necesario
];

const currentIndex = ref(0);
let interval = null;

const startSlider = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000); // Cambia la imagen cada 3 segundos
};

const stopSlider = () => {
  clearInterval(interval);
};

onMounted(() => {
  startSlider();
});

onUnmounted(() => {
  stopSlider();
});
</script>

<style scoped>
.slider-container {
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  position: relative;
}

.slider {
  display: flex;
  transition: transform 1s ease; /* Transición suave de 1 segundo */
  width: 100%;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden; /* Oculta la parte que se desplaza fuera de su contenedor */
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  right: -200px;
  object-fit: cover;
  position: absolute;
  animation: slide-move 120s linear infinite;
}

/* Animación para mover la imagen de derecha a izquierda */
@keyframes slide-move {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
