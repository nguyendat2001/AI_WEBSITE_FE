<template>
  <div id="app">
      <router-view />
  </div>
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.page {
  max-width: 400px;
  margin: auto;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-out;
}
</style>