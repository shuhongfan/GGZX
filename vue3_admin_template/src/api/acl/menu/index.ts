import request from '@/utils/request'
import type { PermisstionResponseData, MenuParams } from './type'
//枚举地址
enum API {
  //获取全部菜单与按钮的标识数据
  ALLPERMISSTION_URL = '/admin/acl/permission',
  //给某一级菜单新增一个子菜单
  ADDMENU_URL = '/admin/acl/permission/save',
  //更新某一个已有的菜单
  UPDATE_URL = '/admin/acl/permission/update',
  //删除已有的菜单
  DELETEMENU_URL = '/admin/acl/permission/remove/',
}
//获取菜单数据
export const reqAllPermisstion = () =>
  request.get<any, PermisstionResponseData>(API.ALLPERMISSTION_URL)
//添加与更新菜单的方法
export const reqAddOrUpdateMenu = (data: MenuParams) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATE_URL, data)
  } else {
    return request.post<any, any>(API.ADDMENU_URL, data)
  }
}

//删除某一个已有的菜单
export const reqRemoveMenu = (id: number) =>
  request.delete<any, any>(API.DELETEMENU_URL + id)
