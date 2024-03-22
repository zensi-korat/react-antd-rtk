import type { Meta } from "@storybook/react";
import { Button } from "antd";
import { useState } from "react";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Ant Design/Modal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    centered: { control: "boolean" },
    closeIcon: { control: "boolean" },
    confirmLoading: { control: "boolean" },
    destroyOnClose: { control: "boolean" },
    focusTriggerAfterClose: { control: "boolean" },
    forceRender: { control: "boolean" },
    keyboard: { control: "boolean" },
    mask: { control: "boolean" },
    maskClosable: { control: "boolean" },
  },
  args: {
    width: 520,
    centered: false,
    closeIcon: false,
    confirmLoading: false,
    destroyOnClose: false,
    focusTriggerAfterClose: false,
    forceRender: false,
    keyboard: false,
    mask: false,
    maskClosable: false,
  },
  component: Modal,
};

export default meta;

export function Demo(args: Array<string>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} {...args}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
