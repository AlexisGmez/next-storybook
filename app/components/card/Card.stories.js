import Card from "./Card";

export default {
  title: "Example/Card",
};

const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
