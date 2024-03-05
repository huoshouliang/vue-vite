<template>
  <!-- 
    对话框组件
    v-model：属性用户控制对话框的显示于隐藏
    title：设置对话框左上角标题
     -->
  <el-dialog
    :model-value="modelValue"
    :title="prpos.form.id ? '修改品牌' : '添加品牌'"
    width="80%"
  >
    <el-form :model="inputValue" :rules="rules" ref="formref">
      <el-form-item label="姓名" label-width="80px" prop="name">
        <el-input v-model="inputValue.name" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="logo" label-width="80px" prop="avatar" required>
        <!-- before-upload:上传文件之前的钩子
          on-success:文件上传成功时的钩子
       -->
        <el-upload
          class="avatar-uploader"
          action="http://localhost:5173/api/news/uploadhandle/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="inputValue.avatar"
            :src="inputValue.avatar"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <!-- 底部的具名插槽：footer -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="increasePageNo">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import useUserStore from '@/store/modules/pinpai'
import { ElMessage } from 'element-plus'

import { ref, defineProps, defineEmits } from 'vue'

let userstore = useUserStore()
let prpos = defineProps(['modelValue', 'form'])
let $emit = defineEmits(['update:modelValue', 'update:form', 'login'])
const inputValue = ref(prpos.form)
const increasePageNo = () => {
  const increasedPageNo = false
  $emit('update:modelValue', increasedPageNo)
  //清除内容和校验，复位
  formref.value.resetFields()
}

const confirm = async () => {
  let checkresult = await formref.value.validate()
  //校验form对象中所有组件，对证据表单进行校验
  console.log(checkresult)
  let result = await userstore.pinpaidata_url(prpos.form)
  if (result.code == 200) {
    console.log(result.code)
    const increasedPageNo = false
    $emit('update:modelValue', increasedPageNo)
    $emit('login')
    ElMessage({
      message: '添加成功',
      type: 'success',
    })
    //清除内容和校验，复位
    formref.value.resetFields()
  } else {
    ElMessage({
      message: '添加失败',
      type: 'success',
    })
  }
}
// const inputname = (value) => {
//   inputValue.value.name=
//   $emit('update:name', inputValue.value)
// }
const handleAvatarSuccess = (response) => {
  // imageUrl.value = URL.createObjectURL(uploadFile.raw)
  inputValue.value.avatar = response.data
  $emit('update:form', inputValue.value)
  //图片上传成功清除掉图片校验结果
  formref.value.clearValidate('avatar')
}
//约束文件大小和类型
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('上传格式不正确  ')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('上传文件大小小于4m')
    return false
  }
  return true
}
//品牌自定义校验规则方法
const validatorTmName = (rule, value, callback) => {
  console.log(String(value).length)
  if (String(value).length >= 2) {
    callback()
  } else {
    callback(new Error('品牌名称位数大于等于两位'))
  }
}
//获取组件实例
let formref = ref()
//品牌logo图片的自定义校验规则方法
const validatorLogUrl = (rule, value, callback) => {
  if (value) {
    callback()
  } else {
    callback(new Error('LOGO图片未上传'))
  }
}
let rules = {
  name: [
    // required:字段必须校验
    //trigger:代表触发校验规则世纪[blur,change]
    { required: true, trigger: 'blur', validator: validatorTmName },
  ],
  avatar: [
    // required:字段必须校验
    { required: true, validator: validatorLogUrl },
  ],
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
