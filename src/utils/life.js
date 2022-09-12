import { getLifeGoods } from '@/api/life'

export const GetLifeGoodsList = async () => {
  const { data } = await getLifeGoods()
  return data
}

