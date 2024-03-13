import { Col, Row } from "antd";
import "./home.css";
import MyCalendar from "./myCalendar/myCalendar";
import SideBar from "./sideBar/sideBar";
import TimeDisplayer from "../../components/timeDisplayer/timeDisplayer";

export default function Home() {
  return (
    <Row>
      <Col span={6}>
        <TimeDisplayer />
        <SideBar />
      </Col>

      <Col span={12}>
        <MyCalendar />
      </Col>
    </Row>
  );
}
