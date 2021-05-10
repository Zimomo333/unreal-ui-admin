import request from '../utils/request'

export function getTableData() {
  return request({
    url: '/table',
    method: 'get'
  })
}