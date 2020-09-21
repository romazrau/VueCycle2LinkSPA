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
          <div class="navebar_add_icons">
            <div class="navebar_add_postition_icons">
              <i id="navebar_plus_icon" class="fas fa-plus navebar_plus_icon"></i>
              <i id="navebar_down_icon" class="fas fa-angle-down"></i>

              <div id="navebar_down_list" class="navebar_down_list foldingCurtainUp">
                <button class onclick="location.hash = '#create-activity'">創建活動</button>
                <button id="changeBack" class onclick="location.hash = '#create-community'">創建社團</button>
              </div>
            </div>
          </div>

          <div class="navebar_msg_icons hide">
            <!-- <i id="navbar_msg" class="fas fa-bullhorn login_bullhorn"></i> -->
            <i id="navbar_logout" class="fas fa-sign-out-alt login_bullhorn"></i>
          </div>

          <div id="navbar_log-in" class="li_menutitle header_nav" v-on:click="isLogin">
            <router-link
              :to="{ name: 'login' }"
              v-on:click="currentRouteName = 'navbar_login'"
              id="header_link_login"
              href="#log-in"
            >
              Log
              in
              <br />登入
            </router-link>
          </div>
        </div>

        <div class="navbar_menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>

    <con-chat></con-chat>

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
import conChat from "./containers/Chat";
import ClsNavbar from "./javascripts/navbar";

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
  components: { conChat },
  mounted: function () {
    new ClsNavbar();
  },
  methods: {
    isLogin: function () {
      this.currentRouteName = 'navbar_login';
      if (
        localStorage.getItem("Cycle link user data") &&
        localStorage.getItem("Cycle link token")
      ) {
        this.$router.push({name: "personal-maneger"});
      }
    },
  },
};
</script>

<style></style>
