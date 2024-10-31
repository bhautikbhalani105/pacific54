import { Col, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const RenderTextArea = (props: any) => {
  return (
    <Col {...props.col}>
      <Form.Item
        name={props.name}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={props.label}
        rules={props.rules}
        tooltip={props.tooltip}
      >
        <TextArea
          showCount={props.showCount}
          disabled={props.disabled}
          className={props.className}
          cols={props.cols}
          rows={props.rows}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          allowClear={props.allowClear}
        />
      </Form.Item>
    </Col>
  );
};
