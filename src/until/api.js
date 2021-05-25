import service from "./request"

// 根据经纬度获取位置详情
export function requestAddress(geohash){
  return service.request({
    method:'get',
    url:`position/${geohash}`,
  })
}


// 获取seller
export function requestCategory(){
  return service.request({
    method:'get',
    url:'index_category',
  })
}


// 获取seller
export function requestShops(latitude,longitude){
  return service.request({
    method:'get',
    url:'shops',
    data:{  
      latitude,
      longitude
    }
  })
}
