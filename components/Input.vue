<template>
    <div class="field">
        <label v-if="label" :for="id">{{ label }}</label>
        <input :id="id" :name="name || id" class="input" v-model="modelValue" :type="type" :placeholder="placeholder"
            :disabled="disabled" v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
interface InputProps {
    label?: string;
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
}

const modelValue = defineModel();

withDefaults(defineProps<InputProps>(), {
    id: () => useId(),
    type: "text",
    placeholder: "",
    disabled: false,
});
</script>
