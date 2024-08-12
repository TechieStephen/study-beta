<script setup>
const footerText = ref('');

onMounted(() => {
    const currentYear = new Date().getFullYear();
    const name = 'Eduke Ohien Stephen';  // Replace with your name
    footerText.value = `© ${currentYear} ${name}. All rights reserved.`;
});
</script>

<template>
<footer class="footer">
    <p>{{ footerText }}</p>
</footer>
</template>

<style scoped>
.footer {
    /* position: fixed; */
    /* bottom: 0; */
    width: 100%;
    color: #333;
    text-align: center;
    padding: 10px 0;
}
</style>
  