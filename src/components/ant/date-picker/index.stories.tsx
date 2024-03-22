import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta: Meta<typeof DatePicker> = {
  title: "Ant Design/DatePicker",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    format: { control: "radio", options: ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"] },
    mode: { control: "radio", options: ["time", "date", "month", "year", "decade"] },
    picker: { control: "radio", options: ["date", "week", "month", "quater", "year"] },
    placement: { control: "radio", options: ["bottomLeft", "bottomRight", "topLeft", "topRight"] },
    size: { control: "radio", options: ["large", "middle", "small"] },
    variant: { control: "radio", options: ["outlined", "borderless", "filled"] },
    status: { control: "radio", options: ["error", "warning"] },
    disabled: { control: "boolean" },
    showWeek: { control: "boolean" },
    multiple: { control: "boolean" },
    allowClear: { control: "boolean" },
    autoFocus: { control: "boolean" },
    inputReadOnly: { control: "boolean" },
  },
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Demo: Story = {
  args: {
    disabled: false,
    allowClear: false,
    autoFocus: true,
    inputReadOnly: false,
    multiple: false,
    showWeek: false,
    mode: "date",
    picker: "week",
    placement: "topLeft",
    status: "",
  },
};
