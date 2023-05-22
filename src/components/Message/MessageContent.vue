<template>
    <div class="message-content">
        <div class="message-content-section">
            <div class="message-content-item">
                <div class="message-content">
                    <h1>留言板💌</h1>
                    <div class="message-title-bom">
                        <p>
                            注：请文明发言，维护网络秩序
                        </p>
                    </div>
                    <div class="message-publish">
                        <div class="message-publish-content">
                            <!-- <h4>发表言论</h4> -->
                            <textarea rows="" cols="" maxlength="180"></textarea>
                            <div class="username">
                                <div class="username-img">
                                    <i class="ri-user-fill"></i>
                                </div>
                                <input type="text" placeholder="昵称">
                            </div>
                            <div class="email">
                                <div class="email-img">
                                    <i class="ri-mail-send-line"></i>
                                </div>
                                <input type="text" placeholder="邮箱">
                            </div>
                            <div class="submit-sub">
                                <input type="submit" value="发送评论">
                            </div>

                        </div>
                    </div>
                    <div class="message-content-center">
                        <ul>
                            <li>
                                <div class="message-content-img"></div>
                                <h6>月三</h6>
                                <span>2023-12-27</span>
                                <p>主包你好，请传授我您毕生所学的练气之道</p>
                            </li>
                        </ul>
                    </div>


                </div>

                <div class="message-content-item-user">
                    <div class="message-user">
                        <div class="message-top"></div>
                        <div class="message-bom">
                            <div class="message-pic"></div>
                            <p>为了<a href="#">喜欢</a>的东西而奋斗🥠</p>
                        </div>
                    </div>
                    <div class="message-list">
                        <div class="message-list-box">
                            <div class="message-list-box-title">
                                <span>最近目标</span>
                            </div>
                            <div class="message-list-list">
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
        name:'MessageContent',
        setup() {
            
        }
    }
</script>

<style lang="less" scoped>
    .message-content{
        margin-top: 20px;
        width: 100%;
        .message-content-section{
            width: 100%;
            .message-content-item{
                display: flex;
                width: 1100px;
                margin: 0 auto;
                .message-content{
                    flex: 2;
                    margin: 0 15px;
                    box-shadow: 0 2px 4px rgba(0,0,0,.1);
                    transition: all .5s;
                    >h1{
                        text-align: center;
                        padding: 10px 10px;
                        color: #333333;
                    }
                    .message-title-bom{
                        margin-bottom: 10px;
                        >p{
                            text-align: center;
                        }
                    }
                    .message-content-center{
                        ul{
                            width: 100%;
                            overflow: hidden;
                            li{
                                position: relative;
                                margin: 20px 20px;
                                padding: 20px 20px;
                                color: #333;
                                box-shadow: 0 2px 10px rgba(0,0,0,.1);
                                .message-content-img{
                                    width: 50px;
                                    height: 50px;
                                    background: url(/src/assets/images/userimg.png) no-repeat;
                                    background-size: cover;
                                    border-radius: 50%;
                                    box-shadow: 0 2px 4px rgba(0,0,0,.1);
                                }
                                >h6{
                                    position: absolute;
                                    left: 90px;
                                    top: 20px;
                                    font-size: 20px;
                                    font-weight: 400;
                                }
                                >span{
                                    position: absolute;
                                    left: 90px;
                                    top: 50px;
                                    font-size: 14px;
                                    font-weight: 300;
                                }
                                >p{
                                    margin-top: 5px;
                                    padding: 5px 0;
                                }
                            }
                        }
                    }
                    .message-publish{
                        width: 100%;
                        .message-publish-content{
                            margin: 0 20px;
                            h4{
                                font-size: 24px;
                                margin-bottom: 10px;
                                padding-left: 15px;
                                color: #333;
                            }
                            >textarea{
                                resize: none;
                                box-sizing: border-box;
                                width: 100%;
                                height: 200px;
                                border: 1px solid rgba(0,0,0,.1);
                                outline: none;
                                padding: 20px 20px;
                                font-size: 18px;
                                background: url(/src/assets/images/userli.jpg) no-repeat;
                                background-size: 180px;
                                background-position: right bottom;
                            }
                            .username{
                                
                                margin-top: 10px;
                                width: 100%;
                                position: relative;
                                    border: 1px solid #ccc;
                                    .username-img{
                                    width: 50px;
                                    height: 100%;
                                    position: absolute;
                                    text-align: center;
                                    line-height: 40px;
                                    background-color: #eeeeee;
                                    border-right: 1px solid #ccc;
                                    >i{
                                        color: #333;
                                        font-size: 20px;
                                    }
                                }
                                >input{
                                    width: 100%;
                                    height: 40px;
                                    text-indent: 5em;
                                    outline: none;
                                    font-size: 14px;
                                    color: #333;
                                    border: none;
                                }
                            }
                            .email{
                                margin-top: 10px;
                                width: 100%;
                                position: relative;
                                border: 1px solid #ccc;
                                .email-img{
                                    width: 50px;
                                    height: 100%;
                                    position: absolute;
                                    text-align: center;
                                    line-height: 40px;
                                    background-color: #eeeeee;
                                    border-right: 1px solid #ccc;
                                    >i{
                                        color: #333;
                                        font-size: 20px;
                                    }
                                }
                                >input{
                                    width: 100%;
                                    height: 40px;
                                    text-indent: 5em;
                                    outline: none;
                                    font-size: 14px;
                                    border: none;
                                    color: #333;
                                }
                            }
                            .submit-sub{
                                margin-top: 10px;
                                width: 100%;
                                position: relative;
                                >input{
                                    width: 100%;
                                    height: 40px;
                                    background-color: #51aded;
                                    border: none;
                                    color: white;
                                    font-size: 18px;
                                    transition: all .4s;
                                    &:hover{
                                        background-color: #555555;
                                    }
                                }
                            }
                        }
                    }
                }
                .message-content-item-user{
                    position: relative;
                    flex: 1;
                    margin: 0 15px;
                    .message-user{
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
                        .message-top{
                            flex: 1;
                            background-color: #c59145;
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
                            transition: all .4s;
                        }
                        .message-bom{
                            flex: 1;
                            position: relative;
                            .message-pic{
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
                    .message-list{
                        box-shadow: 0 2px 4px rgba(0,0,0,.1);
                        transition: all .5s;
                        margin-bottom: 15px;
                        &:hover{
                            box-shadow: 0 8px 15px rgba(146,146,146,.39)
                        }
                        .message-list-box{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            height: 100%;
                            .message-list-box-title{
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
                            .message-list-list{
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