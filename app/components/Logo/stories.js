import { storiesOf } from "@storybook/vue"
import Logo from "./Logo.vue"

storiesOf("Logo", module).add("story as a template", () => ({
  components: { Logo },
  template: `
  <Logo />
  `
}))
