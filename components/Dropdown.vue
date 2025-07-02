<template>
    <div class="field">
        <label :for="id">{{ label }}</label>
        <select :id="id" v-model="modelValue" v-bind="$attrs" class="dropdown" :name="name || id">
            <option v-for="option of options" :value="option[valueKey]" :key="option[valueKey]">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
interface DropdownProps {
    id?: string;
    name?: string;
    label: string;
    options: any[];
    valueKey?: string;
    nameKey?: string;
}

withDefaults(defineProps<DropdownProps>(), {
    id: () => useId(),
    valueKey: "value",
    nameKey: "name",
});

const modelValue = defineModel();
</script>
