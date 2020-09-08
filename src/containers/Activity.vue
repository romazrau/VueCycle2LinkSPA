<template>
        <!-- * activity  ****************      ****************       ****************   -->
        <div id="page_activity" class="page">
            <div id="activity_navbar" class="page_navbar">
                <div class="container page_navbar_row">

                    <div>CC</div>

                    <div>
                        <button class="page_navbar_btn" onclick="location.hash = '#create-activity'">創建活動</button>
                    </div>
                </div>
            </div>

            <!---------------------------------- 主要活動顯示 ---------------------------------->
            <div class="activity_top">
                <img src="img/eventTop_01.svg">
                <div class="activity_search_container">
                    <div class="active_main_search">
                        <input id="search_txt" type="text">
                        <select name="type" id="activity_option">
                        </select>
                    </div>

                    <div class="active_advance_row">
                        <div id="activity_advence_show">進階搜尋<div class="activity_advence_t">▼</div>
                        </div>

                    </div>

                    <div class="activity_advence_search_container hide">

                        <div class="active_advance_search">
                            <div class="active_advance_search_tile">舉辦縣市:</div>
                            <div id="active_advance_search_city">
                                <!-- <div class='activity_search_city'>
                                    <input type="checkbox"  name="city" value="">
                                    <span>台北市</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="active_advance_row">
                            <div class="active_advance_search">
                                <div class="active_advance_search_tile">時間範圍:</div>
                                <div class="active_advance_dateRange">
                                    <select name="dateStart" size="1">
                                        <option value="2020">2020/10/09</option>
                                    </select>

                                    <span>起，至</span>

                                    <select name="dateEnd" size="1">
                                        <option value="2020">2020/10/09</option>
                                    </select>
                                    <span>止</span>

                                </div>
                            </div>
                        </div>


                        <div class="active_advance_row">
                            <div class="active_advance_search">
                                <div class="active_advance_search_tile">忽略額滿活動</div>
                                <input type="checkbox" name="" value="">
                            </div>

                            <div class=" active_advance_search">
                                <div class="active_advance_search_tile">忽略已舉辦活動</div>
                                <input type="checkbox" name="" value="">
                            </div>



                        </div>

                    </div>

                </div>

                <button id="activity_search_go">GO</button>
            </div>
            <!-------------------------------------- main -------------------------------------->
            <div class="activity_main">
                <div class="search_container ">
                    <div id="search_city" class="search_box">
                        <div id="search_city_text" class="search_citytext"></div>
                    </div>
                    <div id="search_citydetial" class="search_city_detail search_hidden  ">
                        <ul>
                            <li class="select_city">台北市</li>
                            <li class="select_city">桃園市</li>
                            <li class="select_city">新竹市</li>
                            <li class="select_city">苗栗市</li>
                            <li class="select_city">台中市</li>
                            <li class="select_city">彰化市</li>
                            <li class="select_city">嘉義市</li>
                            <li class="select_city">雲林市</li>
                            <li class="select_city">高雄市</li>

                        </ul>
                    </div>
                    <div id="search_date" class="search_box">
                        <div id="search_date_text" class="search_datetext"></div>
                    </div>
                    <div id="search_datedetial" class="search_datetext search_hidden">
                        <label for="ac_date_start_from">Startdate</label>
                        <input type="text" id="ac_date_start_from" name="ac_date_start_from" autocomplete="off"
                            onchange="getstartdate(this.id)" />
                        <label for="ac_date_end_from">Enddate</label>
                        <input type="text" id="ac_date_end_from" name="ac_date_end_from" autocomplete="off" />
                    </div>


                </div>
                <!-------------------------------------- 活動 -------------------------------------->
                <div id="activity_card_ALL">
                    <h3>主題活動</h3>
                    <div class="activity_event" id="activity_event_top">
                    </div>
                    <h3>為您推薦</h3>
                    <div class="activity_event" id="activity_event_recommend">
                    </div>
                    <div class="activity_create_btn">
                        <a href="#create-activity">我要發起活動</a>
                    </div>
                    <!---------------------------------- 瀏覽過的活動 ---------------------------------->

                    <h3>瀏覽過的活動</h3>
                    <div class="activity_event" id="activity_event_history">

                    </div>

                </div>

                <div class=" activity_main" id="activesearchresult">

                </div>
            </div>



        </div>
    
</template>

<script>
import ClsActivity from '../javascripts/activity';




export default {     
       mounted:  function(){
        new ClsActivity;
    },

}
</script>