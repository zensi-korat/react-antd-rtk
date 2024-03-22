import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from ".";

const meta: Meta<typeof ColorPicker> = {
  title: "Ant Design/ColorPicker",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "radio", options: ["bottom", "bottomLeft", "bottomRight", "top", "topLeft", "topRight"] },
    defaultFormat: { control: "radio", options: ["rgb", "hex", "hsb"] },
    format: { control: "radio", options: ["rgb", "hex", "hsb"] },
    size: { control: "radio", options: ["large", "middle", "small"] },
    trigger: { control: "radio", options: ["hover", "click"] },
    disabled: { control: "boolean" },
    allowClear: { control: "boolean" },
    disabledAlpha: { control: "boolean" },
    destroyTooltipOnHide: { control: "boolean" },
  },
  component: ColorPicker,
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Demo: Story = {
  args: {
    defaultValue: "#1677ff",
    disabled: false,
    allowClear: false,
    disabledAlpha: false,
    destroyTooltipOnHide: false,
    placement: "bottomLeft",
  },
};
