const cloud = require('wx-server-sdk')
cloud.init()
// 经度 longitude;
// 纬度 latitude;
exports.main = async (event, context) => {

    let = {
        phone, //手机号
        jobNumber, // 在岗辅警（人数）
        userName, // 值班站长
        isJob, // 值班人员是否在岗在位（0是 1否）
        isNotJob, // 值班人员是否存在脱岗(0=是,1=否)
        isIdentical, // 在岗人员是否与值班表一致(0=是,1=否)
        existIssue, // 存在问题
        implementSituation, // 整改落实情况
        goodsIsTidy, // 装备及桌面物品摆放是否整齐
        beddingIsTidy, // 备勤室床铺、被褥是否整齐干净（0是
        tablewareIsTidy, // 厨房碗筷摆放、储物柜整洁度是否达标
        healthIsStandard, // 便民警务站周边卫生是否达标
        healthIsBlind, // 便民警务站内部是否存在卫生死角
        existIssue1, // 存在问题
        implementSituation1, // 整改落实情况
        clothesIsStandard, //值班人员着装是否规范（0是
        nailsIsStandard, //民辅警是否存在留指甲、染头发等情况（0是
        existIssue2, //存在问题
        implementSituation2, //整改落实情况
        videoIsHealth, //视频会议室卫生及桌面摆放是否合格（0是
        videoIsJob, //视频会议室值班人员是否在岗在位（0是
        videoIsPhone, //视频会议室是否存在将手机带入情况（0是
        videoIsBedding, //视频会议室着装是否规范（0是
        videoIsLeader, //视频会议室带班领导汇报情况是否达标（0是
        existIssue4, //存在问题
        implementSituation4, //整改落实情况
        cardIsHealth, //巡逻车整体卫生情况是否达标（0是
        cardIsEquipment, //巡逻车是否按照要求配备灭火器、阻车钉等必要装备（0是
        cardIsSituation, //巡逻车车况是否良好（0是
        cardIsRepair, //巡逻车是否存在损坏未修理的地方
        existIssue3, //存在问题
        implementSituation3, //整改落实情况
        meetingIsMeeting, //是否严格落实每日召开晨会（0是
        meetingIsJob, //晨会是否传达近期重要工作安排（0是
        meetingIsFake, //晨会记录是否详实、无造假情况（0是
        meetingIsLanguage, //是否学习国家通用语言（0是
        meetingIsFile, //是否落实学习会议及文件
        existIssue5, //存在问题
        implementSituation5, //整改落实情况
        allIsAdvance, //是否制定符合本站实际的推进表（0是
        allIsContent, //站长是否能够熟练掌握授课内容
        allIsLog, //每日训练日志是否填写完整（0是
        allIsGrasp, //民辅警是否对已训练内容掌握熟练（0是
        allIsLanguage, //国语学习是否制定推进计划（0是
        allIsWrite, //国语学习笔记是否按照推进计划书写（0是
        existIssue6, //存在问题
        implementSituation6, //整改落实情况
        electronIsGrasp, //站长及内勤是否熟练掌握电子台账录入（0是
        electronIsInput, //各类电子台账是否做到及时录入（0是
        electronIsError, //各类电子台账是否存在录入数据错误（0是
        existIssue11, // 存在问题
        implementSituation11, //整改落实情况
        briefingIsWrite, //内勤是否能够较好完成简报情报撰写（0是
        briefingIsSign, //简报情报信息是否按照要求进行上报（0是
        briefingIsSituation, //本周简报上报情况
        briefingIsIntelligence, //情报上报情况
        existIssue7, //存在问题
        implementSituation7, //整改落实情况
        epidemicIsSupplies, //消毒液、洗手液等防疫物资是否齐全（0是
        epidemicIsCode, //是否严格落实进门查验核酸检测卡、健康码、消毒灯制度（0是
        epidemicIsDisinfection, //是否熟练掌握消毒液配比比例及方法（0是
        epidemicIsLedger, //消毒台账是否正确填写（0是
        epidemicIsVentilation, //通风台账是否正确填写
        epidemicIsTemperature, //站内体温检测台账是否正确填写
        epidemicIsCard, //车辆消毒通风台账是否正确填写（0是
        existIssue8, //存在问题
        implementSituation8, //整改落实情况
        minuteIsCircuit, //站长、副站长是否熟练掌握“三站联动”处置流程（0是
        minuteIsEquipment, //是否熟练掌握警棍、盾牌等警用装备（0是
        minuteIsHandle, //处置小组是否紧密配合、快速处置（0是
        minuteIsSpecification, //现场处置是否符合规范（0是
        minuteIsComplete, //执法仪等装备携带是否齐全（0是
        existIssue9, //存在问题
        implementSituation9, //整改落实情况
        basisIsJoin, //值班交接台账是否填写完整（0是
        basisIsIntact, //盘查台账是否填写完整（0是
        basisIsVideo, //视频巡控调度台账是否填写完整（0是
        basisIsCheck, //单位场所检查台账是否填写完整
        basisIsLedger, //“十户联防”演练台账是否填写完整（0是
        basisIsAlarm, //一键式报警器测试台账是否填写完整（0是
        basisIsTest, //站内一键式报警器测试台账是否填写完整（0是
        basisIsCall, //三方通话测试台账是否填写完整（0是
        existIssue10, //存在问题
        implementSituation10, //整改落实情况
        imgUrl1, // 头像
        imgUrl2,// 头像
        imgUrl3, // 头像
        imgUrl4,// 头像
        agencyName
        
    } = event;

    var rp = require('request-promise');
    var options = {
        method: 'POST',
        uri: 'http://39.105.58.173:18081/system/detailed/add',
        body: {
            phone, //手机号
            jobNumber, // 在岗辅警（人数）
            userName, // 值班站长
            isJob, // 值班人员是否在岗在位（0是 1否）
            isNotJob, // 值班人员是否存在脱岗(0=是,1=否)
            isIdentical, // 在岗人员是否与值班表一致(0=是,1=否)
            existIssue, // 存在问题
            implementSituation, // 整改落实情况
            goodsIsTidy, // 装备及桌面物品摆放是否整齐
            beddingIsTidy, // 备勤室床铺、被褥是否整齐干净（0是
            tablewareIsTidy, // 厨房碗筷摆放、储物柜整洁度是否达标
            healthIsStandard, // 便民警务站周边卫生是否达标
            healthIsBlind, // 便民警务站内部是否存在卫生死角
            existIssue1, // 存在问题
            implementSituation1, // 整改落实情况
            clothesIsStandard, //值班人员着装是否规范（0是
            nailsIsStandard, //民辅警是否存在留指甲、染头发等情况（0是
            existIssue2, //存在问题
            implementSituation2, //整改落实情况
            videoIsHealth, //视频会议室卫生及桌面摆放是否合格（0是
            videoIsJob, //视频会议室值班人员是否在岗在位（0是
            videoIsPhone, //视频会议室是否存在将手机带入情况（0是
            videoIsBedding, //视频会议室着装是否规范（0是
            videoIsLeader, //视频会议室带班领导汇报情况是否达标（0是
            existIssue4, //存在问题
            implementSituation4, //整改落实情况
            cardIsHealth, //巡逻车整体卫生情况是否达标（0是
            cardIsEquipment, //巡逻车是否按照要求配备灭火器、阻车钉等必要装备（0是
            cardIsSituation, //巡逻车车况是否良好（0是
            cardIsRepair, //巡逻车是否存在损坏未修理的地方
            existIssue3, //存在问题
            implementSituation3, //整改落实情况
            meetingIsMeeting, //是否严格落实每日召开晨会（0是
            meetingIsJob, //晨会是否传达近期重要工作安排（0是
            meetingIsFake, //晨会记录是否详实、无造假情况（0是
            meetingIsLanguage, //是否学习国家通用语言（0是
            meetingIsFile, //是否落实学习会议及文件
            existIssue5, //存在问题
            implementSituation5, //整改落实情况
            allIsAdvance, //是否制定符合本站实际的推进表（0是
            allIsContent, //站长是否能够熟练掌握授课内容
            allIsLog, //每日训练日志是否填写完整（0是
            allIsGrasp, //民辅警是否对已训练内容掌握熟练（0是
            allIsLanguage, //国语学习是否制定推进计划（0是
            allIsWrite, //国语学习笔记是否按照推进计划书写（0是
            existIssue6, //存在问题
            implementSituation6, //整改落实情况
            electronIsGrasp, //站长及内勤是否熟练掌握电子台账录入（0是
            electronIsInput, //各类电子台账是否做到及时录入（0是
            electronIsError, //各类电子台账是否存在录入数据错误（0是
            existIssue11, // 存在问题
            implementSituation11, //整改落实情况
            briefingIsWrite, //内勤是否能够较好完成简报情报撰写（0是
            briefingIsSign, //简报情报信息是否按照要求进行上报（0是
            briefingIsSituation, //本周简报上报情况
            briefingIsIntelligence, //情报上报情况
            existIssue7, //存在问题
            implementSituation7, //整改落实情况
            epidemicIsSupplies, //消毒液、洗手液等防疫物资是否齐全（0是
            epidemicIsCode, //是否严格落实进门查验核酸检测卡、健康码、消毒灯制度（0是
            epidemicIsDisinfection, //是否熟练掌握消毒液配比比例及方法（0是
            epidemicIsLedger, //消毒台账是否正确填写（0是
            epidemicIsVentilation, //通风台账是否正确填写
            epidemicIsTemperature, //站内体温检测台账是否正确填写
            epidemicIsCard, //车辆消毒通风台账是否正确填写（0是
            existIssue8, //存在问题
            implementSituation8, //整改落实情况
            minuteIsCircuit, //站长、副站长是否熟练掌握“三站联动”处置流程（0是
            minuteIsEquipment, //是否熟练掌握警棍、盾牌等警用装备（0是
            minuteIsHandle, //处置小组是否紧密配合、快速处置（0是
            minuteIsSpecification, //现场处置是否符合规范（0是
            minuteIsComplete, //执法仪等装备携带是否齐全（0是
            existIssue9, //存在问题
            implementSituation9, //整改落实情况
            basisIsJoin, //值班交接台账是否填写完整（0是
            basisIsIntact, //盘查台账是否填写完整（0是
            basisIsVideo, //视频巡控调度台账是否填写完整（0是
            basisIsCheck, //单位场所检查台账是否填写完整
            basisIsLedger, //“十户联防”演练台账是否填写完整（0是
            basisIsAlarm, //一键式报警器测试台账是否填写完整（0是
            basisIsTest, //站内一键式报警器测试台账是否填写完整（0是
            basisIsCall, //三方通话测试台账是否填写完整（0是
            existIssue10, //存在问题
            implementSituation10, //整改落实情况
            imgUrl1, // 头像
            imgUrl2,// 头像
            imgUrl3, // 头像
            imgUrl4,// 头像
            agencyName
        },
        json: true
    };

    return rp(options).then(function (parsedBody) {
            return parsedBody
        })
        .catch(function (err) {
            return err
        });
}