class Slider {
    constructor(id) {
        this.box = document.querySelector(id)
        this.itembox = this.box.querySelector(".slider-item-box")
        this.items = this.itembox.querySelectorAll("a")
        this.indexBox = this.box.querySelector(".slide-index")

        //相框的宽度
        this.sliderWidth = this.box.clientWidth
        this.sliders = this.items.length
        this.index = 1
        this.animated = false
        this.auto = null

        this.init()

    }

    init() {
        //

        // console.log("slider")
        // this.initPoint()
        // this.copyPic()
        // this.leftRight()
        // this.play()
    }

    initPoint() {
        let frg = document.createDocumentFragment();

        for (let i = 0; i < this.sliders; i++) {
            let li = document.createElement("li")
            li.setAttribute("data-index", i + 1)
            if (i == 0) li.className = "active"
            frg.appendChild(li)
        }

        this.indexBox.children[0].style.width = this.sliders * 10 * 2 + "px";
        this.indexBox.children[0].appendChild(frg)

        this.indexBox.children[0].addEventListener("click", (e) => {
            console.log("click point index = " + this.index)

            let pointIndex = (e.target).getAttribute("data-index")

            if (pointIndex == this.index || this.animated) return

            let offset = (pointIndex - this.index) * this.sliderWidth
            this.index = pointIndex
            this.move(offset)
        })


    }

    copyPic() {
        // 在队列首尾添加辅助图 实现轮播图
        const first = this.picBox.firstElementChild.cloneNode(true)
        const last = this.picBox.lastElementChild.cloneNode(true)

        this.picBox.appendChild(first)
        this.picBox.insertBefore(last, this.picBox.firstElementChild)

        //一个相框的宽度 * 相片的个数
        //这里不能用 this.sliders, 因为上面已经填加了首位两个
        //this.picBox.style.width = this.sliderWidth * this.sliders + "px"
        this.picBox.style.width = this.sliderWidth * this.picBox.children.length + "px"

        this.picBox.style.left = -1 * this.sliderWidth + "px"
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

        let goal = parseFloat(this.picBox.style.left) - offset

        this.animated = true

        let animate = setInterval(() => {
            if (this.picBox.style.left == goal || Math.abs(Math.abs(parseFloat(this.picBox.style.left)) - Math.abs(goal)) < Math.abs(speed)) {
                this.picBox.style.left == goal
                clearInterval(animate)
                this.animated = false

                if (parseFloat(this.picBox.style.left) == 0) {
                    this.picBox.style.left = -this.sliders * this.sliderWidth + "px"
                } else if (parseFloat(this.picBox.style.left) == -(this.sliders + 1) * this.sliderWidth) {
                    this.picBox.style.left = -this.sliderWidth + "px"
                }
            } else {
                this.picBox.style.left = parseFloat(this.picBox.style.left) - speed + "px";
            }
        }, rate);
    }


    play() {
        this.auto = setInterval(() => {
            this.box.querySelector(".right-box").click()
        }, 2000)

        this.box.addEventListener("mouseenter", () => {
            console.log("mouseenter")
            clearInterval(this.auto)
        })

        this.box.addEventListener("mouseleave", () => {
            console.log("mouseleave")
            this.auto = setInterval(() => {
                this.box.querySelector(".right-box").click()
            }, 2000);
        })
    }
}