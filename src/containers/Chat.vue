<template>
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
</template>

<script>
// import ClsChat from '../javascripts/chat'


export default {
  mounted: function () {
    //   new ClsChat;
  },
};
</script>