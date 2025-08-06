import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
// 导入 “本地化数据” 插件，提供更多本地化相关的工具（比如获取中文月份名称列表、星期名称列表等）
import localeData from 'dayjs/plugin/localeData'
// 导入 “相对时间” 插件，用于生成 “3 小时前”“2 天前”“1 个月后” 这类相对时间字符串
import relativeTime from 'dayjs/plugin/relativeTime'
// 导入 “星期” 插件，增强对 “星期几” 的处理能力（比如快速获取某日期是星期几、计算距离下一个周一还有几天等）
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
dayjs.extend(weekday)
dayjs.extend(localeData)

export default dayjs
