import Modal from 'components/Modal';

export default {
  component: Modal,
};

export const Default = (args) => <Modal {...args}>test</Modal>;

Default.args = {
  isOpen: true,
  title: 'modal',
};
