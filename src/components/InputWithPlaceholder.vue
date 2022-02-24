<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  inputName: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: false,
    default: 'text',
  },
  isRequired: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="relative">
    <input
      :id="inputName"
      :name="inputName"
      :type="inputType"
      :placeholder="placeholder"
      :required="isRequired"
      :value="props.modelValue"
      @input="updateValue($event.target.value)"
      class="w-full h-10 text-gray-900 placeholder-transparent bg-transparent border-0 border-b-2 border-gray-300 dark:text-zinc-100 peer focus:outline-none focus:ring-0 focus:border-blue-400"
    >
    <label
      :for="inputName"
      class="absolute left-0 -top-3.5 text-gray-600 dark:text-zinc-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:font-bold peer-focus:text-sm"
    >
      {{ placeholder }}
    </label>
  </div>
</template>
