import { Divider, Flex } from "antd";
import { MenuFooter } from "./shared/MenuFooter";
import elAsadero from "../../../assets/el_asadero.jpg";
import { CategoryList } from "./shared/CategoryList";
import CategoryItem from "./shared/CategoryItem";
import { Product } from "../../../types/Product";
import { useContext } from "react";
import { MenuContext } from "../../../providers/MenuProvider/MenuProvider";

export const MenuSection = () => {
  const { categories } = useContext(MenuContext);
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      className="bg-primary w-screen md:p-6 lg:w-1/2 lg:p-6 lg:h-screen"
    >
      <Flex
        vertical
        align="center"
        className="pt-4 relative w-[95%] max-w-[700px] bg-white"
      >
        <Flex vertical align="center" className="w-[100%]">
          <img src={elAsadero} alt="" className="w-[175px] h-[175px] mb-4" />
          <Flex vertical className="text-center w-[100%]">
            <h2 className="text-gray-950 text-3xl font-extrabold mb-2">
              Nuestro menu
            </h2>
            <p className="text-xs leading-4 font-semibold">
              Bienvenido a nuestro restaurante donde <br /> le vamos a ofrecer
              lo mejor en comida mexicana al mejor <br /> precio
            </p>
            <Divider className="bg-slate-400 mt-3 mb-0" />
            <Flex
              vertical
              align="center"
              className="h-[280px] pt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary/70 scrollbar-track-gray-100"
              gap={16}
            >
              {Object.entries(categories).map(([name, products]) => {
               return products.length > 0 &&  <CategoryList key={name} nameCategory={name} data={products}>
                {(item) => <CategoryItem product={item as Product} />}
              </CategoryList>
              })}
            </Flex>
          </Flex>
        </Flex>
        <MenuFooter />
      </Flex>
    </Flex>
  );
};
