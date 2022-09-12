import request from '../utils/request'
export function getLifeGoods() {
    return request.get('./Json/life_goods.json');
 }