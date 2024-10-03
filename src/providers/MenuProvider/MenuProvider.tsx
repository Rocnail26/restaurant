import { createContext, useState } from "react";
import { Categories } from "../../types/Categories";
import { Product } from "../../types/Product";
import { v4 } from "uuid";

const food = {
  Arepas: [
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      price: 5.99,
      title: "Arepa Reina Pepiada",
      subtitle: "Arepa rellena de pollo y aguacate",
      category: "Arepas",
    },
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0852",
      price: 4.99,
      title: "Arepa de Queso",
      subtitle: "Arepa rellena de queso blanco",
      category: "Arepas",
    },
  ],
  Tacos: [
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0853",
      price: 3.99,
      title: "Taco al Pastor",
      subtitle: "Taco con carne de cerdo marinada",
      category: "Tacos",
    },
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0854",
      price: 4.49,
      title: "Taco de Pollo",
      subtitle: "Taco con pollo a la parrilla",
      category: "Tacos",
    },
  ],
  Sushi: [
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0855",
      price: 12.99,
      title: "Sushi Roll de Salmón",
      subtitle: "Roll de sushi con salmón fresco",
      category: "Sushi",
    },
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0856",
      price: 14.99,
      title: "Sushi Roll de Atún",
      subtitle: "Roll de sushi con atún fresco",
      category: "Sushi",
    },
  ],
};

type ContextProps = {
  categories: Categories;
  deleteProduct: (id: string, category: string) => void;
  addCategory: (categoryName: string) => [string?, string?];
  selectedProduct?: Product;
  selectProduct: (product: Product) => void;
  clearSelectedProduct: () => void;
  addProduct: (product: Partial<Product>) => void;
};

export const MenuContext = createContext({} as ContextProps);

type Props = {
  children: React.ReactNode;
};

export const MenuProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<Categories>(food);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  const deleteProduct = (id: string, category: string) => {
    setCategories((old) => {
      const products = { ...categories }[category].filter(
        (product) => product.id != id
      );
      return { ...old, [category]: products };
    });
  };

  const addCategory = (categoryName: string): [string?, string?] => {
    const name = categoryName.trim();
    const categoriesName = Object.keys(categories).map((item) =>
      item.toLowerCase()
    );
    if (categoriesName.includes(name)) return ["esta categoria ya existe"];
    setCategories((oldCategories) => {
      const newCategories = { ...oldCategories, [name]: [] };
      return newCategories;
    });
    return [undefined, "categoria agregada"];
  };

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const addProduct = (product: Partial<Product>) => {
    if (product.id) {
      setCategories((old) => {
        return {
          ...old,
          [product.category!]: old[product.category!].map((item) =>
            item.id == product.id ? (product as Product) : item
          ),
        };
      });
      return;
    }

    const newProduct = {
      ...product,
      id: v4(),
    };

    setCategories((old) => {
      const newCategories = {
        ...old,
        [product.category!]: [newProduct as Product, ...old[product.category!]],
      };
      return newCategories;
    });
  };

  const clearSelectedProduct = () => {
    setSelectedProduct(undefined);
  };

  return (
    <MenuContext.Provider
      value={{
        categories: categories,
        addCategory,
        deleteProduct,
        selectedProduct,
        clearSelectedProduct,
        selectProduct,
        addProduct,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
