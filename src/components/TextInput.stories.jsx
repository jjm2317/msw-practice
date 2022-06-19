import TextInput from 'components/TextInput';

export default {
  component: TextInput,
};

export const Default = (args) => <TextInput {...args} />;

Default.args = {
  value: 'text',
  onChnage: () => {},
  placeholder: 'title',
};
