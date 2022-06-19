import TextArea from 'components/TextArea';

export default {
  component: TextArea,
};

export const Default = (args) => <TextArea {...args} />;

Default.args = {
  value: 'text',
  onChnage: () => {},
  placeholder: 'description',
};
