<template>
    <div style="min-height: 200vh;">
        <button role="label" @click="toggleContent(1)" ref="btn">Button</button>
        <div role="listbox"  tabindex="0" @mouseleave="toggleContent(1)" v-if="content.active" style="position:fixed;max-width: 200px;" ref="element" :style="`background: black;color: white; ${content.position}`">
            <div role="option" id="listbox1-1" class="selected" aria-selected="true">
                Green
            </div>
            <div role="option" id="listbox1-2">Orange</div>
            <div role="option" id="listbox1-3">Red</div>
            <div role="option" id="listbox1-4">Blue</div>
            <div role="option" id="listbox1-5">Violet</div>
            <div role="option" id="listbox1-6">Periwinkle</div>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </div>
    </div>
    <br>
    <div >
        <button ref="dropdown_btn_left" @click="toggleContent(3)">
            Dropdown button
        </button>
        <div v-if="content.active_3" :style="content.dropdown_left" ref="dropdown_menu_left" style="position:fixed;display: grid;gap:15px;padding:10px;background: black;max-width: 200px;">
            <a href="#">Action</a>
            <a href="#">Another action</a>
            <a href="#">Something else here</a>
        </div>
    </div>
    <div  style="float:right">
        <button ref="dropdown_btn"  @click="toggleContent(4)">
            Dropdown button
        </button>
        <div v-if="content.active_4" :style="content.dropdown_right" ref="dropdown_menu" style="position:fixed;display: grid;gap:15px;padding:10px;background: black;max-width: 200px;">
            <a href="#">Action</a>
            <a href="#">Another action</a>
            <a href="#">Something else here</a>
        </div>
    </div>
    <br>
    <div style="text-align: right;margin-top: 500px;">
        <button @click="toggleContent(2)" ref="tooltip_btn">Button</button>
        <div @mouseleave="toggleContent(2)" v-if="content.active_2" style="position:fixed;max-width: 200px;max-height: 90vh;overflow: scroll;" ref="tooltip_content" :style="`background: black;color: white; ${content.position_2}`">
           
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, explicabo velit suscipit, veritatis fugit veniam excepturi quasi soluta nam dignissimos facere cum labore ab tempora modi, asperiores commodi temporibus? Voluptates.
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

const dropdown_btn_left = ref(null);
const dropdown_menu_left = ref(null);

const dropdown_btn = ref(null);
const dropdown_menu = ref(null);

const content = reactive({
  position: '',
  position_2: '',
  dropdown_left: '',
  dropdown_right: '',
  active: false,
  active_2: false,
  active_3: false,
  active_4: false,
})

onMounted(() => {
    document.addEventListener('scroll', ()=> {
        content.active = false
        content.active_2 = false
        content.active_3 = false
        content.active_4 = false
    })
})

const toggleContent = (n) => {
    if(n === 1){
        content.active = !content.active 
        setTimeout(() => {
            content.position = getFloating(btn.value,element.value, 'top-right', 10, 10)
        })
    }else if(n === 2){
        content.active_2 = !content.active_2
        setTimeout(() => {
            content.position_2 = getFloating(tooltip_btn.value,tooltip_content.value, 'top-left', 10, 10)
        })
    }else if(n === 3){
        content.active_3 = !content.active_3
        setTimeout(() => {
            content.dropdown_left = getFloating(dropdown_btn_left.value,dropdown_menu_left.value, 'left', 10, 10)
        })
    }else if(n === 4){
        content.active_4 = !content.active_4
        setTimeout(() => {
            content.dropdown_right = getFloating(dropdown_btn.value,dropdown_menu.value, 'right', 10, 10)
        })
    }
}

</script>