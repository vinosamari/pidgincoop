<template>
  <nav>
    <p>About</p>
    <p>Account</p>
    <p>Contact</p>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  font-family: "Yeseva One";
  @apply flex gap-5 items-center justify-evenly uppercase font-bold tracking-widest mb-5;
}
p {
  @apply underline transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer mx-2;
}
</style>
