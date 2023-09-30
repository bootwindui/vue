<template>
    <div>
        <button ref="btn">Button</button>
        <div style="max-width: 200px;" ref="element" :style="`background: black;color: white; ${content.position}`">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
        </div>
    </div>
    <br>
    <div style="text-align: right;">
        <button ref="tooltip_btn">Button</button>
        <div style="max-width: 200px;" ref="tooltip_content" :style="`background: black;color: white; ${content.position_2}`">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getFloating } from './index.js'

const btn = ref(null);
const element = ref(null);

const tooltip_btn = ref(null);
const tooltip_content = ref(null);

const content = reactive({
  position: '',
  position_2: '',
})

onMounted(() => {
    content.position = getFloating(btn.value,element.value, 'right', 10)
    setTimeout(() => {
        // mutiple ref issues
        content.position_2 = getFloating(tooltip_btn.value,tooltip_content.value, 'left', 3)
    })
})
</script>