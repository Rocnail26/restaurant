import { DeleteFilled, EditFilled, HolderOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Product } from "../../../../types/Product";
import { shortTitle } from "../../../../utils/shortTitle";
import { useContext } from "react";
import { MenuContext } from "../../../../providers/MenuProvider/MenuProvider";

type Props = {
  product: Product;
  openModal: (product?: Product) => void;
};

export const ItemCollapse = ({ product, openModal }: Props) => {
  const { deleteProduct } = useContext(MenuContext);
  const { price, title, category, id } = product;
  return (
    <div className="text-lg flex items-center justify-between border-b-[2px] py-2">
      <div className="flex items-center gap-4 px-3">
        <HolderOutlined className="text-lg text-gray-400" />
        <p className="text-slate-700 font-bold">{shortTitle(title, 16)}</p>
      </div>
      <div className="flex gap-4">
        <p>${price}</p>
        <div className="flex gap-2">
          <Button onClick={() => openModal(product)}>
            <EditFilled className="text-primary" />
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => deleteProduct(id, category)}
          >
            <DeleteFilled className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
