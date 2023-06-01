import KRequest from ".."

export function getHomeGoodPriceData() {
  return KRequest.get({
     url: "/home/goodprice"
  })
}