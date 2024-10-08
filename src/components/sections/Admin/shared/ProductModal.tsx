import { Button, Flex, Form, Input, Modal, notification, Select } from "antd";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../../../providers/MenuProvider/MenuProvider";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

type FieldType = {
  id?: string;
  title: string;
  subtitle: string;
  category: string;
  price: number;
};

const defaultValues = {
  price: 0,
  title: "",
  subtitle: "",
  category: "",
};

const ProductModal = ({ handleCancel, isModalOpen }: Props) => {
  const [form] = Form.useForm();
  const [api,contextHolder] = notification.useNotification();
  const { categories, clearSelectedProduct, selectedProduct, addProduct } =
    useContext(MenuContext);
  const selectCategories = Object.keys(categories).map((category) => ({
    value: category,
    label: category,
  }));
  useEffect(() => {
    form.setFieldsValue(selectedProduct ? selectedProduct : defaultValues);
  }, [form, selectedProduct]);
  const openNotification = (type: "success" | "error", description: string) => {
    api[type]({
      message: `Notificación`,
      description,
      placement: "topRight",
    });
  };
  const onFinish = (values: FieldType) => {
    const id = selectedProduct ? selectedProduct.id : undefined;
    addProduct({ ...values, id });
    openNotification("success", `Producto ${selectedProduct ? "editado" : "creado"}`)
    form.resetFields();
    clearSelectedProduct();
    handleCancel()
  };
  

  return (
    <Modal
      footer={null}
      title="Crear Producto"
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {contextHolder}
      <Form
        form={form}
        name="product-name"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Nombre"
          name="title"
          layout="vertical"
          rules={[
            {
              required: true,
              message: "Porfavor inserta un nombre al producto!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Subtitulo"
          name="subtitle"
          layout="vertical"
          rules={[
            {
              required: true,
              message: "Porfavor inserta un subtitulo",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Flex justify="space-between" gap={4}>
          <Form.Item<FieldType>
            label="Categoria"
            name={"category"}
            rules={[
              {
                required: true,
                message: "Porfavor escoge una categoria",
              },
            ]}
          >
            <Select
              placeholder="Categoria"
              style={{ width: 120 }}
              options={selectCategories}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Precio"
            name={"price"}
            rules={[
              {
                required: true,
                message: "Porfavor agrega el precio al productos",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
        </Flex>
        <Form.Item>
          <Flex gap={4} justify="end">
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button htmlType="submit" variant="solid" color="danger">
              {selectedProduct ? "Editar" : "Crear"} 
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;
