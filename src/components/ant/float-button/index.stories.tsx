import type { Meta, StoryObj } from "@storybook/react";
import { FloatButton } from ".";
import { CustomerServiceOutlined } from "@ant-design/icons";

const meta: Meta<typeof FloatButton> = {
  title: "Ant Design/FloatButton",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: { control: HTMLElement },
    type: {
      control: "radio",
      options: ["primary", "default"],
    },
    shape: { control: "radio", options: ["circle", "square"] },
  },
  component: FloatButton,
};

export default meta;

type Story = StoryObj<typeof FloatButton>;

export const Demo: Story = {
  args: {
    children: "",
    type: "primary",
    icon: <CustomerServiceOutlined />,
  },
};
