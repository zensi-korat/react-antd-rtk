import type { Meta, StoryObj } from "@storybook/react";
import { Cascader } from ".";

const meta: Meta<typeof Cascader> = {
  title: "Ant Design/Cascader",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["small", "medium", "large"] },
    placement: {
      control: "radio",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
    },
    variant: {
      control: "radio",
      options: ["outlined", "borderless", "filled"],
    },
    status: {
      control: "radio",
      options: ["error", "warning"],
    },
    loading: { control: "boolean" },
    allowClear: { control: "boolean" },
    autoClearSearchValue: { control: "boolean" },
    autoFocus: { control: "boolean" },
    changeOnSelect: { control: "boolean" },
    disabled: { control: "boolean" },
    showSearch: { control: "boolean" },
    multiple: { control: "boolean" },
    expandTrigger: {
      control: "radio",
      options: ["hover", "click"],
    },
  },
  component: Cascader,
};

export default meta;

type Story = StoryObj<typeof Cascader>;

export const Demo: Story = {
  args: {
    options: [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hangzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake",
              },
            ],
          },
        ],
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men",
              },
            ],
          },
        ],
      },
    ],
    placeholder: "Please select",
    defaultValue: ["Zhejiang"],
    loading: false,
    allowClear: false,
    autoClearSearchValue: false,
    autoFocus: false,
    changeOnSelect: false,
    disabled: false,
    showSearch: false,
    multiple: false,
    expandTrigger: "click",
    variant: "outlined",
  },
};
