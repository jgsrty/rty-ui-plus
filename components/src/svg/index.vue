<template>
  <current-svg class="svg-icon" :fill="color"></current-svg>
</template>

<script setup>
import { computed } from "vue";

const modules = import.meta.globEager("@/assets/svg/*.svg");

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 15,
  },
  color: {
    type: String,
  }
});

const currentSvg = computed(() => {
  const fileName = `/${props.name}.svg`;
  for (const path in modules) {
    const mod = modules[path];
    if (path.endsWith(fileName)) {
      return mod;
    }
  }
  throw new Error("not found svg file:" + fileName);
});

const svgSize = computed(() => {
  return props.size + "px";
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: v-bind(svgSize);
  height: v-bind(svgSize);
}
</style>
