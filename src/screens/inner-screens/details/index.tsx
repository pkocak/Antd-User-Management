import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import {
  getUserDetails,
  updateUser,
} from "../../../redux/actions/staticActions";
import { UserParams } from "../../../types/params";
import {
  getLocalizedDetails,
  getLocalizedErrors,
} from "../../../redux/selectors";

const Details = () => {
  const form = useRef<any>();
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const strings = useSelector(getLocalizedDetails);
  const errorStrings = useSelector(getLocalizedErrors);
  const [user, setUser] = useState<UserParams>({
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: 0,
    city: "",
  });

  useEffect(() => {
    dispatch(
      getUserDetails({
        params: { id: search.substr(1) },
        onSuccess: (message, payload) => payload && setUser(payload),
        onError: (message) => {},
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    form.current.resetFields();
  }, [user]);

  const onFinish = (values: UserParams) => {
    dispatch(
      updateUser({
        params: { ...values, id: search.substr(1) },
        onSuccess: (msg) => {
          message.success(strings.getString(msg));
          history.push("/dashboard");
        },
        onError: (msg) => message.error(strings.getString(msg)),
      })
    );
  };

  return (
    <Form
      ref={form}
      name="detailsForm"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={user}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label={strings.getString("username")}
        name="username"
        rules={[
          {
            required: true,
            message: errorStrings.getString("required"),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={strings.getString("name")}
        name="firstname"
        rules={[
          {
            required: true,
            message: errorStrings.getString("required"),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={strings.getString("surname")}
        name="lastname"
        rules={[
          {
            required: true,
            message: errorStrings.getString("required"),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={strings.getString("phone")}
        name="phone"
        rules={[
          {
            required: true,
            message: errorStrings.getString("required"),
          },
          {
            min: 10,
            message: errorStrings.formatString(
              errorStrings.getString("min"),
              10
            ) as string,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={strings.getString("city")}
        name="city"
        rules={[
          {
            required: true,
            message: errorStrings.getString("required"),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginInlineEnd: 20 }}
        >
          {strings.getString("update")}
        </Button>
        <Button htmlType="button" onClick={() => history.goBack()}>
          {strings.getString("cancel")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Details;
