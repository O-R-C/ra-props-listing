import data from '../data/etsy.json'

export const etsyData = data.filter((item) => item.state === 'active')

export default etsyData
