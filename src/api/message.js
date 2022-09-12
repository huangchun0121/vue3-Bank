import request from '../utils/request'
export function getMessage() {
    return request.get('./Json/message.json');
 }
 