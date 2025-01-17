import {
    serverURL
} from "./api.js";





/* eslint-disable */



function ClsActivity() {

    // *second nav bar
    let pageY = window.pageYOffset;
    const activityNavbar = document.querySelector("#activity_navbar");
    window.addEventListener(
        'scroll',
        () => {
            if (window.pageYOffset - pageY > 0) {
                activityNavbar.classList.remove("transYsWidthTo0Bottom");
            } else {
                activityNavbar.classList.add("transYsWidthTo0Bottom");

            }

            pageY = window.pageYOffset;
        }
    );


    // * --------------- GO搜尋結果 ----------------

    var activity_search_go = document.getElementById("activity_search_go");
    var activity_card_ALL = document.getElementById("activity_card_ALL");
    var activity_main = document.querySelector(".activity_main");
    var activity_option  = document.getElementById("activity_option");
    var searchtext =  document.getElementById("search_txt");

    activity_search_go.addEventListener('click',function () {
        var typeId = activity_option.value;
        var searchtxt = searchtext.value;
        activity_card_ALL.style.display = 'none';
        activity_main.style.display = 'block';
        activeSearchGoAwait(typeId,searchtxt);
        
        
    })
    
    

    

    // * ---------------- 文字樣板 -----------------

    const htmlActSearch = (o) => {
        return ` 
        <option value="${o.fId}">${o.fLabelName}</option>`;
    }
    const ActSearch = document.querySelector("#activity_option");


   

    const display_active_main_level = (o) => {
        o.map(
            (e, index) => {
                ActSearch.innerHTML += htmlActSearch(e);
            }
        )
    };
    
    const activemainlevelAwait = async () => {
        try {
            // fetch 接兩個參數 ( "請求網址",  { 參數物件，可省略 }  )
            // *用變數接 fetch 結果 ，要用await等。
            let response = await fetch(serverURL.activemainlevel, {
                method: "GET", // http request method 
                headers: { // http headers
                    'Content-Type': 'application/json' // 請求的資料類型
                },
                // 以下跟身分認證有關，後端要使用session 要帶這幾項
                cache: 'no-cache',
                credentials: 'include',
            });
            // 用變數接 fetch結果的資料內容， 要用await等。
            let result = await response.json();
            
            display_active_main_level(result.data);
            // *用 result  do something ...

        } catch (err) {
            console.log(err);
            // 錯誤處理

        }
    }

    activemainlevelAwait();



    const activeSearchGoAwait = async (id,text) => {
        try {
            // fetch 接兩個參數 ( "請求網址",  { 參數物件，可省略 }  ),
            // *用變數接 fetch 結果 ，要用await等。
            let response = await fetch(`${serverURL.active}/${id}/${text}`, {
                method: "GET", // http request method 
                headers: { // http headers
                    'Content-Type': 'application/json' // 請求的資料類型
                },
                // 以下跟身分認證有關，後端要使用session 要帶這幾項
                cache: 'no-cache',
                credentials: 'include',
            });
            // 用變數接 fetch結果的資料內容， 要用await等。
            let result = await response.json();
           display_search_go(result.data);
            // *用 result  do something ...

        } catch (err) {
            console.log(err);
            // 錯誤處理

        }
    }

    




    //*進階搜尋區 ---------------------------------------------------------
    //show
    document.querySelector("#activity_advence_show").addEventListener(
        "click",
        () => {
            document.querySelector(".activity_advence_search_container").classList.toggle("hide");
            document.querySelector(".activity_advence_t").classList.toggle("upside_down")
        }
    );


    //日期


    //防止冒泡
    const stopdate = document.querySelectorAll(".ui-state-default");
    for(var i =0;i<stopdate.length;i++)
    {
        stopdate[i].addEventListener("click",function(){
            console.log("WTF");
            event.preventDefault();
        })
    }

    //舉辦縣市
    const activityCityData = [
        "台北市",
        "新北市",
        "桃園市",
        "台中市",
        "台南市",
        "高雄市",
        "澎湖縣",
        "連江縣",
        "金門縣"
    ]

    const data2CityCheckbox = array => {
        let result = ""
        array.map((e) => {
            result += `<div class='activity_search_city'><input type="checkbox"  name="city" value="${e}">
                       <span>${e}</span></div>`
        })
        return result;
    }


    //顯示進階搜尋
    document.querySelector('#active_advance_search_city').innerHTML = data2CityCheckbox(activityCityData);







    // 進階搜尋_DA
    //抓取地址
    var btncity = document.getElementById("search_city");
    var btncitydetial = document.getElementById("search_citydetial");
    btncity.addEventListener('click', function () {
        btncity.classList.add("search_hidden");
        $("#search_citydetial").fadeIn("5000")
                btncitydetial.classList.remove("search_hidden");
        ;
        
        // btncitydetial.classList.add("search_hidden");
        
    });
    var list = document.getElementsByTagName("li");
    var searchcitytext = "";
    var btncitytext = document.getElementById("search_city_text");
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            // searchcitytext = this.innerHTML;
            $("#search_citydetial").fadeOut("5000");
            btncitydetial.classList.add("search_hidden");
            btncity.classList.remove("search_hidden");
            btncitytext.innerHTML = this.innerHTML;
        })
    }
    // ----------------------------------------------------------------
    var btndate = document.getElementById("search_date");
    var btndatedetial = document.getElementById("search_datedetial");
    btndate.addEventListener('click', function () {
        btndate.classList.add("search_hidden");
        
        $("#search_datedetial").fadeIn("5000");
        btndatedetial.classList.remove("search_hidden");
    });

    // !抓時間
    // $(function () {
    //     //jQuery datepicker 設定限制日期最小最大 minDate maxDate hideIfNoPrevNext
    //     $("#ac_date_start_from").datepicker({
    //         onSelect: function (dateText, inst) {
    //             var dateAsString = dateText; //the first parameter of this function
    //             var dateAsObject = $(this).datepicker('getDate'); //the getDate method
    //             getstartdate(dateAsString);
    //             // startdate(dateAsString);
    //             var startdate = dateText;
    //         },
    //         //顯示上個月日期 及下個月日期 ，但是不可選的。
    //         //default:false
    //         showOtherMonths: true,
    //         // 設置當沒有上一個/下一個可選擇的情況下，隱藏掉相應的按鈕。（默認為不可用）
    //         //配合有設定最大最小時使用
    //         //default:false
    //         hideIfNoPrevNext: true,
    //         //設置一個最小的可選日期。可以是Date對象，或者是數字（從今天算起，例如+7），
    //         //或者有效的字符串('y'代表年, 'm'代表月, 'w'代表周, 'd'代表日, 例如：'+1m +7d')。
    //         minDate: "+7d",
    //         //  設置一個最大的可選日期。可以是Date對象，或者是數字（從今天算起，例如+7），
    //         //或者有效的字符串('y'代表年, 'm'代表月, 'w'代表周, 'd'代表日, 例如：'+1m +7d')。
    //         maxDate: "+1m"
    //     });

    //     $("#ac_date_end_from").datepicker({
    //         onSelect: function (dateText, inst) {
    //             var dateAsString = dateText; //the first parameter of this function
    //             var dateAsObject = $(this).datepicker('getDate'); //the getDate method
    //             getenddate(dateAsString);
    //             displaydate();
    //         },
    //         //顯示上個月日期 及下個月日期 ，但是不可選的。
    //         //default:false
    //         showOtherMonths: true,
    //         // 設置當沒有上一個/下一個可選擇的情況下，隱藏掉相應的按鈕。（默認為不可用）
    //         //配合有設定最大最小時使用
    //         //default:false
    //         hideIfNoPrevNext: true,
    //         //設置一個最小的可選日期。可以是Date對象，或者是數字（從今天算起，例如+7），
    //         //或者有效的字符串('y'代表年, 'm'代表月, 'w'代表周, 'd'代表日, 例如：'+1m +7d')。
    //         minDate: "+7d",
    //         //  設置一個最大的可選日期。可以是Date對象，或者是數字（從今天算起，例如+7），
    //         //或者有效的字符串('y'代表年, 'm'代表月, 'w'代表周, 'd'代表日, 例如：'+1m +7d')。
    //         maxDate: "+1m"

    //     });



    // });
    // //抓取時間
    // function getstartdate(startdate) {
    //     var startdatetext = document.getElementById("search_date_text");
    //     startdatetext.innerHTML = "起始日 <br>" + startdate + '<br>';
    // }

    // function getenddate(enddate) {
    //     var enddatetext = document.getElementById("search_date_text");
    //     enddatetext.innerHTML += "結束日 <br>" + enddate;
    // }

    // function displaydate() {
    //     $("#search_datedetial").fadeOut("5000");
    //     btndatedetial.classList.add("search_hidden");
    //     btndate.classList.remove("search_hidden");
    // }




  // 活動樣板
    const htmlActCard = (o) => {
        return ` <a href="#activity/detail/${o.fId}">
    <div class="active_card_container">
        <div class="active_card" >
            <i class="fas fa-heart fa-lg active_card_heart"></i>
            <div class="active_card_div">
                <img src="${o.fImgPath}" alt="" class="active_card_img">
            </div>
            <div class="active_card_info">
                <p>${o.fActivityDate}</p>
                <p class="active_card_title">${o.fActName}</p>
                <div class="active_card_location_div">
                    <img src="img/929497.svg" class="active_card_location">
                    <p>${o.fActLocation}</p>
                </div>
            </div>
        </div>
    </div></a>`;
    }

    // 搜尋結果
    //todo 圖片路徑 目前是寫死的 如有更新後需更改為動態
    const htmlActSearchgo = (o) =>{
        return `
        <a href="#activity/detail/${o.fId}">
        <div class="active_card_container">
            <div class="active_card" >
                <i class="fas fa-heart fa-lg active_card_heart"></i>
                <div class="active_card_div">
                    <img src="img/event6.png" alt="" class="active_card_img">
                </div>
                <div class="active_card_info">
                    <p>${o.fActivityDate}</p>
                    <p class="active_card_title">${o.fActName}</p>
                    <div class="active_card_location_div">
                        <img src="img/929497.svg" class="active_card_location">
                        <p>${o.fActLocation}</p>
                    </div>
                </div>
            </div>
        </div></a>
                        
        `
    }

    //ActCardData
    //* ------------------------------------- 文字樣板 -------------------------------------
    const display_active = (o) => {
        
        o.map(
            (e, index) => {
                // console.log(e);
                ActCard.innerHTML += htmlActCard(e);
            }
        )
        // console.groupEnd("display_active map");

    }
    const ActSeen = document.getElementById("activity_event_history")

    const display_active_seen = (o) =>{
        o.map((e,index)=>{
            ActSeen.innerHTML += htmlActCard(e);
        })
    }

    const ActSearchresult = document.getElementById("activesearchresult");
    
    
    const display_search_go = (o) =>{
        ActSearchresult.innerHTML = "";
        o.map((e,index)=>{
            
            ActSearchresult.innerHTML += htmlActSearchgo(e);
        })
    }

    const activeAwait = async () => {
        try {
            // fetch 接兩個參數 ( "請求網址",  { 參數物件，可省略 }  )
            // *用變數接 fetch 結果 ，要用await等。
            let response = await fetch(serverURL.active, {
                method: "GET", // http request method 
                headers: { // http headers
                    'Content-Type': 'application/json' // 請求的資料類型
                },
                // 以下跟身分認證有關，後端要使用session 要帶這幾項
                cache: 'no-cache',
                credentials: 'include',
            });
            // 用變數接 fetch結果的資料內容， 要用await等。
            let result = await response.json();
            
            display_active(result.data);
            // *用 result  do something ...

        } catch (err) {
            console.log(err);
            // 錯誤處理

        }
    }

    activeAwait();

    // 瀏覽過的活動
    const activeseenAwait = async () => {
        try {
            // fetch 接兩個參數 ( "請求網址",  { 參數物件，可省略 }  )
            // *用變數接 fetch 結果 ，要用await等。
            let response = await fetch(serverURL.activeseen, {
                method: "GET", // http request method 
                headers: { // http headers
                    'Content-Type': 'application/json' // 請求的資料類型
                },
                // 以下跟身分認證有關，後端要使用session 要帶這幾項
                cache: 'no-cache',
                credentials: 'include',
            });
            // 用變數接 fetch結果的資料內容， 要用await等。
            let result = await response.json();
            console.log("rrr",result)
            //文字樣板
            display_active_seen(result.data);
            // *用 result  do something ...

        } catch (err) {
            console.log(err);
            // 錯誤處理

        }
    }

    activeseenAwait();



    

    const ActCard = document.querySelector("#activity_event_top");

    //AJAX

   
    //------------------------------------------------------

    // const htmlActCard2 = (o) => {
    //     return ` 
    // <div id="ActCard2">
    // <img src="${o.imgPath}" class="activity_event_img" alt="">
    // <p>${o.date}</p>
    // <h3>${o.title}</h3>
    // <img src="img/icon1.svg" class="activity_icon" alt=""><span>${o.count}</span>
    // </div>`;

    // }

    const ActCard2 = document.querySelector("#activity_event_recommend");

    //AJAX
    let ActCardData2 = [{
            imgPath: "img/event9.jpg",
            date: "2020/11/19",
            title: "城市獵人 - 生態公園夜觀",
            count: 999,
            member: "彌勒佛",
            local: "玉山國家公園"
        },
        {
            imgPath: "img/event10.jpg",
            date: "2020/08/20",
            title: "綠的手作坊 - 漂流木新生命",
            count: 999,
            member: "彌勒佛",
            local: "紅樹林"
        },
        {
            imgPath: "img/event11.png",
            date: "2020/10/16",
            title: "海洋危機，拯救機會",
            count: 999,
            member: "彌勒佛",
            local: "烏石港"
        }

    ]


    ActCardData2.map(
        (e, index) => {
            ActCard2.innerHTML += htmlActCard(e);
        }
    )

    //------------------------------------------------------




    // const HisAct = document.querySelector("#activity_event_history")

    // let HisActData = [{
    //         imgPath: "img/event2.jpg",
    //         date: "2020/09/26",
    //         title: "螢光夜跑",
    //         count: 100,
    //         member: "王曉明",
    //         local: "新北大道"
    //     },
    //     {
    //         imgPath: "img/event3.jpg",
    //         date: "2020/09/26",
    //         title: "潛水撿垃圾，愛海洋！",
    //         count: 99,
    //         member: "洲仔於",
    //         local: "布袋漁港"
    //     },
    //     {
    //         imgPath: "img/event4.jpg",
    //         date: "2020/09/26",
    //         title: "飢餓三十！",
    //         count: 500,
    //         member: "時間管理大師",
    //         local: "桃園"
    //     }
    // ]

    // HisActData.map(
    //     (e, index) => {
    //         HisAct.innerHTML += htmlActCard(e);
    //     }
    // )

        

    // 跳轉 #activity/detail

    document.querySelectorAll(".active_card_container").forEach(
        (item, index) => {
            item.addEventListener(
                "click",
                (event) => {
                    location.hash = `#activity/detail`
                }
            )
        }
    )


}
 
export default ClsActivity;