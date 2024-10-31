import { ArrowDownOutlined } from '@ant-design/icons';
import { Col, Form, Select } from 'antd';

import { IRenderSelectProps } from './types';

export const RenderSelectInput = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  required,
  onChange,
  value,
  className = '',
  optionLabel,
  disabled,
  onSelect,
  showSearch,
  mode,
  placeholder,
  allowClear,
  defaultValue,
  prefixIcon = '',
  suffixIcon
}: IRenderSelectProps) => {
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
      <div className={`customSelect ${prefixIcon && 'selectWithIcon'} ${className ?? className}`}>
        <Form.Item
          name={name}
          label={label}
          rules={rules}
          required={required}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Select
            value={value}
            onSelect={onSelect}
            showSearch={showSearch}
            mode={mode}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
            defaultValue={defaultValue}
            onChange={onChange}
            optionFilterProp="children"
            suffixIcon={
              <div className="selectIcons">
                {prefixIcon ? (
                  <>
                    <span className="prefixIcon">{prefixIcon}</span>
                    <span className="selectArrowIcon">{suffixIcon || <ArrowDownOutlined />}</span>
                  </>
                ) : (
                  <span className="selectArrowIcon">{suffixIcon || <ArrowDownOutlined />}</span>
                )}
              </div>
            }
          >
            {optionLabel?.map((item: any) => (
              <Select.Option key={item._id} value={item._id} label={item.name}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </Col>
  );
};
