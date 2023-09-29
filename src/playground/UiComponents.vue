<template>
    <div class="flex items-center justify-center h-screen w-screen gap-3">
        <Btn label="Button" />
        <Chip label="Chip" />
        <Dropdown />
    </div>
</template>
<script setup>
import { Btn , Chip, Dropdown } from '@/index'
</script>
<style>
@import url('../style.css');
</style>