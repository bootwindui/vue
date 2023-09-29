<template>
    <span class="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
        {{label}}
    </span>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    label: String
})
</script>