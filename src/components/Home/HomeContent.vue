<template>
    <div class="tings-content">
        <div class="tings-content-section">
            <div class="tings-content-item">
                <div class="tings-content-item-articles">
                        <div class="tings-article">
                            <div class="tings-article-top">
                                <router-link to="/study">
                                    <div class="tings-article-top-left">
                                        <img src="/src/assets/images/article1.png" alt="">
                                    </div>
                                </router-link>
                                <div class="tings-article-top-right">
                                    <router-link to="/study">
                                        <h2>📝浅谈一下我的学习经历</h2>
                                    </router-link>
                                    <router-link to="/study">
                                        <p>
                                            接触到了编程，其次触及了前端领域，在其中盲目自学，走了很多歪路，也在不断的寻找那条属于未来的道路，相信在这时间里我能够突破自己的盲点，并称为过去的我眼中的自己..
                                        </p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="tings-article-bom">
                                <ul>
                                    <li>
                                        <i class="ri-calendar-check-fill"></i>
                                        <a href="#">2023-4-27</a>
                                    </li>
                                    <li>
                                        <i class="ri-skull-2-line"></i>
                                        <a href="#">3次阅读</a>
                                    </li>
                                    <li>
                                        <i class="ri-user-fill"></i>
                                        <a href="#">月三のTing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="tings-article">
                              <div class="tings-article-top">
                                <router-link to="/tangle">
                                    <div class="tings-article-top-left">
                                        <img src="/src/assets/images/article1.png" alt="">
                                    </div>
                                </router-link>
                                <div class="tings-article-top-right">
                                    <router-link to="/tangle">
                                        <h2>📝浅谈一下我的学习经历</h2>
                                    </router-link>
                                    <router-link to="/tangle">
                                        <p>
                                            接触到了编程，其次触及了前端领域，在其中盲目自学，走了很多歪路，也在不断的寻找那条属于未来的道路，相信在这时间里我能够突破自己的盲点，并称为过去的我眼中的自己..
                                        </p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="tings-article-bom">
                                <ul>
                                    <li>
                                        <i class="ri-calendar-check-fill"></i>
                                        <a href="#">2023-5-11</a>
                                    </li>
                                    <li>
                                        <i class="ri-skull-2-line"></i>
                                        <a href="#">2次阅读</a>
                                    </li>
                                    <li>
                                        <i class="ri-user-fill"></i>
                                        <a href="#">Ting's欢</a>
                                    </li>
                                </ul>
                            </div>
                        </div> -->

                </div>
                <div class="tings-content-item-user">
                    <div class="tings-user">
                        <div class="tings-top"></div>
                        <div class="tings-bom">
                            <div class="tings-pic"></div>
                            <p>为了<a href="#">喜欢</a>的东西而奋斗🥠</p>
                        </div>
                    </div>
                    <div class="tings-list">
                        <div class="tings-list-box">
                            <div class="tings-list-box-title">
                                <span>最近目标</span>
                            </div>
                            <div class="tings-list-list">
                                <ul>
                                    <li>1. 将网站完善完整</li>
                                    <li>2. 复习所学知识并巩固</li>
                                    <li>3. 学习微信小程序</li>
                                    <li>4. 多做练习并抓住不会的点</li>
                                    <li>5. 规划目标，规划学习计划</li>
                                    <li>6. 暑假打工，换电脑</li>
                                    <li>7. 劳逸结合，不要过度看电脑</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeContent'
    }
</script>

