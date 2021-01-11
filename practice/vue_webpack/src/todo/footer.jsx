import '../assets/styles/footer.styl'

//只能写 script 和 html  不能写css
export default {
    data(){
        return{
            author:"103style"
        }
    },
    render() {
        return (
            <div id='footer'>
                <span>Written by {this.author}</span>
            </div>
        )
    }
}