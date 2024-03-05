<template>
  <div><h1>attr管理</h1></div>
  <el-card class="box-card">
    <!-- <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template> -->
    <el-button type="primary" size="default" icon="Plus" @click="undata">
      添加品牌
    </el-button>
    <el-table :data="data" border="true" style="margin: 10px 0px">
      <!-- 
        table
        ---border:可以设置表格纵向是否有边框
        table-column
        ---laber:某一个列表
        ---width:设置这列宽度
        ---align:设置这一列对齐方式
       -->
      <el-table-column
        prop="id"
        width="80px"
        align="center"
        type="selection"
      ></el-table-column>
      <el-table-column
        prop="id"
        label="序号"
        width="80px"
        align="center"
        type="index"
      ></el-table-column>
      <el-table-column prop="name" label="品牌名称"></el-table-column>
      <el-table-column prop="logo" label="品牌LOGO">
        <template v-slot="{ row }">
          <img :src="row.avatar" />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template v-slot="{ row }">
          <el-button
            type="primary"
            size="small"
            icon="Edit"
            @click="put(row)"
          />
          <el-popconfirm
            :title="`您确定要删除${row.name}?`"
            width="250px"
            icon="Delete"
            @confirm="removeTradeMark(row.id)"
          >
            <template #reference>
              <el-button type="primary" size="small" icon="Delete" />
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
    <!-- <template #footer>Footer content</template> -->
    <!-- 分页器组件
      v-model:current-page：设置分页器当前页码
      v-model:page-size：设置每一页展示数据条数
      page-sizes:用于设置下拉菜单数据
      background:设置分页器按钮的背景色
      layout：可以设置分页器六个子组件布局调整 ->给到右边
     -->
    <el-pagination
      v-model:current-page="pageno"
      v-model:page-size="limit"
      :page-sizes="[3, 5, 7, 9]"
      small="true"
      background="true"
      layout=" prev, pager, next, jumper,->,sizes, total"
      :total="total"
      @size-change="size"
      @current-change="login"
    />
  </el-card>
  <Dialog
    v-model:modelValue="dialogVisible"
    @login="login"
    v-model:form="form"
  ></Dialog>
</template>

<script setup>
import Dialog from './Dialog.vue'
import { ref, onMounted } from 'vue'
import useUserStore from '@/store/modules/pinpai'
onMounted(() => {
  login()
})
const form = ref({
  id: '',
  name: '',
  avatar: '',
})
const put = (row) => {
  dialogVisible.value = true
  form.value.name = row.name
  form.value.id = row.id
  form.value.avatar = row.avatar
}
const undata = () => {
  dialogVisible.value = true
  form.value.name = ''
  form.value.id = ''
  form.value.avatar = ''
}
const dialogVisible = ref(false)
let userstore = useUserStore()
const pageno = ref(1)
//当前页码
const limit = ref(3)
const data = ref()
const total = ref(400)
//每一页展示数据条数
const login = async () => {
  console.log('login')
  let reqhasTrademark = await userstore.reqhasTrademark(
    pageno.value,
    limit.value,
  )
  console.log('reqhasTrademark', reqhasTrademark)
  data.value = reqhasTrademark.data
  total.value = reqhasTrademark.limit
}
const size = async () => {
  pageno.value = 1
  login()
}
//
const removeTradeMark = async (id) => {
  await userstore.delete_url(id)
  size()
}
</script>

<style lang="stylus" scoped></style>
