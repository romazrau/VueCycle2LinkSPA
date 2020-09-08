<!--single-file component (App.vue)-->

<template>
  <div id="app">
    <header>
      <nav id="navbar_main" class="header">
        <a class="header_title" href>
          <img src="/img/海龜gogo_new.gif" alt="海龜" />
        </a>

        <div class="div_dropdownmenu">
          <div
            v-for="nav in myNavs"
            :key="nav.id"
            :id="nav.id"
            :class="['li_menutitle', 'header_nav', { active: currentRouteName == nav.id }]"
          >
            <router-link
              :to="{ name: nav.to }"
              class="nav-underline"
              @click="currentRouteName = nav.id"
            >
              {{ nav.title }}
              <br />
              {{ nav.title2 }}
            </router-link>
          </div>
        </div>

        <div class="div_container_login">
          <div id="navbar_log-in" class="li_menutitle header_nav">
            <a id="header_link_login" href="#log-in">
              Log
              in
              <br />登入
            </a>
          </div>
        </div>

        <div class="navbar_menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>

    <div class="upTop">
      <i class="far fa-arrow-alt-circle-up fa-2x"></i>
    </div>
    <!-- * 懸浮icon -->
      <div class="chat_container">
    <div class="chat_icon_container">
      <img src="/img/talk.png" class="chat_icon_main" alt="聊天" />
      <img
        id="chat_robot_icon"
        src="/img/icons8-broken-robot-100.png"
        class="chat_icon widthAndHeight2Zero"
        alt="客服"
      />
      <img
        id="chat_friend_icon"
        src="/img/icons8-user-group-100.png"
        class="chat_icon widthAndHeight2Zero"
        alt="我的聯絡人"
      />
    </div>

    <!-- * 聊天機器人 -->
    <div class="chat_robot_room_window hide">
      <img
        id="chat_robot_window_close"
        class="chat_window_close"
        src="/img/times-solid.svg"
        alt="X"
      />
      <div id="chat_message_window_title" class="chat_window_title">聊天機器人</div>
      <div id="chat_robot_message" class="chat_message">訊息</div>
      <div class="chat_input">
        <textarea
          placeholder="想說什麼呢?"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='想說什麼呢?'"
          row="2"
        ></textarea>
      </div>
    </div>

    <div class="chat_list_window hide">
      <img id="chat_list_window_close" class="chat_window_close" src="/img/times-solid.svg" alt="X" />
      <div class="chat_window_title">聊天列表</div>
      <ul class="chat_list">
        <!-- 列表 -->
      </ul>
    </div>
  </div>

    <div class="page_container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- * ****************     **************** footer ****************    **************** -->
    <footer>
      <div class="footer_info">
        <div>
          <h6>Account</h6>
          <ul>
            <li>
              <a href="#sign-Up">Sign up</a>
            </li>
            <li>
              <a href="#log-in">Log in</a>
            </li>
            <li>
              <a href="#personal-page">MY</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Discover</h6>
          <ul>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#activity">Activity</a>
            </li>
            <li>
              <a href="#">Topics</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Cycle-Link</h6>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_info2">
        <div class="footer_icon">
          <p>Follow Us</p>
          <a href="#">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube fa-lg"></i>
          </a>
        </div>
        <div class="footer_cy">© 2020 Cycle-Link</div>
      </div>
    </footer>
  </div>
</template>

<script>
import chat from './containers/Chat';

export default {
  data: function () {
    return {
      currentRouteName: "",
      myNavs: [
        {
          id: "navbar_activity",
          title: "Activity",
          title2: "活動",
          to: "activity",
        },
        {
          id: "navbar_community",
          title: "Community",
          title2: "社團",
          to: "community",
        },

        {
          id: "navbar_map",
          title: "Map",
          title2: "地圖",
          to: "map",
        },
        {
          id: "navbar_about-us",
          title: "About Us",
          title2: "關於我們",
          to: "about-us",
        },
      ],
    };
  },
  components: { chat },
};
</script>

<style></style>
