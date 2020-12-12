class Category {

    constructor(id) {
        this.box = document.querySelector(id);

        this.categorytab = this.box.querySelector(".category-tab-nav");

        this.tab1 = this.categorytab.querySelector(".tab1");
        this.tab2 = this.categorytab.querySelector(".tab2");
        this.menubox = this.box.querySelector(".menu-box");
        this.menunormal = this.menubox.querySelector(".menu-normal");
        this.lis = this.menunormal.querySelectorAll("li");
        this.menudetail = this.menubox.querySelector(".menu-detail");
        this.menudetailItems = this.menudetail.querySelectorAll(".menu-detail-item");
        this.menumetting = this.menubox.querySelector(".menu-metting");

        this.timer1 = null
        this.timer2 = null

        this.init();
        this.menuListInit();
    }

    init() {
        console.log("category")

        this.tab1.addEventListener("mouseenter", (e) => {
            console.log("tab1 mouseenter")
            this.removeActive()
            this.tab1.classList.add("active")
            this.menunormal.classList.add("active")
        }, false)

        this.tab2.addEventListener("mouseenter", (e) => {
            console.log("tab2 mouseenter")

            this.removeActive()
            this.tab2.classList.add("active")
            this.menumetting.classList.add("active")
        }, false)
    }


    menuListInit() {
        for (var i = 0; i < this.lis.length; i++) {
            let item = this.lis[i];
            let index = i;
            item.addEventListener("mouseenter", (e) => {
                // console.log("li-" + index + " mouseenter")
                if (this.timer1 != null) {
                    clearTimeout(this.timer1)
                }
                this.timer1 = setTimeout(() => {

                    //先清除menudetail中item的 active
                    this.menudetailItems.forEach((item) => {
                        item.classList.remove("active")
                    })

                    //然后给对应的item加上active
                    // this.menudetailItems[index].classList.add("active")
                    //目前全部显示第一个
                    this.menudetailItems[0].classList.add("active")
                }, 200)

            }, false)

            //当鼠标移出item之后删除 menudetail中对应下标的 item的 active
            item.addEventListener("mouseleave", (e) => {
                // console.log("li-" + index + " mouseleave")

                //清除lis的延时任务
                if (this.timer1 != null) {
                    clearTimeout(this.timer1)
                }
                if (this.timer2 != null) {
                    clearTimeout(this.timer2)
                }
                this.timer2 = setTimeout(() => {
                    //然后给对应的item删除active
                    // this.menudetailItems[index].classList.remove("active")
                    //目前全部显示第一个
                    this.menudetailItems[0].classList.remove("active")
                }, 200)
            }, false)
        }

        for (var i = 0; i < this.menudetailItems.length; i++) {
            let item = this.menudetailItems[i];
            item.addEventListener("mouseenter", (e) => {
                console.log("item mouseenter")
                if (this.timer2 != null) {
                    clearTimeout(this.timer2)
                }
                //然后给对应的item加上active
                item.classList.add("active")
            }, false)

            //当鼠标移出item之后删除 menudetail中对应下标的 item的 active
            item.addEventListener("mouseleave", (e) => {
                console.log("item mouseleave")
                item.classList.remove("active")
            }, false)
        }
    }

    removeActive() {
        console.log("remove avtive")
        this.tab1.classList.remove("active")
        this.tab2.classList.remove("active")
        this.menunormal.classList.remove("active")
        this.menumetting.classList.remove("active")
    }
}