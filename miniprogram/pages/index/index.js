Page({
  data: {
    disabled:true,
    num: 0,
    numtext: '点击开始按钮-获取位置',
    timer: null, // 定时器开关
    longitude: "无", // 经度
    latitude: '无' // 纬度
  },
  getPhoneNumber (e) {
    let self = this;
    wx.cloud.callFunction({
      name: 'getPhoneNumber',
      data: {
        weRunData: wx.cloud.CloudID(e.detail.cloudID),
      }
    }).then(res => {
      console.log('获取用户手机号-开始')
      let phoneNumber = res.result.phoneNumber;
      wx.setStorageSync('phone', phoneNumber);
      // self.getLocationChange(phoneNumber)
      self.gotcontent(phoneNumber);
      wx.getLocation({
        type: 'wgs84',
        altitude: true,
        isHighAccuracy: true,
        highAccuracyExpireTime: 3500,
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          self.setData({
            disabled:false,
            latitude: latitude,
            longitude: longitude
          })
  
          self.rangeAddHandle(latitude, longitude, phoneNumber)
  
        }
      })
      setTimeout(() => {
        self.setintervalHandle(phoneNumber);
      }, 1000);
     
    }).catch(err => {
      console.error(err);
    });
  },

  // 定时器
  setintervalHandle (phoneNumber) {
    console.log("开启定时器");
    this.setData({ numtext: `3秒后-获取位置` });
    let num = 0;
    this.data.timer = setInterval(() => {
      this.getLocationChange(phoneNumber);
      num += 1;
      this.setData({
        disabled:false,
        num: num,
        numtext: `第${num}次-获取位置`
      });
    }, 300000);
  },

  // 清除定时器
  clearIntervalHandle () {
    console.log("清除定时器");
    clearInterval(this.data.timer)
    wx.cloud.callFunction({
      name: 'finish',
      data: {
        phone:  wx.getStorageSync('phone')
      }
    }).then((res) => {
      this.setData({
        disabled:true,
        num: 0,
        numtext: `结束-获取位置`,
        latitude: `最后一次纬度：${this.data.latitude}`,
        longitude: `最后一次经度：${this.data.longitude}`
      })
    })
    
  },

  getLocationChange (phoneNumber) {
    let self = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      isHighAccuracy: true,
      highAccuracyExpireTime: 3500,
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log('经度', longitude)
        console.log('纬度', latitude)
        self.setData({
          latitude: latitude,
          longitude: longitude
        })

        self.rangeAddHandle(latitude, longitude, phoneNumber)

      }
    })
  },

  rangeAddHandle(latitude, longitude, phoneNumber){
    wx.cloud.callFunction({
        name: 'rangeAdd',
        data: {
          longitude: latitude,
          latitude: longitude,
          phone: phoneNumber
        }
      }).then((res) => {

      })
  },

  /**
   * 填写工作日志
   */
  gotcontent(phoneNumber){
    wx.navigateTo({
      url: '/pages/cont/index?phone'+ phoneNumber,
      success: function (res) {}
    })
  }
})