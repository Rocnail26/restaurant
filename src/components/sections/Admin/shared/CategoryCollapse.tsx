import { Collapse, ConfigProvider, Flex } from "antd";
import React from "react";
import { CaretUpOutlined, HolderOutlined } from "@ant-design/icons";
import { CollapsibleType } from "antd/es/collapse/CollapsePanel";

type Props = {
  children: React.ReactNode;
  categoryName: string;
};

const CategoryCollapse = ({ children, categoryName }: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerPadding: "0px 0px",
            contentPadding: "0px",
          },
        },
      }}
    >
      <Collapse
        className="rounded-none w-[90vw] lg:max-w-[400px]"
        expandIconPosition="end"
        collapsible="header"
        expandIcon={(e) => <CollapseButton paneProps={e} />}
        ghost={true}
        items={[
          {
            key: "1",
            label: (
              <div className="gap-6 text-gray-400 bg-gray-50 flex h-10 border border-r-0">
                {" "}
                <HolderOutlined className="text-2xl border-r-2 p-2" />{" "}
                <p className="font-bold text-3xl ">{categoryName}</p>
              </div>
            ),
            children: (
              <Flex vertical className="first:border-t-2">
                {children}
              </Flex>
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default CategoryCollapse;

type PropsButton = {
  paneProps: {
    isActive?: boolean;
    header?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    showArrow?: boolean;
    forceRender?: boolean;
    disabled?: boolean;
    extra?: React.ReactNode;
    collapsible?: CollapsibleType;
  };
};

const CollapseButton = ({ paneProps }: PropsButton) => {
  const { isActive } = paneProps;
  return (
    <div className="border-l-2 p-[.5rem] border h-10 ml-[-.9rem] my-auto flex text-xl bg-gray-50 ">
      <CaretUpOutlined rotate={isActive ? 180 : 0} />
    </div>
  );
};
