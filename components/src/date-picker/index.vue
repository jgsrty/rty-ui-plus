<template>
  <div class="rty-date-picker" ref="dateTarget">
    <rty-input
      :placeholder="placeholder"
      v-model="inputValue"
      @click="showCalendar = !showCalendar"
      icon="calendar"
      class="input"
    ></rty-input>
    <div class="calendar" v-show="showCalendar">
      <div class="header"></div>
      <div class="weeks"></div>
      <div class="date">
        <tbody>
          <tr v-for="(item, ind) in dateList" :key="ind">
            <td
              @click="handleDayClick(date)"
              v-for="(date, dateInd) in item"
              :key="date + dateInd"
              :class="[
                date.disabled ? 'disble-date' : 'day-item',
                date.active ? 'active' : '',
                date.index === currentDay ? 'active-click' : '',
              ]"
            >
              <span>{{ date.value }}</span>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import rtyInput from "../input/index.vue";
import { generateDateData } from "./utils";
import { onClickOutside, useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: [Date, String],
  },
  placeholder: {
    type: String,
    default: "请选择日期",
  },
});
const formContext = inject("rty-form", undefined);

const emits = defineEmits([
  "changeDate",
  "update:modelValue",
  "updateInputValue",
]);
const inputValue = useVModel(props, "modelValue", emits("update:modelValue"));
const year = ref("");
const month = ref("");
const today = new Date();
const dateList = ref([]);

if (props.modelValue) {
  year.value = new Date(props.modelValue).getFullYear();
  month.value = new Date(props.modelValue).getMonth() + 1;
  emits(
    "update:modelValue",
    `${year.value}-${month.value}-${new Date(props.modelValue).getDate()}`
  );
} else {
  year.value = new Date(today).getFullYear();
  month.value = new Date(today).getMonth() + 1;
}
dateList.value = generateDateData([year.value, month.value]);

const dateTarget = ref(null);
const showCalendar = ref(false);
const currentDay = ref(-1);

const handleDayClick = (date) => {
  currentDay.value = date.index;
  showCalendar.value = false;
  emits("update:modelValue", date.date);
  emits("changeDate", date.date);
  if (formContext) formContext.validate();
};

onClickOutside(dateTarget, (e) => (showCalendar.value = false));
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
