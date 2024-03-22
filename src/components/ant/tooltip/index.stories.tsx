import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "antd";
import { Tooltip } from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Ant Design/Tooltip",
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
    arrow: { control: "boolean" },
    autoAdjustOverflow: { control: "boolean" },
    defaultOpen: { control: "boolean" },
    destroyTooltipOnHide: { control: "boolean" },
    fresh: { control: "boolean" },
    trigger: {
      control: "radio",
      options: ["hover", "focus", "click", "contextMenu"],
    },
  },
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Demo: Story = {
  args: {
    placement: "bottom",
    arrow: false,
    autoAdjustOverflow: false,
    defaultOpen: false,
    destroyTooltipOnHide: false,
    fresh: false,
    mouseLeaveDelay: 0.3,
    mouseEnterDelay: 0.1,
  },
  render: (args) => (
    <Tooltip {...args} title="Tooltip">
      <Button style={{ width: 80 }}>Tooltip</Button>
    </Tooltip>
  ),
};
