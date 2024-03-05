import { defineStore } from 'pinia'
// import { ElMessage } from 'element-plus'

let useUserStore = defineStore('id_data', {
  state: () => {
    return {
      id1: '',
      id1_data: [],
      id2: '',
      id2_data: [],
      id3: '',
      id13data: [],
    }
  },
  actions: {
    id1_datashuchu() {
      this.id1_data = [
        { id: '1', data: 'test1' },
        { id: '2', data: 'test2' },
        { id: '3', data: 'test3' },
        { id: '4', data: 'test4' },
      ]
      this.id2 = ''
      this.id3 = ''
      this.id2_data = []
      this.id3_data = []
      console.log('id1')
    },
    id2_datashuchu(id) {
      this.id1 = id
      this.id2_data = [
        { id: this.id1 + '_1', data: 'test' + this.id1 + '_1' },
        { id: this.id1 + '_2', data: 'test' + this.id1 + '_2' },
        { id: this.id1 + '_3', data: 'test' + this.id1 + '_3' },
        { id: this.id1 + '_4', data: 'test' + this.id1 + '_4' },
      ]
      this.id3 = ''
      this.id3_data = []
      console.log('id2')
    },
    id3_datashuchu(id) {
      this.id2 = id
      this.id3_data = [
        {
          id: this.id1 + '_' + this.id2 + '_1',
          data: 'test' + this.id1 + '_' + this.id2 + '_1',
        },
        {
          id: this.id1 + '_' + this.id2 + '_2',
          data: 'test' + this.id1 + '_' + this.id2 + '_2',
        },
        {
          id: this.id1 + '_' + this.id2 + '_3',
          data: 'test' + this.id1 + '_' + this.id2 + '_3',
        },
        {
          id: this.id1 + '_' + this.id2 + '_4',
          data: 'test' + this.id1 + '_' + this.id2 + '_4',
        },
      ]
      console.log('id3')
    },
    //异步
  },
  getters: {},
})
export default useUserStore
