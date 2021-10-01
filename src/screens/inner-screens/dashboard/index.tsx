import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col, Row, Table } from "antd";
import { Bar } from "@ant-design/charts";
import { ColumnsType } from "antd/lib/table";
import { EditOutlined } from "@ant-design/icons";
import {
  dataSelector,
  getLocalizedDashboard,
  userRoleSelector,
} from "../../../redux/selectors";
import { DataObject } from "../../../types/objects";

const Dashboard = () => {
  const history = useHistory();
  const data = useSelector(dataSelector);
  const strings = useSelector(getLocalizedDashboard);
  const userRole = useSelector(userRoleSelector);

  const counts = {};
  data?.forEach(function (x) {
    //@ts-ignore
    counts[x.city] = (counts[x.city] || 0) + 1;
  });
  const countKeys = Object.keys(counts);
  const chartData = countKeys.map((key, index) => {
    //@ts-ignore
    return { city: key, count: counts[key] };
  });

  let config = {
    data: chartData,
    xField: "count",
    yField: "city",
    barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
  };

  const columns: ColumnsType<DataObject> =
    userRole === "user"
      ? [
          {
            title: strings.getString("username"),
            dataIndex: "username",
            sorter: (a: DataObject, b: DataObject) =>
              a.username > b.username ? -1 : 1,
            defaultSortOrder: "descend",
          },
          {
            title: strings.getString("name"),
            dataIndex: "firstname",
            sorter: (a: DataObject, b: DataObject) =>
              a.firstname > b.firstname ? -1 : 1,
          },
          {
            title: strings.getString("surname"),
            dataIndex: "lastname",
            sorter: (a: DataObject, b: DataObject) =>
              a.lastname > b.lastname ? -1 : 1,
          },
          {
            title: strings.getString("phone"),
            dataIndex: "phone",
            sorter: (a: DataObject, b: DataObject) => a.phone - b.phone,
          },
          {
            title: strings.getString("city"),
            dataIndex: "city",
            sorter: (a: DataObject, b: DataObject) =>
              a.city > b.city ? -1 : 1,
          },
        ]
      : [
          {
            title: strings.getString("username"),
            dataIndex: "username",
            sorter: (a: DataObject, b: DataObject) =>
              a.username > b.username ? -1 : 1,
            defaultSortOrder: "descend",
          },
          {
            title: strings.getString("name"),
            dataIndex: "firstname",
            sorter: (a: DataObject, b: DataObject) =>
              a.firstname > b.firstname ? -1 : 1,
          },
          {
            title: strings.getString("surname"),
            dataIndex: "lastname",
            sorter: (a: DataObject, b: DataObject) =>
              a.lastname > b.lastname ? -1 : 1,
          },
          {
            title: strings.getString("phone"),
            dataIndex: "phone",
            sorter: (a: DataObject, b: DataObject) => a.phone - b.phone,
          },
          {
            title: strings.getString("city"),
            dataIndex: "city",
            sorter: (a: DataObject, b: DataObject) =>
              a.city > b.city ? -1 : 1,
          },
          {
            title: strings.getString("city"),
            dataIndex: "city",
            sorter: (a: DataObject, b: DataObject) =>
              a.city > b.city ? -1 : 1,
          },
          {
            title: strings.getString("action"),
            dataIndex: "id",
            align: "center",
            render: (id) => (
              <EditOutlined
                style={{ cursor: "pointer" }}
                onClick={() => history.push(`/details?${id}`)}
              />
            ),
          },
        ];

  return (
    <Row>
      <Col lg={24} xl={18} style={{ paddingInlineEnd: 50 }}>
        <Table columns={columns} dataSource={data} />
      </Col>
      <Col lg={24} xl={6}>
        <Bar {...config} />
      </Col>
    </Row>
  );
};

export default Dashboard;
