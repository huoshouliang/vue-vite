<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" style="position: relative">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginforms"
        >
          <!-- label-width="80px"
          label-position="right" -->
          <h1>Hello</h1>
          <h2>欢迎来到</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              type="password"
              show-password="true"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_button"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { gettime } from '@/utils/time'
let userstore = useUserStore()
const $router = useRouter()
const $route = useRoute()
let loginforms = ref()
let loginForm = reactive({ username: '', password: '' })
const login = async () => {
  //async
  console.log('userstore', userstore)
  // await
  await loginforms.value.validate()
  try {
    // localStorage.setItem('TOKEN', 'result.data.token')
    console.log('TOKEN12341234')
    // userstore.token = 'result.data.token'
    await userstore.userlogin(JSON.stringify(loginForm))
    let redirect = $route.query.redirect
    ElNotification({
      type: 'success',
      message: `HI，${gettime()}好`,
      title: '欢迎回来',
    })
    console.log(localStorage.getItem('TOKEN'))
    $router.push({ path: redirect || '/home' })
  } catch (error) {
    console.log(error)
  }
  // userstore.userlogin(loginForm)
  // userstore.userlogin(loginForm)
}
const validatorusername = (rule, value, callback) => {
  if (/^\d{5,10}/.test(value)) {
    callback()
  } else {
    callback(new Error('密码长度至少五位'))
  }
}
//错误
const rules = {
  username: [
    { required: true, message: '用户名不能为控', trigger: 'blur' },
    {
      required: true,
      min: 6,
      max: 10,
      message: '账号长度至少六位',
      trigger: 'change',
    },
  ], //
  password: [
    { required: true, message: '用户名不能为控', trigger: 'blur' },
    { trigger: 'change', validator: validatorusername },
  ],
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/image/background.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  padding: 40px;
  background-color: rgb(175, 175, 175);
  transform: translate(10%, 0%);
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    color: white;
    font-size: 20px;
    margin: 20px;
  }
  .login_button {
    width: 100%;
  }
}
</style>
