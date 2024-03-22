import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "antd";
import { Result } from ".";

const meta: Meta<typeof Result> = {
  title: "Ant Design/Result",
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "radio",
      options: ["success", "error", "info", "warning", "404", "403", "500"],
    },
  },

  component: Result,
};

export default meta;

type Story = StoryObj<typeof Result>;

export const Demo: Story = {
  args: {
    status: "success",
    title: "Successfully Purchased Cloud Server ECS!",
    subTitle: "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",
  },
  render: (args) => (
    <Result
      {...args}
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  ),
};
