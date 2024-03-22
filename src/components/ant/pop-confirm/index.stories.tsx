import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "antd";
import { Popconfirm } from ".";

const meta: Meta<typeof Popconfirm> = {
  title: "Ant Design/Popconfirm",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "radio",
      options: [
        "bottom",
        "bottomLeft",
        "bottomRight",
        "top",
        "topLeft",
        "topRight",
        "leftTop",
        "left",
        "leftBottom",
        "rightTop",
        "right",
        "rightBottom",
      ],
    },
    disabled: { control: "boolean" },
    showCancel: { control: "boolean" },
  },
  args: {
    disabled: false,
    showCancel: false,
  },
  component: Popconfirm,
};

export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const Demo: Story = {
  args: {
    placement: "top",
    title: "Delete the task",
    description: "Are you sure to delete this task?",
    okText: "Yes",
    cancelText: "No",
  },
  render: (args) => (
    <Popconfirm {...args}>
      <Button danger>Delete</Button>
    </Popconfirm>
  ),
};
