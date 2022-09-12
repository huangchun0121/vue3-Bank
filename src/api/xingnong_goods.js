import request from '../utils/request'
export function getGoods() {
    return request.get('./Json/xingnong_goods.json');
 }
 
 export function getGoods_select() {
    return request.get('./Json/goods_select.json');
 }