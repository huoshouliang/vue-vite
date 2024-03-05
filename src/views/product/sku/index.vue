<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <el-select
            v-model="value1"
            size="small"
            placeholder="Activity zone"
            clearable
            @change="value1_data"
            :disabled="!updata_show"
          >
            <el-option
              v-for="i in userstore.id1_data"
              :key="i.id"
              :label="i.data"
              :value="i.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类">
          <el-select
            v-model="value2"
            size="small"
            placeholder="Activity zone"
            clearable
            @change="value2_data"
            :disabled="!updata_show"
          >
            <el-option
              v-for="i in userstore.id2_data"
              :key="i.id"
              :label="i.data"
              :value="i.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="三级分类">
          <el-select
            v-model="value3"
            size="small"
            placeholder="Activity zone"
            clearable
            @change="value3_data"
            :disabled="!updata_show"
          >
            <el-option
              v-for="i in userstore.id3_data"
              :key="i.id"
              :label="i.data"
              :value="i.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin: 10px 0px">
      <div v-show="updata_show">
        <el-button
          :disabled="disabled"
          type="primary"
          icon="Plus"
          @click="updata_show = false"
        >
          添加平台属性
        </el-button>
        <el-table border :data="table" style="margin: 10px 0px">
          <el-table-column
            label="序号"
            type="index"
            align="center"
          ></el-table-column>
          <el-table-column
            label="属性名称"
            align="center"
            prop="name"
          ></el-table-column>
          <el-table-column label="属性值名称" align="center" prop="propname">
            <template v-slot="{ row }">
              <el-tag
                v-for="(data, key) in row.propname"
                type="primary"
                :key="key"
                style="margin: 5px"
              >
                {{ data.name }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template v-slot="{ row }">
              <el-button
                type="primary"
                size="small"
                icon="Edit"
                @click="Operation_updata(row)"
              />
              <el-popconfirm
                :title="`您确定要删除${row.name}?`"
                width="250px"
                icon="Delete"
                @confirm="removeTradeMark(table, $index)"
              >
                <template #reference>
                  <el-button type="primary" size="small" icon="Delete" />
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-show="!updata_show">
        <el-form :inline="true">
          <el-form-item label="属性名称">
            <el-input
              placeholder="请您输入属性名称"
              v-model="shuxingmingcheng"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          :disabled="shuxingmingcheng == ''"
          type="primary"
          size="default"
          icon="Plus"
          @click="addAttrValue"
        >
          添加属性值
        </el-button>
        <el-button type="primary" size="default" @click="cancel">
          取消
        </el-button>
        <el-table border :data="table_updata" style="margin: 10px 0px">
          <el-table-column
            label="序号"
            type="index"
            align="center"
          ></el-table-column>
          <el-table-column label="属性名称" prop="name" align="center">
            <template #default="{ row, $index }">
              <el-input
                v-if="row.edit"
                :ref="(vc) => (inputRef[$index] = vc)"
                class="w-50 m-2"
                size="small"
                placeholder="请输入属性值名称"
                v-model="row.name"
                @blur="toLook(row, $index)"
              />
              <div v-else @click="toEditDiv(row, $index)">
                {{ row.name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="属性值操作" prop="propname" align="center">
            <template v-slot="{ row, $index }">
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
                @confirm="removeTradeMark(table_updata, $index)"
              >
                <template #reference>
                  <el-button type="primary" size="small" icon="Delete" />
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          size="default"
          :disabled="table_updata.length == 0"
        >
          保存
        </el-button>
        <el-button type="primary" size="default" @click="cancel">
          取消
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import useUserStore from '@/store/modules/sku'
import { ElMessage } from 'element-plus'
let userstore = useUserStore()
onMounted(() => {
  userstore.id1_datashuchu()
  console.log(1234)
})
const table = ref([
  {
    propname: {
      propname1: { name: 'propname1' },
      propname2: { name: 'propname2' },
      propname3: { name: 'propname3' },
    },
    name: 'name',
  },
])
const table_updata = ref([])
const shuxingmingcheng = ref('')
const updata_show = ref(true)
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const disabled = ref(true)
const value1_data = () => {
  userstore.id2_datashuchu(value1)
  disabled.value = true
  console.log(disabled.value)
  value2.value = ''
  value3.value = ''
}
const value2_data = () => {
  userstore.id3_datashuchu(value1)
  disabled.value = true
  console.log(disabled.value)
  value3.value = ''
}
const value3_data = () => {
  disabled.value = false
  console.log(disabled.value)
}
//取消按钮回调
const cancel = () => {
  updata_show.value = true
  shuxingmingcheng.value = ''
  table_updata.value = []
}
//添加属性按钮回调
const addAttrValue = () => {
  table_updata.value.push({
    name: 'name',
    edit: true,
  })
  nextTick(() => {
    //响应式数据发生变化获取更新的dom
    console.log(inputRef.value[table_updata.value.length - 1])
    inputRef.value[table_updata.value.length - 1].focus()
  })
}
const put = (row) => {
  row.edit = !row.edit
}

const toEditDiv = (row, $index) => {
  console.log(row, $index)
  row.edit = true
  nextTick(() => {
    //响应式数据发生变化获取更新的dom
    console.log(inputRef.value[$index])
    inputRef.value[$index].focus()
  })
  // inputRef.value.focus()
}
const Operation_updata = (row) => {
  updata_show.value = false
  console.log(row.propname['propname1'])
  for (const x in row.propname) {
    console.log(row.propname[x])
    table_updata.value.push(row.propname[x])
  }
  shuxingmingcheng.value = row.name
  console.log(table_updata)
}
const toLook = (row, $index) => {
  if (row.name.trim() == '') {
    table_updata.value.splice($index, 1)
    ElMessage({
      type: 'error',
      message: '属性值不能为空',
    })
    return
  }
  let repeat = table_updata.value.find((item) => {
    if (item != row) {
      return item.name == row.name
    }
  })
  console.log(repeat)
  if (repeat) {
    table_updata.value.splice($index, 1)
    ElMessage({
      type: 'error',
      message: '属性值不能重复',
    })
    return
  }
  row.edit = false
}
const inputRef = ref([])
const removeTradeMark = (table, $index) => {
  console.log(table)
  table.splice($index, 1)
}
</script>

<style scoped>
.el-form-item {
  margin: 10px;
}
.el-select {
  width: 120px;
}
</style>
