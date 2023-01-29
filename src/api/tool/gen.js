import request from '@/utils/request'

// 查询生成表数据
export function listTable(query) {
  return request({
    url: '/gen/list',
    method: 'get',
    params: query
  })
}
// 查询db数据库列表
export function listDbTable(query) {
  return request({
    url: '/gen/db/list',
    method: 'get',
    params: query
  })
}

// 查询前后端设置
export function getlanguage() {
  return request({
    url: '/gen/getlanguage',
    method: 'get',
  })
}

// 查询表详细信息
export function getGenTable(tableId) {
  return request({
    url: '/gen/' + tableId,
    method: 'get'
  })
}

// 修改代码生成信息
export function updateGenTable(data) {
  return request({
    url: '/gen',
    method: 'put',
    data: data
  })
}

// 导入表
export function importTable(data) {
  return request({
    url: '/gen/importTable',
    method: 'post',
    params: data
  })
}

// 设置前后端
export function setLanguage(backEnd, frontEnd) {
  return request({
    url: '/gen/setLanguage/' + backEnd + '/' + frontEnd,
    method: 'get',
  })
}

// 预览生成代码
export function previewTable(tableId) {
  return request({
    url: '/gen/preview/' + tableId,
    method: 'get'
  })
}

// 删除表数据
export function delTable(tableId) {
  return request({
    url: '/gen/' + tableId,
    method: 'delete'
  })
}

// 生成代码（自定义路径）
export function genCode(tableName) {
  return request({
    url: '/gen/genCode/' + tableName,
    method: 'get'
  })
}

// 同步数据库
export function synchDb(tableName) {
  return request({
    url: '/gen/synchDb/' + tableName,
    method: 'get'
  })
}
