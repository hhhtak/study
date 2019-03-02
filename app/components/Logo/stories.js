import { storiesOf } from "@storybook/vue"
import Logo from "./Logo.vue"

storiesOf("Logo", module).add("default", () => ({
  components: { Logo },
  template: `
  <Logo />
  `
}))
