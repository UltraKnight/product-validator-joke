<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['success']);
const isError = ref(false);
const x = ref(60);

const validate = () => {
  if (isError.value) return;

  if (x.value === 60) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
      x.value = 500;
    }, 1000);
    return;
  }

  if (x.value === 500) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
      x.value = 10;
    }, 1000);
    return;
  }

  if (x.value > 1) {
    x.value -= 1;
    return;
  }

  x.value = 0;
  emit('success');
};
</script>

<template>
  <div @touchend="validate" @click="validate" class="touch-area">
    Toque nessa área {{ x }} vezes para confirmar presença humana.
  </div>
  <p v-if="isError" class="touch-area__error">Erro de validação! Recalculando...</p>
  <p v-else class="touch-area__hint">Faltam {{ x }} vez(es)</p>
</template>

<style lang="scss" scoped>
.touch-area {
  margin-top: 20px;
  margin-bottom: 10px;
  height: 140px;
  border-radius: 12px;
  background: repeating-linear-gradient(45deg, #020617, #020617 10px, #020617 10px, #020617 20px);
  border: 2px dashed #334155;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;

  &__hint {
    font-size: 0.8rem;
    color: #0088ff;
  }

  &__error {
    font-size: 1rem;
    color: #ff0044;
  }
}
</style>
