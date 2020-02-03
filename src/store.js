import Vue from 'vue'
import Vuex from 'vuex'
// import moment from 'moment'
// import store from 'store'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loading: false,
    tabData: [
      {
        id: "1",
        label: "污染源信息"
      },
      {
        id: "2",
        label: "排放信息",
        secondTab: [
          {
            id: "2-2",
            label: "废水"
          },
          {
            id: "2-1",
            label: "废气"
          },
          {
            id: "2-6",
            label: "噪声"
          },
          {
            id: "2-7",
            label: "固危废堆场点"
          },
          {
            id: "2-0",
            label: "监测数据"
          }
        ]
      },
      {
        id: "3",
        label: "污染治理设施",
        secondTab: [
          {
            id: "3-2",
            label: "废水治理设施"
          },
          {
            id: "3-1",
            label: "废气治理设施"
          },
          {
            id: "3-7",
            label: "固废治理设施"
          }
        ]
      }
    ],
    pollSourceInfoHeader: [
      {
        key: "name",
        label: "企业名称"
      },
      {
        key: "description",
        label: "企业简介"
      },
      {
        key: "creditcode",
        label: "统一信用代码"
      },
      {
        key: "orgcode",
        label: "组织机构代码"
      },
      {
        key: "buildTime",
        label: "建厂时间"
      },
      {
        key: "productionTime",
        label: "投产时间"
      },
      {
        key: "productionState",
        label: "生产状态"
      },
      {
        key: "isMonitoring",
        label: "是否在线监控"
      },

      {
        key: "region",
        label: "地区",
        class: "interval"
      },
      {
        key: "town",
        label: "乡镇/街道"
      },
      {
        key: "relatePark",
        label: "所属园区"
      },
      {
        key: "address",
        label: "地址"
      },
      {
        key: "zipcode",
        label: "邮政编码"
      },
      {
        key: "telephone",
        label: "电话号码"
      },
      {
        key: "regioncode",
        label: "行政区编码"
      },
      {
        key: "fax",
        label: "传真号码"
      },
      {
        key: "url",
        label: "网址"
      },
      {
        key: "lat-lng",
        label: "经纬度",
        class: "interval"
      },
      {
        key: "legal",
        label: "法人",
        class: "interval"
      },
      {
        key: "contacts",
        label: "联系人"
      },
      {
        key: "contactsmobile",
        label: "联系人电话"
      },
      {
        key: "charge",
        label: "环保责任人"
      },
      {
        key: "chargeMoblie",
        label: "环保责任人电话"
      },
      {
        key: "contact",
        label: "应急物品联系人"
      },
      {
        key: "contactstelephone",
        label: "联系人手机号"
      },
      {
        key: "contactsemail",
        label: "联系人邮箱"
      },
      {
        key: "envdept",
        label: "企业环保部门"
      },
      {
        key: "number",
        label: "专职环保人数"
      },
      {
        key: "industrialType",
        label: "行业类别",
        class: "interval"
      },
      {
        key: "scale",
        label: "企业规模"
      },
      {
        key: "level",
        label: "控制级别"
      }
    ],
    wasteWaterHeader: [
      {
        key: "name",
        label: "排放口名称"
      },
      {
        key: "address",
        label: "排放口位置"
      },
      {
        key: "isonlinemonitoring",
        label: "是否安装在线监控设备"
      },
      {
        key: "standard",
        label: "废水排放标准"
      },
      {
        key: "destinationcategory",
        label: "废水排放去向"
      },
      {
        key: "lat-lng",
        label: "排放口经纬度"
      },
      {
        key: "inriverlng-lat",
        label: "入河口经纬度"
      },
      {
        key: "wastedischargelaw",
        label: "废水排放规律"
      },
      {
        key: "remark",
        label: "备注"
      }
    ],
    exhaustGasHeader: [
      {
        key: "name",
        label: "排放口名称"
      },
      {
        key: "address",
        label: "排放口位置"
      },
      {
        key: "isonlinemonitoring",
        label: "是否安装在线监控设备"
      },
      {
        key: "standard",
        label: "废气排放标准"
      },
      {
        key: "height",
        label: "排放口高度（米）"
      },
      {
        key: "",
        label: "排放口经纬度"
      },
      {
        key: "lat-lng",
        label: "燃料种类"
      },
      {
        key: "wastedischargelaw",
        label: "废气排放规律"
      },
      {
        key: "remark",
        label: "备注"
      }
    ],
    noiseHeader: [
      {
        key: "name",
        label: "噪声源名称"
      },
      {
        key: "standard",
        label: "排放标准"
      },
      {
        key: "address",
        label: "噪声源位置"
      },
      {
        key: "remark",
        label: "备注"
      }
    ],
    solidDangerHeader: [
      {
        key: "name",
        label: "固危废堆场名称"
      },
      {
        key: "address",
        label: "堆放地点"
      },
      {
        key: "processingmode",
        label: "处理方式"
      },
      {
        key: "isidentificationmark",
        label: "是否涉及危险废物识别标志"
      },
      {
        key: "isstored",
        label: "是否贮存危险物"
      },
      {
        key: "isdangerorwaste",
        label: "是否危废"
      },
      {
        key: "protectionmeasures",
        label: "污染防护措施"
      },
      {
        key: "remark",
        label: "备注"
      }
    ],
    monitorHeader: [
      {
        key: "monitordate",
        label: "监测日期"
      },
      {
        key: "factorname",
        label: "监测指标"
      },
      {
        key: "value",
        label: "监测结果"
      }
    ],
    controWaterHeader: [
      {
        key: "facilityname",
        label: "设施名称"
      },
      {
        key: "output",
        label: "排放口"
      },
      {
        key: "treatmentprocess",
        label: "废水净化方法"
      },
      {
        key: "wastewatercategory",
        label: "废水类别"
      },
      {
        key: "iselectricitymeter",
        label: "是否安装专用电表"
      },
      {
        key: "isreusewatermeter",
        label: "是否安装回用电水表"
      },
      {
        key: "remark",
        label: "备注"
      }
    ],
    controExhaustGasHeader:[
      {
        key: "facilityname",
        label: "设施名称"
      },
      {
        key: "output",
        label: "排放口"
      },
      {
        key: "treatmentprocess",
        label: "净化方法"
      },
      {
        key: "iselectricitymeter",
        label: "是否安装专用电表"
      },
      {
        key: "remark",
        label: "备注"
      }
    ],
    controSolidDangerHeader:[
      {
        key: "facilityname",
        label: "设施名称"
      },
      {
        key: "treatmentprocess",
        label: "处理工艺"
      },
      {
        key: "remark",
        label: "备注"
      }
    ]

  },
  mutations: {
    set_loading: (state, data) => {
      state.loading = data
    }
  },
  actions: {

  }

})
