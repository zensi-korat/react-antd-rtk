import type { Meta, StoryObj } from "@storybook/react";
import { Button, message } from "antd";
import { Message } from ".";

const meta: Meta<typeof Message> = {
  title: "Ant Design/Message",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  component: Message,
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Demo: Story = {
  args: {},
  render: () => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: "success",
        content: "This is a success message",
        duration: 4,
      });
    };

    const error = () => {
      messageApi.open({
        type: "error",
        content: "This is an error message",
      });
    };

    const warning = () => {
      messageApi.open({
        type: "warning",
        content: "This is a warning message",
      });
    };

    return (
      <>
        {contextHolder}
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </>
    );
  },
};
