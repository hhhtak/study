import { storiesOf } from "@storybook/vue"
import Button from "./Button.vue"

storiesOf("Button", module).add("default", () => ({
  components: { Button },
  data() {
    return {
      sizes: ["md", "bg"]
    }
  },
  template: `
    <section style="margin: 36px">
      <div v-for="size in sizes" :key="size">
        <p>size: {{ size }}</p>
        <Button text="sample button" :size="size" />
      </div>
    </section>
  `
}))
