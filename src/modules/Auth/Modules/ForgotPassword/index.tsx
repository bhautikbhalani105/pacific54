import { useCallback } from 'react';

import { Button, Col, Form, Row } from 'antd';

import AuthLayout from '../../../../components/common/AuthLayout';
import { RenderTextInput } from '../../../../components/common/FormField';
import Meta from '../../../../components/common/Meta';

import { FormTitle } from '../../../../modules/Auth/Auth.Styled';

const SignIn: React.FC = () => {
  const [form] = Form.useForm();
  const onSubmit = useCallback(async () => {
    console.log('onSubmit');
  }, []);

  return (
    <>
      <Meta title="Demo App - Forgot Password" />
      <AuthLayout>
        <FormTitle>Forgot Password ?</FormTitle>
        <Form onFinish={onSubmit} form={form} autoComplete="off" className="forgotPwdForm">
          <Row gutter={[0, 30]}>
            <RenderTextInput
              col={{ xs: 24 }}
              name="email"
              placeholder="Enter your email id here..."
              label="Email ID"
              allowClear="allowClear"
              size="large"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email'
                },
                {
                  type: 'email',
                  message: 'Please enter valid email'
                }
              ]}
            />
            <Col xs={24}>
              <Button block={true} type="primary" size="middle" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </AuthLayout>
    </>
  );
};

export default SignIn;
