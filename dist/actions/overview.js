const api = require('../utils/api')
const app = getApp()

export const fetchAppList = ({userId}) => {
  return api.request({
    url: `${app.globalData.urlPrefix}/getAppList`,
    data: {
      userId,
      limit: 20,
      offset: 0
    }
  })
}
