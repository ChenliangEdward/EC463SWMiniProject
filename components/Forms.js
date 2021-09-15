import { useState } from "react";
import { Input, Form, Button } from "antd";
import axios from "axios";

const Forms = ({ label = "", placeholder = "Type here", button = "Confirm" }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios({
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ms4cOOUjiau1qvcL3RqMhabA9Fp4zYTNgWAEi97E&query=${values.text}`,
      method: "get",
    }).then((res) => {
      setLoading(false);
      console.log(res.data);
    });
  };

  return (
    <Form onFinish={onFinish} layout="inline">
      <Form.Item
        label={label}
        name="text"
        rules={[{ required: true, message: "Type here" }]}
      >
        <Input placeholder={placeholder} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          {button}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Forms;