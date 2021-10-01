import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

import { login } from "../../../redux/actions/userActions";
import { getLocalizedAuth, getLocalizedErrors } from "../../../redux/selectors";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const strings = useSelector(getLocalizedAuth);
  const errorStrings = useSelector(getLocalizedErrors);

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(
      login({
        params: values,
        onSuccess: (message) => {
          history.push("/dashboard");
        },
        onError: (msg) => message.error(errorStrings.getString("auth")),
      })
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ minWidth: 400 }}>
        <Form
          name="loginForm"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={strings.getString("email")}
            name="email"
            rules={[
              {
                required: true,
                message: errorStrings.getString("required"),
              },
              {
                type: "email",
                message: errorStrings.getString("email"),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={strings.getString("password")}
            name="password"
            rules={[
              { required: true, message: errorStrings.getString("required") },
              { min: 8, message: errorStrings.getString("password_min") },
              {
                //@ts-ignore
                pattern:
                  // prettier-ignore
                  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
                message: errorStrings.getString("password"),
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              {strings.getString("login")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
