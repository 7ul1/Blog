<template>
    <Header/>
    <MessageContent/>
    <Footer/>
</template>

<script>
import Header from '../components/Header.vue'
import MessageContent from '../components/Message/MessageContent.vue'
import Footer from '../components/Footer.vue'
    export default {
        name:'Message',
        components:{Header,MessageContent,Footer}
    }
</script>

<style lang="less" scoped>
    
</style>