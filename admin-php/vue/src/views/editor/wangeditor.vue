<script setup lang="ts">
import router from '@/router/register'
import { ref } from 'vue'
const content = ref('后盾人')
</script>

<template>
  <div class>
    <EditorWangEditor v-model="content" />
    <div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>
