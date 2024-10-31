import React from "react";

import { Col, Form, Input } from "antd";

import { IRenderInputProps } from "./types";

export const RenderPasswordInput = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  placeholder,
  prefix,
  offSetPull,
  required,
}: IRenderInputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
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
      pull={offSetPull}
    >
      <Form.Item
        name={name ?? ""}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        rules={rules || null}
        required={required}
      >
        <Input.Password
          placeholder={placeholder}
          size="large"
          prefix={prefix ?? null}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </Form.Item>
    </Col>
  );
};
