<template>
    <div class="tings-header">
        <div class="tings-header-section">
            <div class="tings-header-nav">
                <nav class="tings-nav">
                    <ul>
                        <li>
                            <i class="ri-home-2-line"></i>
                            <router-link to="/home">首页</router-link>
                        </li>
                        <li>
                            <i class="ri-ball-pen-line"></i>
                            <router-link to="/message">留言板</router-link>
                        </li>
                        <li>
                            <i class="ri-men-line"></i>
                            <router-link to="/happy">娱乐</router-link>
                        </li>
                        <li>
                            <i class="ri-shopping-cart-2-line"></i>
                            <a href="shopping.html">购物</a>
                        </li>
                        <li>
                            <i class="ri-hearts-line"></i>
                            <a href="#">致谢</a>
                        </li>
                        <li>
                            <i class="ri-lightbulb-line"></i>
                            <a href="../public/Show/show.html" >关于</a>
                        </li>
                        <li>
                            <i class="ri-vip-diamond-line"></i>
                            <!-- <a href="../public/Mother/mother.html" >母亲节</a> -->
                            <router-link to="/mother">母亲节</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="tings-title">
            <a href="javascript:;"><h2>TingのBlog</h2></a>
            <a href="javascript:;"><p>夢を見るために前進するために、あなたは最終的に自分自身を達成するでしょう</p></a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header',

    }
</script>

<style lang="less" scoped>
    .tings-header{
        width: 100%;
        height: 340px;
        background: url(src/assets/images/2.jpg) no-repeat;
        background-size: cover;
        position: relative;
        background-position: center center;
        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(41, 40, 42, 0.2);
        }
        .tings-header-section{
            position: fixed;
            z-index: 9999;
            width: 100%;
            height: 40px;
            background-color: rgba(41, 40, 42, 0.5);
            .tings-header-nav{
                width: 1100px;
                height: 40px;
                margin: 0 auto;
                .tings-nav{
                    width: 800px;
                    height: 40px;
                    ul{
                        line-height: 40px;
                        overflow: hidden;
                        li{
                            float: left;
                            padding: 0 15px;
                            transition: all .4s;
                            &:hover{
                                background-color: rgba(255, 255, 255, 0.1);
                            }
                            i{
                                color: white;
                                font-size: 18px;
                                margin-right: 5px;
                            }
                            a{
                                color: white;
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
        .tings-title{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: whitesmoke;
            left: 0;
            right: 0;
            top: 35%;
            margin: auto;
            a{
                h2{
                    font-size: 70px;
                    text-shadow: 2px 2px 2px #666;
                }
                p{
                    margin-top: 12px;
                    text-shadow: 2px 2px 2px #666;
                }
            }
        }
    }
</style>