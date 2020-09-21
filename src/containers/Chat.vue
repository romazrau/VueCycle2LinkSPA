<template>
  <div>
    <div class="upTop">
      <i class="far fa-arrow-alt-circle-up fa-2x"></i>
    </div>
    <!-- * 懸浮icon -->
    <div class="chat_container">
      <div class="chat_icon_container">
        <div class="chat_icon_talk">
          <i class="fas fa-circle chat_icon_talk_dot hide"></i>
          <img src="/img/icons8-sms-64.png" class="chat_icon_main" alt="聊天" />
        </div>

        <img
          id="chat_robot_icon"
          src="/img/megaphone-svgrepo-com.svg"
          class="chat_icon widthAndHeight2Zero"
          alt="群聊"
        />
        <img
          id="chat_friend_icon"
          src="/img/icons8-smiling-face-with-heart-96.png"
          class="chat_icon widthAndHeight2Zero"
          alt="我的聯絡人"
        />
      </div>

      <!-- * 聊天機器人 改成世界頻道囉 -->
      <div class="chat_robot_room_window hide">
        <img
          id="chat_robot_window_close"
          class="chat_window_close"
          src="/img/times-solid.svg"
          alt="X"
        />
        <div id="chat_message_window_title" class="chat_window_title">
          <span>
            <i class="fas fa-globe-americas"></i>&nbsp;&nbsp;公開聊天室
          </span>
        </div>
        <div id="chat_robot_message" class="chat_message">訊息</div>
        <div class="chat_input">
          <textarea
            id="chat_robot_textarea"
            placeholder="想說什麼呢?"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='想說什麼呢?'"
            row="2"
          ></textarea>
        </div>
      </div>

      <div class="chat_list_window hide">
        <img
          id="chat_list_window_close"
          class="chat_window_close"
          src="/img/times-solid.svg"
          alt="X"
        />
        <div class="chat_window_title">聊天列表</div>
        <ul class="chat_list">
          <!-- 列表 -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClsChat from '../javascripts/chat'

export default {
  mounted: function () {
      new ClsChat;
  },
};
</script>