<template>
    <div id='footer'>
        <span>Written by {this.author}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            author:"103style"
        }
    }
}
</script>


<style lang="stylus" scoped>
#footer{
    margin-top: 40px
    text-align: center
    color: #bfbfbf
    font-size: 10px
    text-shadow: 0 1px 0 #999
}
</style>