class Slider {
    constructor(id) {
        this.sliderbox = document.querySelector(id)
        this.box = this.sliderbox.querySelector(".slider")
        this.itembox = this.box.querySelector(".slider-item-box")
        this.items = this.itembox.querySelectorAll("a")
        this.indexBox = this.box.querySelector(".slider-index")

        //相框的宽度
        this.sliderWidth = this.box.clientWidth
        this.itemCount = this.items.length
        this.index = 1
        this.animated = false
        this.auto = null

        this.sliderTime = 5000

        this.init()

    }

    init() {
        console.log("slider")
        this.initPoint()
        this.copyPic()
            // this.leftRight()
        this.play()
    }

    initPoint() {
        let frg = document.createDocumentFragment();

        for (let i = 0; i < this.itemCount; i++) {
            let li = document.createElement("li")
            li.setAttribute("data-index", i + 1)
            if (i == 0) li.className = "active"
            frg.appendChild(li)
        }

        //ol
        let ol = this.indexBox.children[0]
        ol.style.width = this.itemCount * 30 + "px";
        ol.appendChild(frg)

        for (let i = 0; i < this.itemCount; i++) {
            let item = ol.children[i];
            item.addEventListener("click", (e) => {
                console.log("click point index = " + this.index)

                let pointIndex = (e.target).getAttribute("data-index")

                if (pointIndex == this.index || this.animated) return

                let offset = (pointIndex - this.index) * this.sliderWidth
                this.index = pointIndex
                this.move(offset)
            })
        }
    }

    copyPic() {
        // 在队列首尾添加辅助图 实现轮播图
        const first = this.itembox.firstElementChild.cloneNode(true)
        const last = this.itembox.lastElementChild.cloneNode(true)

        this.itembox.appendChild(first)
        this.itembox.insertBefore(last, this.itembox.firstElementChild)

        //一个相框的宽度 * 相片的个数
        //这里不能用 this.sliders, 因为上面已经填加了首位两个
        //this.picBox.style.width = this.sliderWidth * this.sliders + "px"
        this.itembox.style.width = this.sliderWidth * this.itembox.children.length + "px"

        this.itembox.style.left = -1 * this.sliderWidth + "px"
    }

    leftRight() {
        this.box
            .querySelector(".left-box")
            .addEventListener("click", () => {
                console.log("click left")

                if (this.animated) return

                if (this.index - 1 < 1) {
                    this.index = this.sliders
                } else {
                    this.index--
                }
                this.move(-this.sliderWidth)

            })
        this.box
            .querySelector(".right-box")
            .addEventListener("click", () => {
                console.log("click right")
                if (this.animated) return

                if (this.index + 1 > this.sliders) {
                    this.index = 1
                } else {
                    this.index++
                }
                this.move(this.sliderWidth)
            })

    }

    //切换轮播图
    move(offset) {
        console.log("move offset = " + offset)
        this.animate(offset)

        const num = this.indexBox.children[0].children.length
        for (let i = 0; i < num; i++) {
            //去掉 activie 标识
            this.indexBox.children[0].children[i].className = ""
        }
        this.indexBox.children[0].children[this.index - 1].className = "active"
    }

    animate(offset) {
        const time = 1000
        const rate = 100
        let speed = offset / (time / rate)

        let goal = parseFloat(this.itembox.style.left) - offset

        this.animated = true

        let animate = setInterval(() => {
            if (this.itembox.style.left == goal || Math.abs(Math.abs(parseFloat(this.itembox.style.left)) - Math.abs(goal)) < Math.abs(speed)) {
                this.itembox.style.left == goal
                clearInterval(animate)
                this.animated = false

                if (parseFloat(this.itembox.style.left) == 0) {
                    this.itembox.style.left = -this.itemCount * this.sliderWidth + "px"
                } else if (parseFloat(this.itembox.style.left) == -(this.itemCount + 1) * this.sliderWidth) {
                    this.itembox.style.left = -this.sliderWidth + "px"
                }
            } else {
                this.itembox.style.left = parseFloat(this.itembox.style.left) - speed + "px";
            }
        }, rate);

        //修改sliderboxd的背景为 对应 item的背景
        console.log("index = " + this.index)
        this.sliderbox.style.background = this.items[this.index - 1].querySelector("img").style.background
    }


    play() {
        this.auto = setInterval(() => {
            this.tonext();
        }, this.sliderTime)

        this.box.addEventListener("mouseenter", () => {
            console.log("box mouseenter")
            clearInterval(this.auto)
        })

        this.box.addEventListener("mouseleave", () => {
            console.log("box mouseleave")
            this.auto = setInterval(() => {
                this.tonext();
            }, this.sliderTime);
        })
    }

    tonext() {
        if (this.animated) return

        if (this.index + 1 > this.itemCount) {
            this.index = 1
        } else {
            this.index++
        }
        this.move(this.sliderWidth)
    }
}