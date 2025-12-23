<script setup lang="ts">
import { onMounted, ref } from 'vue';

const emit = defineEmits(['success']);
const showMessage = ref(false);

onMounted(() => {
  setTimeout(() => {
    showMessage.value = true;
    setTimeout(() => {
      emit('success');
    }, 3000);
  }, 3000);
});
</script>

<template>
  <div class="step3-container">
    <p v-if="showMessage" class="step3-container__message">Brincadeira, ainda estamos processando, aguarde mais um instante...</p>
    <h2 v-else class="step3-container__error">A validação do produto falhou, este produto não é original!!!</h2>
  </div>
</template>

<style lang="scss" scoped>
.step3-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94a3b8;
  font-size: 1.2rem;
  text-align: center;

  &__error {
    color: #ff4444;
    margin-bottom: 12px;
  }

  &__message {
    font-size: 1rem;
  }
}
</style>
