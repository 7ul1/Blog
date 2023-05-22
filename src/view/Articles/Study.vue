<template>
    <Header/>
    <StudyHistory/>
    <Footer/>
</template>

<script>
import Header from '../../components/Header.vue'
import StudyHistory from '../../components/Article/StudyHistory.vue'
import Footer from '../../components/Footer.vue'
    export default {
        name:'Study',
        components:{Header,StudyHistory,Footer}
    }
</script>

<style lang="less" scoped>
    
</style>