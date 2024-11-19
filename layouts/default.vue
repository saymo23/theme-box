<template>
  <div>
    <header>
      <button @click="toggleSidebar">☰</button>
    </header>

    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" @close="closeSidebar" />

    <!-- Contenido principal -->
    <main >
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Sidebar from '~/components/Sidebar.vue';

const isSidebarOpen = ref(false);
const isMobile = ref(false);

const updateIsMobile = () => {
  const wasMobile = isMobile.value;
  isMobile.value = window.innerWidth < 768;

  // Si pasa de móvil a escritorio, aplica la animación de apertura con retraso
  if (!isMobile.value && wasMobile) {
    isSidebarOpen.value = false; // Oculta el sidebar temporalmente
    setTimeout(() => {
      isSidebarOpen.value = true; // Aplica la animación de apertura después de un retraso
    }, 222);
  }

  // Asegura que el scroll esté habilitado cuando cambia a escritorio
  if (!isMobile.value) {
    document.body.classList.remove('no-scroll');
  } else {
    isSidebarOpen.value = false; // Cierra el sidebar en móvil
  }
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  document.body.classList.toggle('no-scroll', isSidebarOpen.value && isMobile.value);
};

const closeSidebar = () => {
  if (isMobile.value) {
    isSidebarOpen.value = false;
    document.body.classList.remove('no-scroll');
  }
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);

  // Muestra el sidebar en escritorio con un retraso inicial
  if (!isMobile.value) {
    setTimeout(() => {
      isSidebarOpen.value = true;
    }, 222);
  }
});
</script>

<style>
body{
  @apply bg-negro;
}
.ibm {
  font-family: 'IBM Plex Sans';
  font-weight: bold;
}
header {
  @apply fixed top-0 left-0 right-0 z-50 text-white flex items-center justify-between;
  backdrop-filter: blur(10px);
  background-color: rgba(41, 45, 58, 0.9); /* Fondo negro semitransparente */
  padding: 1rem;
}

button {
  @apply bg-negro text-white cursor-pointer;
  border: none;
  padding: 10px 20px;
}

button:hover {
  @apply bg-negro-600;
}
</style>
