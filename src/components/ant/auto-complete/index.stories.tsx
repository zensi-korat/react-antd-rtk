import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from ".";
import { AutoCompleteProps } from "antd";

const meta: Meta<typeof AutoComplete> = {
  title: "Ant Design/Autocomplete",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "radio", options: ["outlined", "borderless", "filled"] },
    status: { control: "radio", options: ["error", "warning"] },
    disabled: { control: "boolean" },
    allowClear: { control: "boolean" },
    autoFocus: { control: "boolean" },
    placeholder: { control: "text" },
    backfill: { control: "boolean" },
    defaultActiveFirstOption: { control: "boolean" },
    defaultOpen: { control: "boolean" },
  },
  component: AutoComplete,
};

export default meta;

const autooptions: AutoCompleteProps["options"] = [
  { value: "Burns Bay Road", label: "Burns Bay Road" },
  { value: "Lurns Lay Road", label: "Lurns Lay Road" },
  { value: "Yiminghe", label: "Yiminghe" },
  { value: "Disabled", disabled: true, label: "Disabled" },
];

type Story = StoryObj<typeof AutoComplete>;

export const Demo: Story = {
  args: {
    // options: [
    //   { value: "Burns Bay Road" },
    //   { value: "Lurns Lay Road" },
    //   { value: "Yiminghe" },
    //   { value: "Disabled", disabled: true },
    // ],
    dropdownMatchSelectWidth: 300,

    variant: "outlined",
    disabled: false,
    allowClear: false,
    autoFocus: false,
    backfill: false,
    defaultActiveFirstOption: false,
    defaultOpen: true,
  },
  render: (args) => (
    <AutoComplete
      {...args}
      placeholder="Autocomplete an option"
      style={{ width: 200 }}
      options={autooptions}
      filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  ),
};
