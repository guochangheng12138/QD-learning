// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   type:'recommend',
   tabs:[
     {name:'推荐',type:'recommend'},
     {name:'路径',type:'path'},
     {name:'实战',type:'project'},
     {name:'活动',type:'activity'}
   ],
  },
  changeType(e){
    const type=e.currentTarget.dataset.type;
    this.setData({type});
    console.log(e)
  },
})
