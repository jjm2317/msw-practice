import Button from 'components/Button';

export default {
  component: Button,
};

const Template = (args) => <Button {...args} >버튼</Button>;

export const Default = Template.bind({});

export const Large = Template.bind({});

Large.args = {
  size: "large"
};

