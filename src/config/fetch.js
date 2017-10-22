import axios from 'axios'

let baseURL = 'http://xxmusic.applinzi.com/'
let instance = axios.create({
  baseURL
})

const fetch = async function (url, data = {}, method = 'get') {
  let config = {
    method,
    url,
    params: method === 'get' ? data : {}
  }
  if(method === 'post'){
    config.data = data
  }
  let res = await instance(config)
  console.log(url,res)
  return res.data
}
export const
  getBanner = () => fetch('banner'),
  getRecommendation = () => fetch('personalized'),
  getPrivateContent = () => fetch('personalized/privatecontent'),
  getHighQuality = (limit=6,cat='') => fetch('top/playlist/highquality',{limit,cat})
