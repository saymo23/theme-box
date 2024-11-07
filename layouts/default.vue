<template>
  <div>
    <header>
      <button  @click="toggleSidebar">☰</button>
    </header>

    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" @close="closeSidebar" />

    <!-- Contenido principal -->
    <main :class="{ 'main-with-sidebar': !isMobile }">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Sidebar from '~/components/Sidebar.vue';

const isSidebarOpen = ref(false);
const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isSidebarOpen.value = true; // Siempre abierto en escritorio
    document.body.classList.remove('no-scroll'); // Asegura que el scroll esté habilitado
  } else {
    isSidebarOpen.value = false;
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
});


</script>

<style>
.ibm{
  font-family: 'IBM Plex Sans';
  font-weight: bold;
}
.main-with-sidebar {
  margin-left: 400px;
}
header {
  @apply fixed top-0 left-0 right-0 z-50 bg-negro text-white flex items-center justify-between;
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