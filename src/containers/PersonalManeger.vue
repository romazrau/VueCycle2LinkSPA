<template>
        <!-- * 會員頁面  ****************      ****************       ****************   -->
        <div id="page_personal-maneger" class="page">
            <div style="background-color: rgb(240, 240, 240);">
                <div class="personalManager_banner">
                    <!-- <p>hello</p> -->
                </div>
                <div class="personalManager_left">
                    <div class="personalManager_left_Info">
                        <div>
                            <img id="personal-manege-img" src="https://fakeimg.pl/300x300/"
                                class="personalManager_left_Info_img">
                            <button>編輯圖片</button>
                        </div>
                        <div class="personalManager_left_Info_txt">
                            <h3 id="personal-manege-name">訪客</h3>
                            <h4 id="personal-manege-account">guest</h4>
                            <p><img src="img/海龜幣.png" alt="" class="personalManager_SeaTurtleCoin"> 海龜積分：<span
                                    id="personal-manege-coin">0</span></p>
                            <p><i class="fas fa-crown"
                                    style="margin-right:0.5rem;color:var(--green-color)"></i>會員等級：<span
                                    id="personal-manege-account-type">普通會員</span></p>
                            <p>參與活動次數： <span id="personal-manege-act-count">0</span></p>
                            <p>追蹤活動：<span id="personal-manege-act-int-count">0</span></p>
                            <p>參加社團：<span id="personal-manege-com-count">0</span></p>
                        </div>
                    </div>
                </div>
                <div class="personalManager_right">
                    <div class="personalManager_right_title">
                        <div class="personalManager_right_title_btn" data-page-id="personalManager_right_page_info">
                            <p><i class="fas fa-user-alt"></i>基本資料</p>
                        </div>
                        <div class="personalManager_right_title_btn" data-page-id="personalManager_right_page_loveact">
                            <p><i class="fa fa-gratipay" aria-hidden="true"></i>追蹤活動</p>
                        </div>
                        <div class="personalManager_right_title_btn" data-page-id="personalManager_right_page_myact">
                            <p><i class="fa fa-check-circle" aria-hidden="true"></i>我的活動</p>
                        </div>
                        <div class="personalManager_right_title_btn" data-page-id="personalManager_right_page_mycom">
                            <p><i class="fa fa-users" aria-hidden="true"></i>我的社團</p>
                        </div>
                    </div>

                    <div id="personalManager_right_page_info" class="personalManager_right_content hide">
                        <h2>基本資料</h2>
                        <div class="personalManager_right_content_infoBasic">
                            <p><span>姓名：</span><input type="text" id="personal-maneger-input-name" value="--"></p>
                            <p><span>生日：</span><input type="text" id="personal-maneger-input-birth" value="--"></p>
                            <p><span>Email：</span><input type="text" id="personal-maneger-input-email" value="--">
                            </p>
                            <p><span>居住城市：</span><input type="text" id="personal-maneger-input-address" value="--"></p>
                            <p><span>行動電話：</span><input type="text" id="personal-maneger-input-phone" value="--"></p>
                            <p style="display: flex;align-self: start;"><span >個人簡介：</span><textarea
                                    id="personal-maneger-input-introduction" name="" cols="45" rows="8">範例</textarea>
                            </p>
                            <button>修改</button>
                        </div>

                    </div>

                    <div id="personalManager_right_page_loveact" class="personalManager_right_content">
                        <h2>追蹤活動</h2>
                        <div id="likeContainer"></div>
                    </div>

                    <div id="personalManager_right_page_myact" class="personalManager_right_content hide">
                        <h2>正在參加活動</h2>
                        <div id="attendContainer"></div>

                        <h2>曾經參與的活動</h2>
                        <div id="ExpiredattendedContainer"></div>
                    </div>

                    <div id="personalManager_right_page_mycom" class="personalManager_right_content hide">
                        <h2>管理社團</h2>
                        <div id="ItemContainerCommunityManager">
                            <div class="personalManager_right_content_info">
                                <img class="personalManager_right_content_info_img" src="https://fakeimg.pl/200x200/">
                                <div class="personalManager_right_content_infoText">
                                    <h3>Plogging河濱樂跑團</h3>
                                    <p><i class="fas fa-map-marker-alt fa-2x"></i>地點：台北河濱</p>
                                    <p><i class="fas fa-clock fa-2x"></i>開始時間：2020/10/07 19:00</p>
                                    <p><img src="img/海龜幣.png" alt="" class="personalManager_SeaTurtleCoin">海龜積分：500</p>
                                </div>
                            </div>

                        </div>

                        <h2>所屬社團</h2>
                        <div id="ItemContainerCommunity">
                            <div class="personalManager_right_content_info">
                                <img class="personalManager_right_content_info_img" src="https://fakeimg.pl/200x200/">
                                <div class="personalManager_right_content_infoText">
                                    <h3>Plogging河濱樂跑團</h3>
                                    <p><i class="fas fa-map-marker-alt fa-2x"></i>地點：台北河濱</p>
                                    <p><i class="fas fa-clock fa-2x"></i>開始時間：2020/10/07 19:00</p>
                                    <p><img src="img/海龜幣.png" alt="" class="personalManager_SeaTurtleCoin">海龜積分：500</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import personalManeger from "../javascripts/personal_maneger.js"

export default {
       mounted:  function(){
        new personalManeger;
    }
    
}
</script>