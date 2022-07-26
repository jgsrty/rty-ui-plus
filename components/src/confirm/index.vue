<template>
  <transition name="fade">
    <div v-if="isVisiable" @click="close" class="confirm-bg"></div>
  </transition>
  <transition name="up">
    <div v-if="isVisiable" class="confirm-container">
      <!-- 标题 -->
      <div class="title" v-if="title">
        {{ title }}
      </div>
      <!-- 内容 -->
      <div class="content">
        {{ content }}
      </div>
      <!-- 按钮 -->
      <div class="button">
        <rty-button size="mini" type="info" @click="onCancelClick">{{ cancelText }}</rty-button>
        <rty-button size="mini" type="primary" @click="onConfirmClick">{{ confirmText }}</rty-button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onRenderTracked, onRenderTriggered } from "vue";
import rtyButton from "../button/index.vue";

const props = defineProps({
  // 标题
  title: {
    type: String,
  },
  // 描述
  content: {
    type: String,
    required: true,
  },
  // 取消按钮文本
  cancelText: {
    type: String,
    default: "取消",
  },
  // 确定按钮文本
  confirmText: {
    type: String,
    default: "确定",
  },
  // 取消按钮事件
  cancelHandler: {
    type: Function,
  },
  // 确定按钮事件
  confirmHandler: {
    type: Function,
  },
  // 关闭 confirm 的回调
  close: {
    type: Function,
  },
});

const isVisiable = ref(false);
const duration = 500;

onMounted(() => {
  isVisiable.value = true;
});

const onCancelClick = () => {
  if (props.cancelHandler) {
    props.cancelHandler();
  }
  close();
};

const onConfirmClick = () => {
  if (props.confirmHandler) {
    props.confirmHandler();
  }
  close();
};

const close = () => {
  isVisiable.value = false;
  setTimeout(() => {
    if (props.close) {
      props.close();
    }
  }, duration);
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
