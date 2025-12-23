<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['success', 'failure']);
const validSerials = ['BPC-756-1N1M1G0', 'IKA-349-1N1M1G0'];
const showError = ref(false);
const isValidating = ref(false);
const isValid = ref(false);
const validationId = ref<number>();
const serialNumber = ref('');

const validate = () => {
  showError.value = false;

  if (serialNumber.value.length === 15) {
    isValidating.value = true;
    validationId.value = setTimeout(() => {
      if (validSerials.includes(serialNumber.value.toUpperCase())) {
        isValidating.value = false;
        isValid.value = true;
        emit('success');
      } else {
        isValidating.value = false;
        isValid.value = false;
        showError.value = true;
        emit('failure');
      }
    }, 5000);
  } else {
    clearTimeout(validationId.value);
    isValidating.value = false;
    isValid.value = false;
    emit('failure');
  }
};
</script>

<template>
  <div class="serial-number">
    <input
      maxlength="15"
      type="text"
      placeholder="Digite o número de série do produto"
      v-model="serialNumber"
      @input="validate"
      class="serial-number__input"
    />
    <p v-if="isValidating" class="serial-number__hint">Validando serial... pode levar algumas horas...</p>
    <p v-else-if="isValid" class="serial-number__hint">Serial aceito! Você pode prosseguir.</p>
    <p v-else-if="showError" class="serial-number__hint--error">Serial inválido! Tente novamente.</p>
  </div>
</template>

<style lang="scss" scoped>
.serial-number {
  &__input {
    text-transform: uppercase;

    &::placeholder {
      text-transform: none;
    }
  }

  &__hint {
    font-size: 1.2em;
    color: #0088ff;
    text-shadow: 0 0 2px #193ab5;

    &--error {
      color: #ff0044;
      text-shadow: 0 0 2px #b5193a;
    }
  }
}
</style>
