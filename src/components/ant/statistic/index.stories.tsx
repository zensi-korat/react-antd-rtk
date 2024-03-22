import type { Meta, StoryObj } from "@storybook/react";
import { LikeOutlined } from "@ant-design/icons";
import { Statistic } from ".";

const meta: Meta<typeof Statistic> = {
  title: "Ant Design/Statistic",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
  },
  component: Statistic,
};

export default meta;

type Story = StoryObj<typeof Statistic>;

export const Demo: Story = {
  args: {
    loading: false,
    suffix: "$",
    value: 1128,
  },
  render: (args) => <Statistic {...args} title="Feedback" prefix={<LikeOutlined />} />,
};
