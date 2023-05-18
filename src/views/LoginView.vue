<template>
    <div class="login-box">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
    > 
          <h2>demo admin</h2>
          <el-form-item label="username" prop="username">
            <el-input v-model="ruleForm.username" type="text" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
          <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
          />
          </el-form-item>
          <el-form-item>
          <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)"
              >Login</el-button
          >
          <el-button class="loginBtn" @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
</template>


<script lang="ts" setup>
//@ts-ignore
import type { FormInstance, FormRules } from 'element-plus'
import {LoginForm} from '../type/login'
import {login} from '../request/api'

const ruleFormRef = ref<FormInstance>({})

const ruleForm = reactive(new LoginForm())

const router = useRouter()

const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password:[
    { required: true,message: 'Please input passowrd', trigger: 'blur'}
  ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid:any) => {
    if (valid) {
      console.log('submit!')
      login(ruleForm).then(res=>{
        console.log("res:", res)
        localStorage.setItem("token", res.data.token)   
        router.push("/")
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.png");
    background-size: cover  ;
    overflow: hidden;
    text-align: center;
    .demo-ruleForm{
      width: 500px;
      margin:200px auto;
      background-color: white;
      padding:30px;
      border-radius: 30px;;
    }
    .loginBtn{
      width: 48%;
    }
    h2{
      margin:10px auto;
    }
}

</style>