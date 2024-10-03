import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramOutlined,
  MailFilled,
  PhoneFilled,
  TikTokOutlined,
} from "@ant-design/icons";
import { Divider, Flex } from "antd";

export const MenuFooter = () => {
  return (
    <Flex
      justify="center"
      className="w-full bg-stone-950 text-xs text-gray-200"
    >
      <Flex vertical className="max-w-44 p-2">
        <p className="leading-4 mb-2">
          Siguenos en nuestras <br />
          redes sociales
        </p>
        <Flex gap={6}>
          <a href="" className="rounded-[50%]">
            <FacebookFilled className="rounded-[50%]" />
          </a>
          <a href="">
            <InstagramOutlined />
          </a>
          <a href="">
            <TikTokOutlined />
          </a>
        </Flex>
        <Divider type="horizontal" className="bg-white my-2" />
        <h3 className="text-sm font-semibold mb-2">Tacos al azadero</h3>
        <Flex gap={2} vertical>
          <a href="" className="flex gap-1">
            <PhoneFilled rotate={90} />
            <p>+58 4165458026</p>
          </a>
          <a href="" className="flex gap-1">
            <MailFilled />
            <p>elasadero@gmail.com</p>
          </a>
          <a href="" className="flex gap-1">
            <EnvironmentFilled />
            <p>Av. Bolicad calle Arvelor</p>
          </a>
        </Flex>
        <Divider type="horizontal" className="bg-white mt-2 mb-1" />
        <p className="text-center text-[.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </Flex>
    </Flex>
  );
};
