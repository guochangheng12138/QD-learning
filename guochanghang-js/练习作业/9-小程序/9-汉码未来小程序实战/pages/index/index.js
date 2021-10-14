Page({
  data: {
    showIcon: true,
    showtext: false,
    text: "",
    inputs: "",
    searchList: null,
    brrList: null,
    crrList: [],
    // 顶部tab
    type: 'recommend',
    tabs: [{
        name: '推荐',
        type: 'recommend'
      },
      {
        name: '路径',
        type: 'path'
      },
      {
        name: '实战',
        type: 'project'
      },
      {
        name: '活动',
        type: 'activity'
      }
    ],
    // banner
    currentIndex: 0,
    swiperList: [],
    // swiperList: [{
    //     imgUrl: '/images/1.png'
    //   },
    //   {
    //     imgUrl: '/images/2.png'
    //   },
    //   {
    //     imgUrl: '/images/3.png'
    //   }
    // ],
    // courses
    courses: [],
    // courses: [{
    //     imgUrl: '/images/course_1.jpg',
    //     title: '微信小程序入门与实战常用组件 开发技巧API  项目实战',
    //     promotion: false,
    //     price: 266,
    //     level: "中级",
    //     sales: 8422
    //   },
    //   {
    //     imgUrl: '/images/course_2.jpg',
    //     title: 'PHP后端小白从零到高手之路',
    //     promotion: true,
    //     price: 298,
    //     notice: '限时优惠',
    //     level: "初级",
    //     sales: 131
    //   },
    //   {
    //     imgUrl: '/images/course_3.jpg',
    //     title: 'iOS开发协作与网络',
    //     promotion: false,
    //     price: 198,
    //     level: "中级",
    //     sales: 1366
    //   },
    //   {
    //     imgUrl: '/images/course_4.jpg',
    //     title: '微信小程序入门与实战常用组件 开发技巧API  项目实战',
    //     promotion: false,
    //     price: 198,
    //     level: "初级",
    //     sales: 11826
    //   },
    // ],
    activeList: [],
    // activeList: [
    //   {
    //     imgUrl: '/images/pr_w_1.png'
    //   },
    //   {
    //     imgUrl: '/images/pr_w_2.png'
    //   },
    //   {
    //     imgUrl: '/images/pr_w_3.png'
    //   },
    //   {
    //     imgUrl: '/images/pr_w_4.png'
    //   },
    //   {
    //     imgUrl: '/images/pr_w_5.png'
    //   },
    // ],

  },
  // 顶部搜索
  handleInputChange(e) {
    const value = e.detail.value;
    let searchList = null;
    let brrList=[];
    let crrList=[];
    if (value) {
      searchList = this.data.courses.filter(
        item => item.title.indexOf(value) > -1
      );
      // 获取关键词前后内容
      for (let i = 0; i < searchList.length; ++i) {
        // 关键词前
        const lq = searchList[i].title.indexOf(value);
        const xitem = searchList[i].title.substr(0, lq);
        brrList.push(xitem);
        // 关键词后
        const lq2=lq+value.length;
        const changdu=searchList[i].title.length;
        const qitem = searchList[i].title.substr(lq2, changdu);
        crrList.push(qitem);
      }
    }
    this.setData({
        showIcon: value ? false : true,
        showtext: value ? true : false,
        text: value ? `${e.detail.value}` : ``,
        searchList: searchList,
        // 抛出关键词前后内容
        brrList: brrList,
        crrList: crrList,
      })
  },
  // 点击关闭按钮事件
  handleTapChange2: function () {
    this.setData({
      showIcon: true,
      showtext: false,
      text: "",
      inputs: ''
    })
  },
  // 顶部tab
  changeType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      type
    });
    console.log(e)
  },
  // 轮播图
  handleChange: function (e) {
    this.setData({
    currentIndex: e.detail.current,
  })
  },
  // 加载请求数据
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/78e05faa0ed4114606ad7f8b25cd832a/b/weixin/getData',
      success: (res) => {
        const {
          data: {
            data
          }
        } = res;
        const {
          swiperList,
          courses,
          activeList
        } = data;
        this.setData({
          swiperList: swiperList,
          courses: courses,
          activeList: activeList
        });
      }
    })
  },

})