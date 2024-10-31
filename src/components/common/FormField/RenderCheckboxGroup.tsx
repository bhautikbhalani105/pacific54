import { Checkbox, Col, Form } from 'antd';

import { IRenderCheckboxProps } from './types';

export const RenderCheckboxGroup = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  required,
  checkboxName,
  onChange,
  value,
  className,
  optionLabel,
  disabled,
  defaultValues
}: IRenderCheckboxProps) => {
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
    >
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        required={required}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Checkbox.Group
          defaultValue={defaultValues}
          name={checkboxName}
          onChange={onChange}
          value={value}
          className={className}
          disabled={disabled}
        >
          {optionLabel?.map((item: any) => (
            <Checkbox value={item.value} key={item._id}>
              {item.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </Col>
  );
};
