import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Breadcrumb } from "antd";
import { getLocalizedNavigation } from "../../redux/selectors";

const BreadCrumb = () => {
  const history = useHistory();
  const location = useLocation();
  const strings = useSelector(getLocalizedNavigation);
  const { pathname } = location;
  const pathnames: string[] = pathname.split("/").filter((x: string) => x);

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {pathname !== "/dashboard" ? (
        <>
          <Breadcrumb.Item key={0} onClick={() => history.push("/dashboard")}>
            {strings.getString("dashboard")}
          </Breadcrumb.Item>
          {pathnames.map((path, index) => (
            <Breadcrumb.Item
              key={index + 1}
              onClick={() =>
                index + 1 !== pathnames.length && history.push("/" + path)
              }
            >
              {strings.getString(path)}
            </Breadcrumb.Item>
          ))}
        </>
      ) : (
        <Breadcrumb.Item>{strings.getString("dashboard")}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default BreadCrumb;