<style lang="less" scoped>
    .tings-content{
        margin-top: 20px;
        width: 100%;
        .tings-content-section{
            width: 100%;
            .tings-content-item{
                display: flex;
                width: 1100px;
                margin: 0 auto;
                .tings-content-item-articles{
                    flex: 2;
                    margin: 0 15px;

                    .tings-article{
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        height: 200px;
                        margin-bottom: 15px;
                        box-shadow: 0 2px 4px rgba(0,0,0,.1);
                        transition: all .5s;
                        overflow: hidden;
                        &:hover{
                            box-shadow: 0 8px 15px rgba(146,146,146,.39)
                        }
                        .tings-article-top{
                            margin: 10px;
                            flex: 8;
                            display: flex;
                            flex-direction: row;
                            .tings-article-top-left{
                                flex: 3;
                                background-size: cover;
                                position: relative;
                                background-position: center center;
                                margin-right: 5px;
                                img{
                                    width: 200px;
                                    height: 124px;
                                    padding: 15px 0 0 0;
                                }
                            }
                            .tings-article-top-right{
                                flex: 7;
                                margin-left: 5px;
                                padding: 0 20px;
                                h2{
                                    color: #333;
                                    font-weight: 500;
                                    font-size: 28px;
                                }
                                p{
                                    color: #333;
                                    font-weight: 300;
                                    text-align: justify;
                                    line-height: 24px;
                                    font-size: 18px;
                                    height: 100px;
                                    overflow: hidden;
                                    padding-top: 10px;
                                }
                            }
                        }
                        .tings-article-bom{
                            flex: 2;
                            ul{
                                padding-left: 15px;
                                display: flex;
                                li{
                                    margin-right: 20px;
                                    i{
                                        font-size: 16px;
                                        font-weight: 300;
                                        color: #333333;
                                        margin-right: 5px;
                                    }
                                    a{
                                        font-size: 14px;
                                        font-weight: 300;
                                        color: #333333;
                                    }
                                }
                            }
                        }
                    }
                }
                .tings-content-item-user{
                    flex: 1;
                    margin: 0 15px;
                    .tings-user{
                        display: flex;
                        flex-direction: column;
                        height: 200px;
                        margin-bottom: 15px;
                        box-shadow: 0 2px 4px rgba(0,0,0,.1);
                        overflow: hidden;
                        transition: all .5s;
                        &:hover{
                            box-shadow: 0 8px 15px rgba(146,146,146,.39)
                        }
                        .tings-top{
                            flex: 1;
                            background: url(/src/assets/images/article1.png) no-repeat;
                            background-size: cover;
                            position: relative;
                            background-position-y: center;
                            transition: all .4s;
                            &::after{
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                gap: 100%;
                                border-radius: 0px;
                                backdrop-filter: blur(2px);
                            }
                        }
                        .tings-bom{
                            flex: 1;
                            position: relative;
                            .tings-pic{
                                position: absolute;
                                top: -40%;
                                left: 0;
                                right: 0;
                                margin: auto;
                                width: 80px;
                                height: 80px;
                                background: url(/src/assets/images/01.gif),no-repeat;
                                background-size: cover;
                                position: relative;
                                background-position: center;
                                border-radius: 50%;
                                transition: all .6s;
                            }
                            >p{
                                position: absolute;
                                bottom: 20px;
                                left: 0;
                                right: 0;
                                margin: auto;
                                color: #333333;
                                font-size: 16px;
                                font-weight: 500;
                                text-align: center;
                                transition: all .5s;
                                >a{
                                    color: #333333;
                                }
                            }
                        }
                    }
                    .tings-list{
                        box-shadow: 0 2px 4px rgba(0,0,0,.1);
                        transition: all .5s;
                        &:hover{
                            box-shadow: 0 8px 15px rgba(146,146,146,.39)
                        }
                        .tings-list-box{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            height: 100%;
                            .tings-list-box-title{
                                flex: 1;
                                margin: 0 20px;
                                span{
                                    width: 100px;
                                    height: 50px;
                                    line-height: 50px;
                                    color: #555;
                                    font-size: 20px;
                                    font-weight: 300;
                                    padding-bottom: 10px;
                                    border-bottom: 3px solid #c59145;
                                }
                            }
                            .tings-list-list{
                                flex: 8;
                                margin: 0 20px;
                                >ul{
                                    display: flex;
                                    flex-direction: column;
                                    >li{
                                        color: #555;
                                        width: 100%;
                                        height: 30px;
                                        margin-top: 10px;
                                        line-height: 30px;
                                        border-bottom: 1px solid rgba(146,146,146,.39);
                                        transition: all .4s;
                                        &:last-child{
                                            margin-bottom: 15px;
                                        }
                                        &:hover{
                                            border-bottom: 1px solid rgba(146,146,146,.8);
                                        }
                                    }
                                }
                            }
                        }

                    }
                }

            }
        }
    }
</style>