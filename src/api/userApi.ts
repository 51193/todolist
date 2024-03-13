import axios from "axios";

/**
 *
 * @param username 用户名
 * @param password 用户密码
 * @param remember 是否记住
 * @param onSuccess 请求成功后的处理函数
 * @param onError 请求出错后的处理函数
 */
export const userLogin = (
  username: string,
  password: string,
  remember: boolean,
  onSuccess: () => void,
  onError: (error: any) => void
) => {
  try {
    axios
      .post("/user/login", {
        name: username,
        password: password,
      })
      .then((response) => {
        if (remember === true) {
          localStorage.setItem("token", response.data["token"]);
          setTimeout(() => {
            localStorage.setItem("token", "");
          }, 1000 * 60 * 60 * 7);
        } else {
          sessionStorage.setItem("token", response.data["token"]);
        }
        onSuccess();
      });
  } catch (error) {
    onError(error);
  }
};

export const userCheck = (onSuccess: () => void) => {
  axios.post("/user/check").then((response) => {
    if (response.data["state"] === true) {
      onSuccess();
    }
  });
};
