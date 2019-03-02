<template>
  <button :class="setSize">
    <p class="text">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
      validate: ["md", "bg"]
    }
  },
  computed: {
    setSize() {
      return this.size
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
  background-color: #fff;
  font-size: 16px;
}

button.md {
  max-width: 240px;
}

button.bg {
  max-width: 360px;
}

.text {
  padding: 8px;
  text-align: center;
}

</style>