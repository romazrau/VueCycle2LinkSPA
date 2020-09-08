<template>
        <div id="page_home" class="page">
            <!---------------------------------- 主要活動顯示 ---------------------------------->
            <div class="home_top_event">
                <!-- <img src="img/A1.jpg" id="A1">
                <p id="home_top_event_p"></p> -->
            </div>
            <div>
                <div class="home_top_text_wrapper">
                    <div class="home_top_text">
                        <p class="home_top_text_content">
                            行動帶來改變，加入守護環境的行列<br>
                            Cycle-Link的存在，因為脆弱的地球需要改變、需要行動。唯有結合大家的力量，才能讓地球永續發展；加入全臺灣300萬名支持者，和我們一起行動，帶來改變！<br>
                            解決地球資源透支的問題，回歸我們對於生活方式的選擇。
                        </p>
                    </div>
                </div>
                <div class="home_recent_container">
                    <div class="home_recent_weather">
                        <img src="/img/home01.png">
                    </div>
                    <div class="home_recent_activities">
                        <h2>近期活動</h2>
                        <!-- <div class="home_recent_activity_item">
                            <div class="home_recent_activity_item_img">
                                <img src="./img/home02.jpg">
                            </div>
                            <div class="home_recent_activity_item_content">
                                <a href="#activity/detail">世界環境日</a>
                                <p>2020/08/20 14:00</p>
                                <div class="home_recent_activity_item_content_btn">
                                    <i class="far fa-heart home_activity_icon"></i>
                                    <i class="far fa-share-square home_activity_icon"></i>
                                    <button>立即參加</button>
                                </div>
                            </div>
                        </div>
                        <div class="home_recent_activity_item">
                            <div class="home_recent_activity_item_img">
                                <img src="./img/home03.jpg"></div>
                            <div class="home_recent_activity_item_content">
                                <a href="#activity/detail">大安區丹堤讀書會</a>
                                <p>2020/08/28 19:00</p>
                                <div class="home_recent_activity_item_content_btn">
                                    <i class="far fa-heart home_activity_icon"></i>
                                    <i class="far fa-share-square home_activity_icon"></i>
                                    <button>立即參加</button>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="home_show_activities_wrapper">
                    <!-- <div class="home_showAct_left">
                        <div class="home_left_top">
                            <img src="./img/home04.JPG" class="home_left_top">
                        </div>
                        <div class="home_left_bottom">
                            <div class="home_left_bottom_item1">
                                <img src="./img/home05.jpg">
                            </div>
                            <div class="home_left_bottom_item2">
                                <img src="./img/home06.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="home_showAct_right">
                        <div class="home_right_left">
                            <div class="home_right_sm"><img src="./img/home07.jpg"></div>
                            <div class="home_right_lg"><img src="./img/home08.jpg"></div>
                        </div>
                        <div class="home_right_right">
                            <div class="home_right_lg">
                                <img src="img/home08.jpg">
                            </div>
                            <div class="home_right_sm"><img src="./img/home07.jpg"></div>
                        </div>
                    </div> -->
                </div>

                <section class="home_go2community">
                    <div class="home_go2community_title">
                        <h1>環境守護不孤單</h1>
                        <h3>加入社團，找到志同道合的夥伴！</h3>
                    </div>
                    <div class="home_go2community_cards_container">
                        <ul class="small-block-grid-2 medium-block-grid-3 home_go2_flip_cards">
                            <li ontouchstart="this.classList.toggle('hover');">
                                <div class="home_card_large home_card_button home_card_front">
                                    <a href="#community">淨灘</a>
                                    <i class="fas fa-broom home_card_icon"></i>
                                </div>
                                <div class="home_card_panel home_card_back">
                                    <div class="home_hub_info">
                                        <a href="#community">淨灘社團</a>
                                        <i class="fas fa-broom home_card_icon"></i>
                                        <p>台灣淨灘行動從15年前至今已經很普遍，不僅達到掃除垃圾的目的，更重要的是對於環境教育以及政策遊說的力量。</p>
                                    </div>
                                </div>
                            </li>
                            <li ontouchstart="this.classList.toggle('hover');">
                                <div class="home_card_large home_card_button home_card_front">
                                    <a href="#community">路跑</a>
                                    <i class="fas fa-running home_card_icon"></i>
                                </div>
                                <div class="home_card_panel home_card_back">
                                    <div class="home_hub_info">
                                        <a href="#community">路跑社團</a>
                                        <i class="fas fa-running home_card_icon"></i>
                                        <p>馬拉松作為一個城市性的體育活動，近年來逐漸成為一個全民參與的活動，無論專業運動員還是業餘愛好者，大家都可以擠在一起比賽。</p>
                                    </div>
                                </div>
                            </li>
                            <li ontouchstart="this.classList.toggle('hover');">
                                <div class="home_card_large home_card_button home_card_front">
                                    <a href="#community">教育</a>
                                    <i class="fas fa-book home_card_icon"></i>
                                </div>
                                <div class="home_card_panel home_card_back">
                                    <div class="home_hub_info">
                                        <a href="#community">偏鄉教育</a>
                                        <i class="fas fa-book home_card_icon"></i>
                                        <p>近年來，愈來愈多的大專院校注意到教師資源不平等的問題，並投入偏鄉教育，期盼藉由體制內與體制外共同努力，翻轉教育不平等。</p>
                                    </div>
                                </div>
                            </li>
                            <li ontouchstart="this.classList.toggle('hover');">
                                <div class="home_card_large home_card_button home_card_front">
                                    <a href="#community">海洋</a>
                                    <i class="fas fa-water home_card_icon"></i>
                                </div>
                                <div class="home_card_panel home_card_back">
                                    <div class="home_hub_info">
                                        <a href="#community">海洋環境</a>
                                        <i class="fas fa-water home_card_icon"></i>
                                        <p>今年世界海洋日的主題為「海洋生命Oceans of Life」，希望喚起人們對海洋生物多樣性的認識，透過選出自己喜愛的海洋生物，並一起行動來保護他們。
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li ontouchstart="this.classList.toggle('hover');">
                                <div class="home_card_large home_card_button home_card_front">
                                    <a href="#community">二手換物</a>
                                    <i class="fas fa-cookie-bite home_card_icon"></i>
                                </div>
                                <div class="home_card_panel home_card_back">
                                    <div class="home_hub_info">
                                        <a href="#community">二手市集</a>
                                        <i class="fas fa-cookie-bite home_card_icon"></i>
                                        <p>想要實現願望，要改變的不是物欲，而是 「看待物品的方式」。意識到這件事情後，我從對物品的堅持，就轉移成「藉由捨棄物品或購物，實現某種理想」。</p>
                                    </div>
                                </div>
                            </li>

                            <li ontouchstart="this.classList.toggle('hover');">
                                <div class="home_card_large home_card_button home_card_front">
                                    <a href="#community">森林</a>
                                    <i class="fas fa-tree home_card_icon"></i>
                                </div>
                                <div class="home_card_panel home_card_back">
                                    <div class="home_hub_info">
                                        <a href="#community">森林保育</a>
                                        <i class="fas fa-tree home_card_icon"></i>
                                        <p>台灣大規模伐木，以1912年第一列運材火車自二萬坪駛出為嚆矢，數十萬年來守護著美麗之島的蒼鬱森林在數十年內被無情砍伐。</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="small-12 small-centered medium-6 medium-centered large-3 large-centered home_go2C_seeMore">
                        <a href="#community">
                            <h6 class="text-center">See More</h6>
                            <p class="text-center">
                                <span class="fa-stack">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-angle-right fa-inverse fa-stack-1x"></i>
                                </span>
                            </p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
</template>

<script>
import  ClsHome  from '../javascripts/home'


export default {
    mounted:  function(){
        new ClsHome;
    }
    
}
</script>