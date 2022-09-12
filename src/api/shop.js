import request from '../utils/request'
export function getShop() {
    return request.get('./Json/shop.json');
 }
 