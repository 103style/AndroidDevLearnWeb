<template>  
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
import todo from './todo/todo.vue'
export default {
  components: { 
      todo, 
      Header,
      Footer,
      Todo
    }
}
</script>

//lange="stylus" 指定用 stylus-loader 去解析
<style lang="stylus" scoped>
#app{
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
}
#cover{
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: #999
    opacity: 0.1    
    z-index: 1
}
</style>