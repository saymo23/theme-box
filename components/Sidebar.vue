<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="isMobile && isOpen" 
      class="sidebar-overlay" 
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <aside :class="['sidebar', { open: isOpen, fixed: !isMobile }]">
      <button v-if="isMobile" @click="closeSidebar">Cerrar Sidebar</button>
      <nav>
        <ul>
          <li>Home</li>
          <!-- Añade más elementos según sea necesario -->
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(['close']);

// Estado para detectar si es móvil
const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768; // Definimos el límite para escritorio/móvil
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

watch(
  () => isMobile.value,
  (newVal) => {
    if (!newVal && props.isOpen) {
      document.body.classList.remove('no-scroll'); // Reactiva el scroll en escritorio
    }
  }
);

const closeSidebar = () => {
  if (isMobile.value) {
    emits('close'); // Solo emite el evento de cierre en móvil
    document.body.classList.remove('no-scroll'); // Reactiva el scroll en el fondo
  }
};

</script>

<style scoped>
/* Overlay solo para móviles */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s ease;
  z-index: 999;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  background-color: #eee;
  padding: 1rem;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
  transition: left 0.5s ease;
  overflow-y: auto;
  z-index: 1000;
}

/* Ancho del sidebar en móvil */
.sidebar {
  width: 80%;
  left: -80%; /* Oculto fuera de la pantalla por defecto en móvil */
}

/* Sidebar abierto en móvil */
.sidebar.open {
  left: 0;
}

/* Ancho del sidebar en escritorio */
.sidebar.fixed {
  width: 400px;
  left: 0;
  box-shadow: none; /* Sin difuminado */
}
</style>
