<template>
    <div style="min-height: 200vh;">
        <button @mouseenter="toggleContent(1)" ref="btn">Button</button>
        <div  @mouseleave="toggleContent(1)" v-if="content.active" style="position:fixed;max-width: 200px;" ref="element" :style="`background: black;color: white; ${content.position}`">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
        </div>
    </div>
    <br>
    <div style="text-align: right;margin-top: 500px;">
        <button @mouseenter="toggleContent(2)" ref="tooltip_btn">Button</button>
        <div @mouseleave="toggleContent(2)" v-if="content.active_2" style="position:fixed;max-width: 200px;" ref="tooltip_content" :style="`background: black;color: white; ${content.position_2}`">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { getFloating } from './index.js'

const btn = ref(null);
const element = ref(null);

const tooltip_btn = ref(null);
const tooltip_content = ref(null);

const content = reactive({
  position: '',
  position_2: '',
  active: false,
  active_2: false
})

const toggleContent = (n) => {
    if(n === 1){
        content.active = !content.active 
        setTimeout(() => {
            content.position = getFloating(btn.value,element.value, 'right', 10, 10)
        })
    }else{
        content.active_2 = !content.active_2
        setTimeout(() => {
            content.position_2 = getFloating(tooltip_btn.value,tooltip_content.value, 'left', 10, 10)
        })
    }
}

</script>