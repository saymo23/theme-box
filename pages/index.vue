<template>
  <div>

    <ImagenSlider :time='5000' />


    <h3>heloooo</h3>
  </div>
</template>

<script setup>

import ImagenSlider from '~/components/ImagenSlider.vue';
definePageMeta({
  layout: 'default', // Nombre del layout personalizado
});
</script>

<style>

</style>