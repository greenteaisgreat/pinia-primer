<script>
  export default {};
</script>

<template class="wrapper">
  <div class="top-wrapper">
    <main>
      <slot name="top-main" />
    </main>
    <aside>
      <slot name="top-aside" />
    </aside>
  </div>
  <div class="bottom-wrapper">
    <main>
      <slot name="bottom-main" />
    </main>
    <aside>
      <slot name="bottom-aside" />
    </aside>
  </div>
</template>

<style scoped>
  .top-wrapper {
    display: flex;
    justify-content: center;
    gap: 7rem;
  }
  .bottom-wrapper {
    display: flex;
    justify-content: center;
    gap: 7rem;
  }
  main {
    border: 3px solid black;
    flex: 1;
    margin: 1rem 10px;
    padding: 1rem;
    border-radius: 4px;
    background-color: aliceblue;
    max-width: 30rem;
  }
  aside {
    border: 3px solid black;
    flex: 1;
    margin: 1rem 10px;
    padding: 1rem;
    border-radius: 4px;
    background-color: aliceblue;
    max-width: 30rem;
    align-content: center;
  }
</style>
