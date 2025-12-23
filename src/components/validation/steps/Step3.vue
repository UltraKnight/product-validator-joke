<script setup lang="ts">
import { onMounted, ref } from 'vue';

const emit = defineEmits(['success']);
const showMessage = ref(false);
const finished = ref(false);

onMounted(() => {
  setTimeout(() => {
    showMessage.value = true;
    setTimeout(() => {
      finished.value = true;
      emit('success');
    }, 5000);
  }, 5000);
});
</script>

<template>
  <div class="step3-container">
    <p class="step3-container__success-message" v-if="finished">Clique no botão abaixo para concluir o registro e validação do seu produto.</p>
    <p v-else-if="showMessage" class="step3-container__message">Brincadeira, ainda estamos processando, aguarde mais um instante...</p>
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

  &__success-message {
    font-size: 1.2rem;
    color: #00cc44;
  }

  &__message {
    font-size: 1rem;
  }
}
</style>
