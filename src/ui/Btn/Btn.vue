<template>
    <button class="bg-blue-500 text-white px-3 py-1 rounded">
        {{label}}
    </button>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    label: String
})
</script>