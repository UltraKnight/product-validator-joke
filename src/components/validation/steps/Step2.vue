<script setup lang="ts">
import { ref } from 'vue';

const VALUES = [60, 500, 10];
const emit = defineEmits(['success']);
const isError = ref(false);
const x = ref(VALUES[0]);
const count = ref(VALUES[0]);

let debounceTimeout: number | null = null;
const DEBOUNCE_DELAY = 800;

const validate = () => {
  if (isError.value) return;

  if (debounceTimeout) return;
  debounceTimeout = window.setTimeout(() => {
    debounceTimeout = null;
  }, DEBOUNCE_DELAY);

  if (x.value === 60) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
      x.value = VALUES[1];
      count.value = VALUES[1];
    }, 5000);
    return;
  }

  if (x.value === 500) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
      x.value = VALUES[2];
      count.value = VALUES[2];
    }, 5000);
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
  <div v-if="!isError" @click="validate" class="touch-area">
    <p>
      Toque nessa área {{ x }} vezes <span class="touch-area__text--highlighted">DEVAGAR</span> para confirmar presença
      humana. Toques rápidos serão considerados robôs.
    </p>
  </div>
  <p v-if="isError" class="touch-area__error">Erro de validação! Recalculando...</p>
  <p v-else class="touch-area__hint">Faltam {{ count }} vez(es)</p>
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

  &__text--highlighted {
    color: #00cc44;
    font-weight: bold;
    font-size: 1.5rem;
  }

  &__hint {
    font-size: 0.8rem;
    color: #0088ff;
  }

  &__error {
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: #ff0044;
  }
}
</style>
