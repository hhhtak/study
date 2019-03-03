<template>
  <button :class="setSize">
    <p class="text">
      {{ text }}
    </p>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: ""
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
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 100%;
  border: 1px solid #111;
  border-radius: 5px;
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
