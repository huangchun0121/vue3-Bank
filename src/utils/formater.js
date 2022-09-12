import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

dayjs.locale('zh-cn')
/**
 * @method 相对时间
 */
export const getRelativeTime = time => {
  return dayjs(time).from(dayjs())
}