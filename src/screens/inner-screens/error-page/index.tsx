import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "antd";
import { getLocalizedErrorPage } from "../../../redux/selectors";

const ErrorPage = () => {
  const history = useHistory();
  const strings = useSelector(getLocalizedErrorPage);

  return (
    <div>
      <p>{strings.getString("description")}</p>
      <Button type="link" onClick={() => history.push("/dashboard")}>
        {strings.getString("back")}
      </Button>
    </div>
  );
};

export default ErrorPage;
