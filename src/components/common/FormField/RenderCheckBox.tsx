import { Checkbox, Col, Form } from "antd";

import { IRenderCheckBox } from "./types";

export const RenderCheckBox = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  required,
  onChange,
  checked,
  className,
  children,
  value,
  initialValue,
  defaultChecked,
}: IRenderCheckBox) => {
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ""}
      offset={colOffSet}
    >
      <Form.Item
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name={name}
        label={label}
        rules={rules}
        required={required}
        initialValue={initialValue}
      >
        <Checkbox
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          className={className}
        >
          {children}
        </Checkbox>
      </Form.Item>
    </Col>
  );
};
