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
  getMusic = (url)=> fetch(url),
  getBanner = () => fetch('banner'),
  getRecommendation = () => fetch('personalized'),//推荐歌单
  getPrivateContent = () => fetch('personalized/privatecontent'),//独家放送
  getHighQuality = (limit=6,cat='') => fetch('top/playlist/highquality',{limit,cat}),//精品歌单，cat值为'华语','欧美','流行','古风'等
  getPlaylistDetail = (id) => fetch('/playlist/detail',{id}),//歌单详情
  getMusicUrl = (id) => fetch('/music/url',{id:id.join(',')})//获取url,id为[]
