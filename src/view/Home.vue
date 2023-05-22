<template>
    <Header/>
    <HomeContent/>
    <Footer/>
</template>

<script>
import Header from '../components/Header.vue'
import HomeContent from '../components/Home/HomeContent.vue'
import Footer from '../components/Footer.vue'
    export default {
        name:'Home',
        components:{Header,HomeContent,Footer}
    }
</script>

<style lang="less" scoped>
    
</style>