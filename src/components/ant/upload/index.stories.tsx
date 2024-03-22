import { Meta, StoryObj } from "@storybook/react";
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { Upload } from ".";

const meta: Meta<typeof Upload> = {
  title: "Ant Design/Upload",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    directory: { control: "boolean" },
    disabled: { control: "boolean" },
    multiple: { control: "boolean" },
    withCredentials: { control: "boolean" },
    listType: { control: "radio", options: ["text", "picture", "picture-card", "picture-circle"] },
  },
  component: Upload,
};

export default meta;

type Story = StoryObj<typeof Upload>;

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const Demo: Story = {
  args: {
    directory: false,
    disabled: false,
    multiple: false,
    withCredentials: false,
    listType: "picture",
    maxCount: 2,
  },
  render: (args) => (
    <Upload {...args} {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  ),
};
