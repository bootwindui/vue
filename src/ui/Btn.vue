<template>
    <button>
        {{label}}
    </button>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    label: String
})
</script>