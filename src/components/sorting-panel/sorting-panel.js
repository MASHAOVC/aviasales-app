import styles from './sorting-panel.module.scss';
import { Flex, Radio } from 'antd';

const buttonStyle = {
  width: 168,
  height: 50,
  fontSize: 12,
};

export const SortingPanel = () => {
  return (
    <Flex>
      <Radio.Group defaultValue="the cheapest">
        <Radio.Button style={buttonStyle} value="the cheapest">
          САМЫЙ ДЕШЁВЫЙ
        </Radio.Button>
        <Radio.Button style={buttonStyle} value="the fastest">
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button style={buttonStyle} value="optimal">
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </Flex>
  );
};
