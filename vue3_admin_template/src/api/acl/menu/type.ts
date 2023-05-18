//数据类型定义
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//菜单数据与按钮数据的ts类型
export interface Permisstion {
  id?: number
  createTime: string
  updateTime: string
  pid: number
  name: string
  code: null
  toCode: null
  type: number
  status: null
  level: number
  children?: PermisstionList
  select: boolean
}
export type PermisstionList = Permisstion[]
//菜单接口返回的数据类型
export interface PermisstionResponseData extends ResponseData {
  data: PermisstionList
}

//添加与修改菜单携带的参数的ts类型
export interface MenuParams {
  id?: number //ID
  code: string //权限数值
  level: number //几级菜单
  name: string //菜单的名字
  pid: number //菜单的ID
}
