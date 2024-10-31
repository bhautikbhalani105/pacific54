import { useCallback } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Row } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../../utils/constants/routes';

import AuthLayout from '../../../../components/common/AuthLayout';
import { RenderPasswordInput, RenderTextInput } from '../../../../components/common/FormField';
import Meta from '../../../../components/common/Meta';

import { FormTitle } from '../../../../modules/Auth/Auth.Styled';
import { authApi } from '../../../../services/auth';
import { authStore } from '../../../../services/store/auth';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { isLoggedIn, actions } = authStore((state) => state);

  const onSubmit = useCallback(async () => {
    try {
      const res = await authApi.signIn({
        email: 'rootadmin@yopmail.com',
        password: '123456'
      });
      actions.authSuccess(res);
      navigate(ROUTES.dashboard);
    } catch (error) {
      console.log('error: ', error);
      alert((error as Error)?.message);
    }
  }, [navigate, actions]);

  if (isLoggedIn) {
    return <Navigate to={ROUTES.dashboard} />;
  }

  return (
    <>
      <Meta title="Demo App - Sign In" />
      <AuthLayout>
        <FormTitle>Login</FormTitle>
        <Form onFinish={onSubmit} form={form} autoComplete="off" className="signInForm">
          <Row gutter={[0, 30]}>
            <RenderTextInput
              col={{ xs: 24 }}
              name="email"
              placeholder="Enter your email id here..."
              // label="Email ID"
              allowClear="allowClear"
              size="large"
              prefix={<UserOutlined />}
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
            <RenderPasswordInput
              col={{ xs: 24 }}
              name="password"
              required={true}
              placeholder="Enter your password here..."
              type="password"
              size="middle"
              prefix={<LockOutlined />}
              rules={[
                () => ({
                  validator: (_: any, value: string) => {
                    if (!value) {
                      return Promise.reject(new Error('Please enter your password'));
                    } else if (/^\S{3,}$/.test(value) && /^.{6,16}$/.test(value)) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error('Password must be 6-16 characters long and not contain spaces')
                      );
                    }
                  }
                })
              ]}
            />
            <Col xs={24}>
              <Button block={true} type="primary" size="middle" htmlType="submit">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </AuthLayout>
    </>
  );
};

export default SignIn;
