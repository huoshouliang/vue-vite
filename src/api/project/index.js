import request from '@/utils/request'
const API = {
  TRADEMARK_URL: '/news/pinpai/',
  pinpaidata_url: '/news/pinpaidata/',
  pinpai_gai_data_url: '/news/pinpaigaidata/',
  delete_url: '/news/deleteurl/',
}
export const reqhasTrademark = (page, limit) =>
  //查
  request.get(API.TRADEMARK_URL + `${page}/${limit}/`)
export const pinpaidata = (data) => {
  console.log('pinpaidata', data['id'])
  if (data['id']) {
    // 改
    return request.post(API.pinpai_gai_data_url, JSON.stringify(data))
  } else {
    // 增
    return request.put(API.pinpaidata_url, JSON.stringify(data))
  }
}
export const deleteurl = (id) => {
  return request.delete(API.delete_url + `${id}/`)
}
