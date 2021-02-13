Component({
  ready: function (params) {
    this.initData();
  },
  data: {
    //警务站
    agencyNameType: 0,
    agencyNameArr: [],
    uploadStaus: '点击上传',
    imgUrl: '',
    imgUr2: '',
    imgUr3: '',
    imgUr4: '',
    radioItems: [{
        name: '是',
        value: '1',
        checked: true
      },
      {
        name: '否',
        value: '0'
      }
    ],
    //提交数据
    formData: {

      agencyName: '',
      phone: '', //手机号
      jobNumber: '', // 在岗辅警（人数）
      userName: '', // 值班站长
      isJob: 0, // 值班人员是否在岗在位（0是 1否）
      isNotJob: 0, // 值班人员是否存在脱岗(0=是,1=否)
      isIdentical: 0, // 在岗人员是否与值班表一致(0=是,1=否)
      existIssue: '', // 存在问题
      implementSituation: '', // 整改落实情况

      goodsIsTidy: 0, // 装备及桌面物品摆放是否整齐
      beddingIsTidy: 0, // 备勤室床铺、被褥是否整齐干净（0是
      tablewareIsTidy: 0, // 厨房碗筷摆放、储物柜整洁度是否达标
      healthIsStandard: 0, // 便民警务站周边卫生是否达标
      healthIsBlind: 0, // 便民警务站内部是否存在卫生死角
      existIssue1: '', // 存在问题
      implementSituation1: '', // 整改落实情况

      clothesIsStandard: 0, //值班人员着装是否规范（0是
      nailsIsStandard: 0, //民辅警是否存在留指甲、染头发等情况（0是
      existIssue2: '', //存在问题
      implementSituation2: '', //整改落实情况


      videoIsHealth: 0, //视频会议室卫生及桌面摆放是否合格（0是
      videoIsJob: 0, //视频会议室值班人员是否在岗在位（0是
      videoIsPhone: 0, //视频会议室是否存在将手机带入情况（0是
      videoIsBedding: 0, //视频会议室着装是否规范（0是
      videoIsLeader: 0, //视频会议室带班领导汇报情况是否达标（0是
      existIssue4: '', //存在问题
      implementSituation4: '', //整改落实情况


      cardIsHealth: 0, //巡逻车整体卫生情况是否达标（0是
      cardIsEquipment: 0, //巡逻车是否按照要求配备灭火器、阻车钉等必要装备（0是
      cardIsSituation: 0, //巡逻车车况是否良好（0是
      cardIsRepair: 0, //巡逻车是否存在损坏未修理的地方
      existIssue3: '', //存在问题
      implementSituation3: '', //整改落实情况


      meetingIsMeeting: 0, //是否严格落实每日召开晨会（0是
      meetingIsJob: 0, //晨会是否传达近期重要工作安排（0是
      meetingIsFake: 0, //晨会记录是否详实、无造假情况（0是
      meetingIsLanguage: 0, //是否学习国家通用语言（0是
      meetingIsFile: 0, //是否落实学习会议及文件
      existIssue5: '', //存在问题
      implementSituation5: '', //整改落实情况


      allIsAdvance: 0, //是否制定符合本站实际的推进表（0是
      allIsContent: 0, //站长是否能够熟练掌握授课内容
      allIsLog: 0, //每日训练日志是否填写完整（0是
      allIsGrasp: 0, //民辅警是否对已训练内容掌握熟练（0是
      allIsLanguage: 0, //国语学习是否制定推进计划（0是
      allIsWrite: 0, //国语学习笔记是否按照推进计划书写（0是
      existIssue6: '', //存在问题
      implementSituation6: '', //整改落实情况


      electronIsGrasp: 0, //站长及内勤是否熟练掌握电子台账录入（0是
      electronIsInput: 0, //各类电子台账是否做到及时录入（0是
      electronIsError: 0, //各类电子台账是否存在录入数据错误（0是
      existIssue11: '', // 存在问题
      implementSituation11: '', //整改落实情况


      briefingIsWrite: 0, //内勤是否能够较好完成简报情报撰写（0是
      briefingIsSign: 0, //简报情报信息是否按照要求进行上报（0是
      briefingIsSituation: '', //本周简报上报情况
      briefingIsIntelligence: '', //情报上报情况
      existIssue7: '', //存在问题
      implementSituation7: '', //整改落实情况


      epidemicIsSupplies: 0, //消毒液、洗手液等防疫物资是否齐全（0是
      epidemicIsCode: 0, //是否严格落实进门查验核酸检测卡、健康码、消毒灯制度（0是
      epidemicIsDisinfection: 0, //是否熟练掌握消毒液配比比例及方法（0是
      epidemicIsLedger: 0, //消毒台账是否正确填写（0是
      epidemicIsVentilation: 0, //通风台账是否正确填写
      epidemicIsTemperature: 0, //站内体温检测台账是否正确填写
      epidemicIsCard: 0, //车辆消毒通风台账是否正确填写（0是
      existIssue8: '', //存在问题
      implementSituation8: '', //整改落实情况


      minuteIsCircuit: 0, //站长、副站长是否熟练掌握“三站联动”处置流程（0是
      minuteIsEquipment: 0, //是否熟练掌握警棍、盾牌等警用装备（0是
      minuteIsHandle: 0, //处置小组是否紧密配合、快速处置（0是
      minuteIsSpecification: 0, //现场处置是否符合规范（0是
      minuteIsComplete: 0, //执法仪等装备携带是否齐全（0是
      existIssue9: '', //存在问题
      implementSituation9: '', //整改落实情况

      basisIsJoin: 0, //值班交接台账是否填写完整（0是
      basisIsIntact: 0, //盘查台账是否填写完整（0是
      basisIsVideo: 0, //视频巡控调度台账是否填写完整（0是
      basisIsCheck: 0, //单位场所检查台账是否填写完整
      basisIsLedger: 0, //“十户联防”演练台账是否填写完整（0是
      basisIsAlarm: 0, //一键式报警器测试台账是否填写完整（0是
      basisIsTest: 0, //站内一键式报警器测试台账是否填写完整（0是
      basisIsCall: 0, //三方通话测试台账是否填写完整（0是
      existIssue10: '', //存在问题
      implementSituation10: '', //整改落实情况
      imgUrl1:'', // 头像
      imgUrl2:'',// 头像
      imgUrl3:'', // 头像
      imgUrl4:'' // 头像

    }
  },
  methods: {
    initData() {
      var arr = new Array(24).keys();
      this.setData({
        agencyNameArr: Array.from(arr).map(item => {
          return `${item+1}号便民警务站`
        })
      })
    },
    /**
     * 警务站
     * @param {*} e 
     */
    bindAccountChange: function (e) {
      console.log('picker account 发生选择改变，携带值为', e.detail.value);
      this.setData({
        credentialsType: e.detail.value,
        [`formData.agencyName`]: e.detail.value,
        agencyNameType: e.detail.value,
      })
    },
    chooseImageHandle(e) {
      let self = this;
      let imgUrl  = e.currentTarget.dataset.field;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePaths = res.tempFilePaths[0]
          wx.cloud.uploadFile({
            cloudPath: "img/" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000) + '.' + extname(tempFilePaths), //云储存的路径及文件名,//云储存的路径及文件名
            filePath: tempFilePaths,
            success(res2) {
              let path = res2.fileID.split('/')
              self.setData({
                [`formData.${imgUrl}`]: 'https://6a77-jw-9gqclfdjc8930cb5-1304956187.tcb.qcloud.la/img/' + path[path.length - 1],
                [`${imgUrl}`]: tempFilePaths
              });
            }
          })

          // 获取文件后缀
          function extname(filename) {
            if (!filename || typeof filename != 'string') {
              return false
            };
            let a = filename.split('').reverse().join('');
            let b = a.substring(0, a.search(/\./)).split('').reverse().join('');
            return b
          };

        }
      })
    },
    radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);
      const { field } = e.currentTarget.dataset
      var radioItems = this.data.radioItems;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
      }
      this.setData({
        [`formData.${field}`]: e.detail.value
      });
    },

    /**
     * 输入框取值方法
     * @param {*} e 
     */
    formInputChange(e) {
      console.log(e);
      const {
        field
      } = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value
      })
    },

    /**
     * 提交远程方法
     */
    submitHandle() {
      this.setData({
        [`formData.phone`]: wx.getStorageSync('phone'),
        [`formData.agencyName`]: this.data.agencyNameArr[this.data.agencyNameType]
      })

      wx.cloud.callFunction({
        name: "document",
        data: this.data.formData
      }).then((res) => {
        if (res.result.code == 0) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/index/index',
              success: function (res) {}
            })
          }, 1000);
        }
      });
    }
  }
});