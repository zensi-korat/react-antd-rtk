import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from ".";

// const { Item } = Breadcrumb;

const meta: Meta<typeof Breadcrumb> = {
  title: "Ant Design/Breadcrumb",
  tags: ["autodocs"],

  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Demo: Story = {
  args: {
    separator: "/",
    items: [
      {
        title: "Home",
      },
      {
        title: <a href="#">Application Center</a>,
      },
      {
        title: <a href="#">Application List</a>,
      },
      {
        title: "An Application",
      },
    ],
  },
};
