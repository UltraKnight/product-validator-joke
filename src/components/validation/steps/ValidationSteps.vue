<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import ValidationSuccess from '../ValidationSuccess.vue';

const currentStep = ref(0);
const isStepValid = ref(false);
const isProdutValid = ref(false);

const validateStep = () => {
  isStepValid.value = true;
};

const invalidateStep = () => {
  isStepValid.value = false;
};

const handleNextStep = () => {
  if (isLastStep.value) {
    isProdutValid.value = true;
  } else {
    isStepValid.value = false;
    if (currentStep.value < steps.length - 1) {
      currentStep.value += 1;
    }
  }
};

const isLastStep = computed(() => currentStep.value === steps.length - 1);

const steps = [
  defineAsyncComponent(() => import('./Step1.vue')),
  defineAsyncComponent(() => import('./Step2.vue')),
  defineAsyncComponent(() => import('./Step3.vue')),
];
</script>

<template>
  <div class="results-container" v-if="isProdutValid">
    <validation-success />
  </div>
  <div class="steps-container" v-else>
    <component :is="steps[currentStep]" @success="validateStep" @failure="invalidateStep" />
    <section class="steps-container__actions">
      <button :disabled="!isStepValid" class="steps-container__btn--right" @click="handleNextStep">
        {{ isLastStep && isStepValid ? 'Validar' : 'Próximo' }}
      </button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.steps-container {
  background: #020617;
  width: 100%;
  max-width: 720px;
  padding: 12px;
  border-radius: 14px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
