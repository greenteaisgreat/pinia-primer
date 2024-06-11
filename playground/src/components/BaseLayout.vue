<script>
export default {}
</script>

<!-- Slots are also great for formatting entire layouts with -->
<template>
  <div class="wrapper">
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
    <main>
      <slot name="main" />
    </main>
  </div>
  <footer>
    <slot name="footer" />
  </footer>
</template>

<style scoped>
.sidebar {
  border: 2px solid red;
}
footer {
  border: 2px solid blue;
}
main {
  border: 2px solid green;
}
</style>
