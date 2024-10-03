import { Button, Flex, Form, Input, Modal, notification } from "antd";
import { MenuContext } from "../../../../providers/MenuProvider/MenuProvider";
import { useContext } from "react";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

type FieldType = {
  categoryName?: string;
};

const CategoryModal = ({ isModalOpen, handleCancel }: Props) => {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const { addCategory } = useContext(MenuContext);
  const openNotification = (type: "success" | "error", description: string) => {
    api[type]({
      message: `Error`,
      description,
      placement: "topRight",
    });
  };
  const onFinish = (values: FieldType) => {
    const [error, success] = addCategory(values.categoryName!);
    if (error) return openNotification("error", error);
    openNotification("success", success!);
    handleCancel();
    form.resetFields();
  };

  return (
    <Modal
      footer={null}
      title="Crear Categoria"
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {contextHolder}
      <Form
        form={form}
        name="category-name"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Nombre"
          name="categoryName"
          layout="vertical"
          rules={[
            {
              required: true,
              message: "Porfavor inserta un nombre de categoria!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Flex gap={4} justify="end">
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button htmlType="submit" variant="solid" color="danger">
              Crear
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
