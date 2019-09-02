import { Component, Vue } from "vue-property-decorator";
import { loginReq } from "../../api/user";
import Cookies from "js-cookie";

@Component
export default class LoginPage extends Vue {
  public user_name: string = "";
  public password: string | number = "";

  public login() {
    loginReq({ user_name: this.user_name, password: this.password }).then(
      res => {
        const {
          data: { code, msg }
        } = res;
        if (code === 0) {
          Cookies.set("token", "value");

          this.$router.push("/home");
        } else {
          console.error(msg);
        }
      }
    );
  }

  protected render() {
    return (
      <div class="login-page">
        用户名：
        <input type="text" v-model={this.user_name} />
        <br />
        密码：
        <input
          type="password"
          v-model={this.password}
          style="margin-left: 10px;"
        />
        <br />
        <button style="margin-left: 10px;" on-click={this.login}>
          登录
        </button>
      </div>
    );
  }
}
