Page({
  data: {
    showIcon:true,
    swiperList:[],
    courses:[],
    // 搜索
    searchList:null
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/aab0701ca990e774ef4967cc8934ad89/b/weixin/getData',
      success:(res)=>{
        const {data:{data}}=res;
        // console.log(res);
        // console.log({data:{data}});
        // console.log(data);
        const {swiperList,courses}=data;
        // console.log(swiperList);
        this.setData({
          swiperList:swiperList,
          courses:courses
        });
        // console.log(this.data)
      }
    })
  },
  hand(e){
    const value=e.detail.value;
    let searchList=null;
    if(value){
      searchList=this.data.courses.filter(
        item=>item.title.indexOf(value)>-1
      )
    };
    this.setData({
      showIcon:value?false:true,
      searchList
    })

  }
})