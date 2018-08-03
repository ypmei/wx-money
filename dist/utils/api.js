const api = {
  request: (options = {}) => {
    return new Promise((resolve, reject) => {
      options = Object.assign(options, {
        success: (res) => {
          console.log.apply(console, ['request', options.method||'GET', options.url, JSON.stringify(options.data || {})])
          console.log.apply(console, ['return', JSON.stringify(res)])
          if(res.statusCode === 200){
            if(res.data.code === 0){
              resolve(res.data)
            }else{
              reject(res.data)
            }
          }else{
            reject({
              code: -1002,
              msg: '网络错误',
              data: {}
            })
          }
        },
        fail: (err) => {
          reject({
            code: -1001,
            msg: err.message,
            data: {}
          })
        }
      })
      wx.request(options);
    })
  }
}

module.exports = api
