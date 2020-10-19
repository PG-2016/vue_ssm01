<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      :label-position="labelPosition"
      label-width="80px"
      :model="formdata"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="login()" class="login-button" type="primary"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 顶部对齐
      labelPosition: "top",
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      console.log(this);
      //   this.$http.post("login",this.formdata).then((res) => {
      //       console.log(res);
      //   })
      const res = await this.$http.post("login", this.formdata);
      console.log(res);
      const {
        data: {
          data,
          meta: { msg, status },
        },
      } = res;
      if (status === 200) {
        this.$router.push({
            name: "Home"
        })
      } else {
        // element消息提示
        this.$message({
          message: "登录失败，账号信息错误！",
          type: "warning",
        });
        console.log("error!");
      }
    },
  },
};
</script>

<style>
.login-wrap {
  background-color: #324152;
  /* 垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login-form {
  background-color: #ffffff;
  width: 400px;
  /* 圆角 */
  border-radius: 5px;
  padding: 30px;
}
.login-button {
  width: 100%;
}
</style>