import Mock from "mockjs";

type MsgType = string | number;

const success = (msg: MsgType = "", data?: any) => {
  return {
    code: 0,
    msg,
    data
  };
};

const error = (code: number, msg: MsgType = "", data?: any) => {
  return { code, msg, data };
};

interface PostResInterface {
  body: string;
  type: "POST";
  url: string;
}

Mock.mock(/\/api\/user\/login/, loginRes);

function loginRes(req: PostResInterface) {
  const { user_name, password } = JSON.parse(req.body);
  if (user_name === "zhangqi" && String(password) === "123") {
    return success();
  } else {
    return error(1001, "用户名或密码错误");
  }
}
