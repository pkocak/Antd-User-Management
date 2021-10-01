import { useDispatch, useSelector } from "react-redux";
import { useLocation, Route } from "react-router-dom";
import { Layout, Avatar, Menu, Dropdown, Button, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ScrollBar from "react-perfect-scrollbar";
import {
  getLocalizedNavigation,
  userSelector,
  languageSelector,
} from "../../redux/selectors";
import { Breadcrumb } from "../../components";
import { logout } from "../../redux/actions/userActions";
import { setLanguage } from "../../redux/actions/systemActions";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";

import { Dashboard, Details, ErrorPage } from "../inner-screens";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const BaseScreen = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const strings = useSelector(getLocalizedNavigation);
  const user = useSelector(userSelector);
  const language = useSelector(languageSelector);

  function handleMenuClick(e: any) {
    if (e.key === "logout") dispatch(logout());
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout" icon={<UserOutlined />}>
        {strings.getString("logout")}
      </Menu.Item>
    </Menu>
  );

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Dropdown className="profile-div" overlay={menu} trigger={["click"]}>
          <Button>
            <Avatar size={31} icon={<UserOutlined />} />
            <div style={{ marginInlineStart: 10, color: "#fff" }}>
              {user?.email}
            </div>
          </Button>
        </Dropdown>
        <Select
          defaultValue={language}
          style={{
            width: 120,
            float: "right",
            marginBlockStart: 15,
            marginInlineEnd: 10,
          }}
          onChange={handleLanguageChange}
        >
          <Option value="tr">Turkish</Option>
          <Option value="en">English</Option>
        </Select>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb />
        <div className="site-layout-content">
          <h2 style={{ marginBottom: 10 }}>
            {strings.getString(pathname.substr(1))}
          </h2>
          <div className="inner-page">
            <ScrollBar>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/error-page" component={ErrorPage} />
            </ScrollBar>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {strings.getString("footer")}
      </Footer>
    </Layout>
  );
};

export default BaseScreen;
