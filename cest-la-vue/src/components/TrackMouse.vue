<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const x = ref(0);
const y = ref(0);

function updateMouse(e) {
  x.value = e.pageX;
  y.value = e.pageY;
}

onMounted(() => window.addEventListener("mousemove", updateMouse));
onUnmounted(() => window.removeEventListener("mousemove", updateMouse));
</script>

<template>
  <h1>Mouse Position is at {{ x }} {{ y }}</h1>
</template>

<style lang="scss" scoped></style>
