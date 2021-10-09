import Button from "../components/Button.vue";

export default {
  title: "Button",
  component: Button,
};

export const DefaultButton = () => ({
  components: { Button },
  template: `<Button>新华Button</Button>`,
});

DefaultButton.storyName = "default";

export const PrimaryButton = () => ({
  components: { Button },
  template: `<Button>primary 新华Button</Button>`,
});

PrimaryButton.storyName = "primary";
