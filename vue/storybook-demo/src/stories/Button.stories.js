import Button from "../components/Button.vue";

export default {
  title: "Button",
  component: Button,
};

// export const DefaultButton = () => ({
//   components: { Button },

//   template: `<Button @click="onClick">新华Button</Button>`,

//   methods: {
//     onClick: () => {
//       alert("click");
//     },
//   },
// });
export const DefaultButton = () => ({
  components: { Button },
  template: `<Button @click="onClick">新华Button</Button>`,
});

DefaultButton.storyName = "default";
// DefaultButton.story = {
//   name: "default",
// };
