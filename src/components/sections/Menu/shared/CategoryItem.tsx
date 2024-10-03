import { Flex, List } from "antd";
import { Product } from "../../../../types/Product";

type Props = {
  product: Product;
};

const CategoryItem = ({ product }: Props) => {
  const { title, subtitle, price } = product;
  return (
    <List.Item className="border-none">
      <Flex gap={12} className="text-xl w-full px-2">
        <Flex
          vertical
          justify="space-between"
          align="center"
          className="font-bold text-start"
        >
          <h3 className="text-nowrap">{title}</h3>
          <span className="text-sm">{subtitle}</span>
        </Flex>
        <Flex gap={16} className="overflow-hidden flex-shrink">
          {Array.from({ length: 80 }, (_v, i) => i).map((i) => (
            <p key={i as number}>.</p>
          ))}
        </Flex>
        <div className="block font-bold text-nowrap">$ {price}</div>
      </Flex>
    </List.Item>
  );
};

export default CategoryItem;
