Page({
  data: {
    rankType: undefined,
    rankTypes: [{
        title: '实战排行',
        type: "project"
      },
      {
        title: '路径排行',
        type: "path"
      }
    ],
    rankPeriod: undefined,
    rankPeriods: [{
        title: "周",
        value: "week"
      },
      {
        title: "月",
        value: "month"
      }
    ],
    currentList: [],
  },
  listData: {},

  /* * 生命周期函数--监听页面加载*/
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/1fc178bbbc907608d710817f8c6cd66f/b/weixin/getHots',
      success: (res) => {
        const {data: {data}} = res;
        this.listData=data;
        const rankPeriod=wx.getStorageSync('rankPeriod')||'week';
        const rankType=wx.getStorageSync('rankType')||'project';
        this.setData({rankPeriod,rankType});
        this.changeCurrentList(rankType,rankPeriod)
      }
    })
  },
  ////////////////////////////////////////
  handleTabChange(e) {
    const rankType = e.currentTarget.dataset.type;
    const {rankPeriod} = this.data;
    this.setData({rankType});
    ///////接口  与this.data无关，存在缓存中，下次编译显示关闭时的选项
    wx.setStorage({
      key:'rankType',
      data:rankType,
    });
    /////////////////
    this.changeCurrentList(rankType, rankPeriod);
  },
  handlePeriodChange(e) {
    const rankPeriod = e.currentTarget.dataset.type;
    const {rankType} = this.data;
    this.setData({rankPeriod});
    ///////接口   
    wx.setStorage({
      key:'rankPeriod',
      data:rankPeriod,
    });
    //////////////////////////////
    this.changeCurrentList(rankType, rankPeriod);
  },
  //////////////////////////////////////////
  changeCurrentList(rankType, periodType) {
    let currentList = [];
    if (rankType === "project" && periodType === 'week') {
      currentList = this.listData.projectWeek;
    } else if (rankType === "project" && periodType === 'month') {
      currentList = this.listData.projectMonth;
    } else if (rankType === "path" && periodType === 'week') {
      currentList = this.listData.pathWeek;
    } else {
      currentList = this.listData.pathMonth;
    }
    this.setData({
      currentList
    });
  }
})