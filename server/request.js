const base_url = 'http://101.43.72.148:3000'
const request =  ({url,data, method = 'GET',header={}}) => {
 return new Promise((resolve,reject) => {
	 uni.request({
	 	url: base_url + url,
	 	data: data,
	 	method: method,
	 	timeout: 10000,
	 	header: header,
	 	success(res) {
			resolve(res.data)
	 	},
		fail(err) {
			reject(err)
		}
	 })
 })
}
export default request