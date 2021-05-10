<template>
  <div class="container">
    <div class="login-container">
      <ur-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        label-width="4.1rem"
        auto-complete="on"
        label-position="left"
      >
        <p class="title">UnrealUI-Admin</p>

        <ur-form-item prop="username" label="用户名">
          <ur-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </ur-form-item>

        <ur-form-item prop="password" label="密码　">
          <ur-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </ur-form-item>

        <ur-button class="login_button" :loading="loading" @click.native.prevent="handleLogin">Login</ur-button>
      </ur-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch('login', this.loginForm)
            .then(() => {
              this.$router.push('index');
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;

  .login-container {
    position: relative;
    top: 15rem;
    width: 18rem;
    height: 15rem;
    padding: 1.5rem 2rem 1rem;
    border: 0.0625rem solid #d1d9e6;
    border-radius: 0.55rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  
    .title {
      margin: 0 0 1.5rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .login_button {
    width: 8rem;
    display: block;
    margin: 2rem auto 0;
  }
}
</style>