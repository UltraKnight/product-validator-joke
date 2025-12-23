<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['success', 'failure']);
const isValidating = ref(false);
const isValid = ref(false);
const validationId = ref<number>();

const validate = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const validSerials = ['BPC-756-1N1M1G0', 'IKA-349-1N1M1G0'];
  if (input.value.length === 15 && validSerials.includes(input.value)) {
    isValidating.value = true;
    validationId.value = setTimeout(() => {
      isValidating.value = false;
      isValid.value = true;
      emit('success');
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
    <input type="text" placeholder="Enter Serial Number" @input="validate" />
    <p v-if="isValidating" class="serial-number__hint">Validando serial... pode levar algumas horas...</p>
    <p v-else-if="isValid" class="serial-number__hint">Serial aceito! Você pode prosseguir.</p>
  </div>
</template>

<style lang="scss" scoped>
.serial-number {
  &__hint {
    font-size: 0.8rem;
    color: #0088ff;
  }
}
</style>
