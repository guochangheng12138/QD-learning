Page({
  data: {
    showIcon: true,
    showtext: false,
    text: "",
    inputs: "",




    // banner
    swiperList: [{
        imgUrl: '/images/1.png'
      },
      {
        imgUrl: '/images/2.png'
      },
      {
        imgUrl: '/images/3.png'
      }
    ],
    courses: [{
        imgUrl: '/images/course_1.jpg',
        title: '零基础入门',
        promotion: false,
        price: 266,
        level: "中级",
        sales: 8422
      },
      {
        imgUrl: '/images/course_2.jpg',
        title: '工作流开发实战',
        promotion: true,
        price: 298,
        notice: '限时优惠',
        level: "初级",
        sales: 131
      },
      {
        imgUrl: '/images/course_3.jpg',
        title: '重构知识体系',
        promotion: false,
        price: 198,
        level: "中级",
        sales: 1366
      },
      {
        imgUrl: '/images/course_4.jpg',
        title: '全系统入门进阶',
        promotion: false,
        price: 198,
        level: "初级",
        sales: 11826
      },
      {
        imgUrl: '/images/course_5.jpg',
        title: '框架及项目面试',
        promotion: false,
        price: 399,
        level: "中级",
        sales: 1401
      },
    ]
  },

  
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({
      showIcon: value ? false : true,
      showtext: value ? true : false,
      text: value ? `展示内容：${e.detail.value}` : ``
    }),
    console.log(this)
  },
  handleInputChange2: function () {
    this.setData({
      showIcon: true,
      showtext: false,
      text: "",
      inputs: ''
    })
    
  },



})