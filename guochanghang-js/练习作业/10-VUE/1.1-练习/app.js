var app = new Vue({
    el: "#vue-app",
    data: {
        // 数据
        name: "hanmaweilai",
        age: 30,//鼠标事件
        x: 0,
        y: 0,// 获取鼠标移动坐标
        a: 0,
        b: 0,//计算属性

        // 属性绑定 
        website: "https://www.baidu.com/",
        websiteTag: "<a href='https://www.taobao.com'>标签绑定</a>",

        // 动态绑定css样式
        changeColor: false,
        changeLength: false,

        // v-if
        error: false,
        success: false,

        // v-for
        characters: ['lisi', 'wangwu', 'zhaoliu'],
        users: [
            { name: "zhangsan", age: 18 },
            { name: "tom", age: 20 },
            { name: "alex", age: 16 },
        ]
    },
    // 方法
    methods: {
        greet: function (time) {
            return "good" + " " + time + " " + " " + this.name
        },
        // 鼠标事件
        add: function () {
            this.age++;
        },
        sec: function () {
            this.age--;
        },
        // 鼠标事件加入参数
        add2: function (i) {
            this.age += i;
        },
        sec2: function (i) {
            this.age -= i;
        },
        // 获取鼠标移动坐标
        updateXY: function (e) {
            this.x = e.layerX
            this.y = e.layerY
        },
        // 阻止冒泡
        stopmoving: function (e) {
            e.stopPropagation()
        },

        // 超链接弹出信息但阻止跳转
        alert: function () {
            alert("hello");
        },

        // 键盘事件
        logName: function () {
            console.log("正在输入姓名");
        },
        logAge: function () {
            console.log("正在输入年龄");
        },
        logTel: function () {
            console.log("正在输入电话");
        },

        // 双向数据绑定
        changeName: function () {
            this.name = this.$refs.name.value
        },
        changeAge: function () {
            this.age = this.$refs.age.value
        },

        // 计算属性
        addToA: function () {
            console.log(this.a + this.age);
            return this.a + this.age
        },
        addToB: function () {
            console.log(this.b + this.age);
            return this.b + this.age
        }
    },
    // computed减少计算性能消耗
    computed: {
        addToA2: function () {
            console.log(this.a + this.age);
            return this.a + this.age
        },
        addToB2: function () {
            console.log(this.b + this.age);
            return this.b + this.age
        },

        // 计算属性的方式传递class
        compClasses: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength,
            }
        }
    }

})