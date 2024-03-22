import type { Meta, StoryObj } from "@storybook/react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Ant Design/Avatar",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    draggable: { control: "boolean" },
    shape: { control: "radio", options: ["circle", "square"] },
    size: { control: "radio", options: ["large", "small", "default"] },
  },
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Demo: Story = {
  args: {
    children: <UserOutlined />,
    draggable: true,
  },
};
