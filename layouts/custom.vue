<template>
<div class="w-full max-w-screen-xl h-screen bg-[#000000] flex items-center justify-center mx-auto no-scrollbar overflow-hidden">
 <slot/>
</div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>