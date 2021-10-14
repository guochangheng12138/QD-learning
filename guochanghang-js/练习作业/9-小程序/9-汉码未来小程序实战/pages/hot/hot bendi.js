Page({
  data: {
    rankType: 'project',
    rankTypes: [{
        title: '实战排行',
        type: "project"
      },
      {
        title: '路径排行',
        type: "path"
      }
    ],
    rankPeriod: "week",
    rankPeriods: [{
        title: "周",
        value: "week"
      },
      {
        title: "月",
        value: "month"
      }
    ],
    ////////////////////////////
    currentList: [{
        imgUrl: '/images/list_1.png',
        title: "前端性能优化"
      },
      {
        imgUrl: '/images/list_2.png',
        title: "剑指java面试"
      },
      {
        imgUrl: '/images/list_3.png',
        title: "VUE开发去哪儿网"
      },
      {
        imgUrl: '/images/list_4.png',
        title: "计算机组成原理"
      },
      {
        imgUrl: '/images/list_5.png',
        title: "计算机网络技术"
      },
    ],
  },
  //////////////////////////////////////////
  listData: {
    projectWeek: [{
        imgUrl: '/images/pr_w_1.png',
        title: "前端性能优化"
      },
      {
        imgUrl: '/images/pr_w_2.png',
        title: "前剑指java面试"
      },
      {
        imgUrl: '/images/pr_w_3.png',
        title: "VUE开发去哪儿网"
      },
      {
        imgUrl: '/images/pr_w_4.png',
        title: "计算机组成原理"
      },
      {
        imgUrl: '/images/pr_w_5.png',
        title: "计算机网络技术"
      },
    ],
    projectMonth: [{
        imgUrl: '/images/pr_m_1.png',
        title: "前端性能优化"
      },
      {
        imgUrl: '/images/pr_m_2.png',
        title: "前剑指java面试"
      },
      {
        imgUrl: '/images/pr_m_3.png',
        title: "VUE开发去哪儿网"
      },
      {
        imgUrl: '/images/pr_m_4.png',
        title: "计算机组成原理"
      },
      {
        imgUrl: '/images/pr_m_5.png',
        title: "计算机网络技术"
      },
    ],
    pathWeek: [{
        imgUrl: '/images/pa_w_1.png',
        title: "前端性能优化"
      },
      {
        imgUrl: '/images/pa_w_2.png',
        title: "前剑指java面试"
      },
      {
        imgUrl: '/images/pa_w_3.png',
        title: "VUE开发去哪儿网"
      },
      {
        imgUrl: '/images/pa_w_4.png',
        title: "计算机组成原理"
      },
      {
        imgUrl: '/images/pa_w_5.png',
        title: "计算机网络技术"
      },
    ],
    pathMonth: [{
        imgUrl: '/images/pa_m_1.png',
        title: "前端性能优化"
      },
      {
        imgUrl: '/images/pa_m_2.png',
        title: "前剑指java面试"
      },
      {
        imgUrl: '/images/pa_m_3.png',
        title: "VUE开发去哪儿网"
      },
      {
        imgUrl: '/images/pa_m_4.png',
        title: "计算机组成原理"
      },
      {
        imgUrl: '/images/pa_m_5.png',
        title: "计算机网络技术"
      },
    ],
  },
  ////////////////////////////////////////
  handleTabChange(e) {
    const rankType = e.currentTarget.dataset.type;
    const {rankPeriod} = this.data;
    // console.log({rankPeriod});
    this.setData({rankType});
    this.changeCurrentList(rankType, rankPeriod);
  },
  handlePeriodChange(e) {
    const rankPeriod = e.currentTarget.dataset.type;
    const {rankType} = this.data;
    this.setData({rankPeriod});
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