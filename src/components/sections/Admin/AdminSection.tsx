import { Button, Flex, Space } from "antd";
import CategoryCollapse from "./shared/CategoryCollapse";
import { ItemCollapse } from "./shared/ItemCollapse";
import { useModal } from "../../../hooks/useModal";
import { useContext } from "react";
import CategoryModal from "./shared/CategoryModal";
import ProductModal from "./shared/ProductModal";
import { MenuContext } from "../../../providers/MenuProvider/MenuProvider";
import { Product } from "../../../types/Product";

const AdminSection = () => {
  const { isModalOpen, handleCancel, showModal } = useModal();
  const {
    isModalOpen: isProductModalOpen,
    handleCancel: handleCancelProduct,
    showModal: showProductModal,
  } = useModal();
  const { categories, clearSelectedProduct, selectProduct } =
    useContext(MenuContext);
  const closeProductModal = () => {
    clearSelectedProduct();
    handleCancelProduct();
  };
  const openProductModal = (product?: Product) => {
    if (product) selectProduct(product);
    showProductModal();
  };

  return (
    <Flex vertical justify="start" align="center" className="h-[750px] w-screen px-8 lg:w-1/2 overflow-hidden">
      <Button
        variant="text"
        color="default"
        className="text-4xl font-bold p-10 text-slate-800 mb-10"
        onClick={() => openProductModal()}
      >
        Añadir producto
      </Button>
      <Space
        direction="vertical"
        align="center"
        className="justify-start max-h-[70%] p-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary/70 scrollbar-track-gray-100 md:p-2"
      >
        {Object.entries(categories).map(([name, products]) => (
          <CategoryCollapse key={name} categoryName={name}>
            {products.map((product) => (
              <ItemCollapse
                key={product.id}
                openModal={openProductModal}
                product={product}
              />
            ))}
          </CategoryCollapse>
        ))}
      </Space>
      <Button
        variant="text"
        color="danger"
        className="underline decoration-1 font-semibold text-base mt-auto"
        onClick={showModal}
      >
        Agregar nueva categoria
      </Button>
      <CategoryModal handleCancel={handleCancel} isModalOpen={isModalOpen} />
      <ProductModal
        handleCancel={closeProductModal}
        isModalOpen={isProductModalOpen}
      />
    </Flex>
  );
};

export default AdminSection;
