import { get } from '@/common/utils/http'

export const getLineData = async(params = {}) => {
  const url = './mock/DynamicLineChart.json'
  return get(url, params)
}

export const getBarData = async(params = {}) => {
  const url = './mock/DynamicBarChart.json'
  return get(url, params)
}

export const getBubbleData = async(params = {}) => {
  const url = './mock/DynamicBubbleChart.json'
  return get(url, params)
}