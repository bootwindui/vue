
<template>
  <div class="w-screen h-screen flex items-center content-center justify-center flex-wrap gap-3">
    <div class="w-full p-2 text-center">Used Example</div>
    <Btn label="Button" />
    <Chip label="Chip" />
    <Dropdown />
    <Select :options="[
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]" />
  </div>
</template>

<script setup>
import { Btn, Chip, Dropdown, Select } from 'bootwind'
</script>
