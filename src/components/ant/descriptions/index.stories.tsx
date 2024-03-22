// Import necessary dependencies
import type { Meta } from "@storybook/react";
import { DescriptionsProps } from "antd";
import { Descriptions } from ".";

const meta: Meta<DescriptionsProps> = {
  title: "Ant Design/Descriptions",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bordered: { control: "boolean" },
    layout: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "radio",
      options: ["default", "middle", "small"],
    },
  },
  args: {
    bordered: true,
    layout: "vertical",
    size: "middle",
  },
  component: Descriptions,
};

export default meta;
export function Description(args: DescriptionsProps) {
  const items = [
    {
      key: "1",
      label: "UserName",
      children: "Zhou Maomao",
    },
    {
      key: "2",
      label: "Telephone",
      children: "1810000000",
    },
    {
      key: "3",
      label: "Live",
      children: "Hangzhou, Zhejiang",
    },
    {
      key: "4",
      label: "Remark",
      children: "empty",
    },
    {
      key: "5",
      label: "Address",
      children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
  ];

  return (
    <>
      <Descriptions {...args} title="User Info" items={items} />
    </>
  );
}
