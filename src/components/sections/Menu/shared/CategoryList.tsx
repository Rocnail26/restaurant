import { Flex, List } from "antd";

type Props<T> = {
  data: T[];
  nameCategory: string;
  children: ((item: unknown, index: number) => React.ReactNode) | undefined;
};

export const CategoryList = <T,>({
  data,
  children,
  nameCategory,
}: Props<T>) => {
  return (
    <Flex vertical className="w-full border-b-2">
      <h2 className="text-2xl font-bold">{nameCategory}</h2>
      <List
        itemLayout="horizontal"
        className="w-full"
        split={false}
        dataSource={data}
        renderItem={children}
      />
    </Flex>
  );
};
