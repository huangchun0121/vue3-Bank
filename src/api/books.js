import request from '../utils/request'
export function getBooks() {
    return request.get('./Json/books.json');
 }
 