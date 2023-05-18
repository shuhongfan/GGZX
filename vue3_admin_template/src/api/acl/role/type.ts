export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//职位数据类型
export interface RoleData {
  id?: number
  createTime?: string
  updateTime?: string
  roleName: string
  remark?: null
}

//全部职位的数组的ts类型
export type Records = RoleData[]
//全部职位数据的相应的ts类型
export interface RoleResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    orders: []
    optimizeCountSql: boolean
    hitCount: boolean
    countId: null
    maxLimit: null
    searchCount: boolean
    pages: number
  }
}

//菜单与按钮数据的ts类型
export interface MunuData {
  id: number
  createTime: string
  updateTime: string
  pid: number
  name: string
  code: string
  toCode: string
  type: number
  status: null
  level: number
  children?: MenuList
  select: boolean
}
export type MenuList = MunuData[]

//菜单权限与按钮权限数据的ts类型
export interface MenuResponseData extends ResponseData {
  data: MenuList
}
