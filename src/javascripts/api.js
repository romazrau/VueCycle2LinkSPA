const rootURL = "http://localhost:3050";

const serverURL = {
  root: rootURL,
  login: `${rootURL}/users/login`,
  users: `${rootURL}/users/`,
  userDetail: `${rootURL}/users/detail/me`,
  forgetPassword: `${rootURL}/users/Forget/Password`,
  test: `${rootURL}/test/`,
  postslist: `${rootURL}/posts/`,
  article: `${rootURL}/article/`,
  active: `${rootURL}/active/`,
  activemainlevel: `${rootURL}/active/searchmainlevel/`,
  actDetail: `${rootURL}/activityDetail/`,
  actsearchdetail: `${rootURL}/activity/searchdetail/`,
  maps: `${rootURL}/map/`,
  personalPages: `${rootURL}/personalPage/`,
  activeseen: `${rootURL}/active/activeseen`,
  articlepost: `${rootURL}/article/post`,
  articlereply: `${rootURL}/article/reply`,
  articlesearch: `${rootURL}/article/`,
  articleuser: `${rootURL}/article/userinfo`,
  articlebycommunity: `${rootURL}/article/community/`,
  addarticle: `${rootURL}/article/add`,
  hottiestcommunity: `${rootURL}/article/hottiest/`,
  explorecommunity: `${rootURL}/article/explore`,
  txtsearchcommunitycard: `${rootURL}/article/txtsearchcard/`,
  txtsearchcommunityarticle: `${rootURL}/article/txtsearcharticle/`,
  displayarticleforedit: `${rootURL}/article/edit/display/`,
  // editarticle: `${rootURL}/article/edit/`,
  editarticle: `${rootURL}/article/edit/`,
  homePages: `${rootURL}/home/`,
  community: `${rootURL}/community/`,
  communityManager: `${rootURL}/community/communityManager/`,
  communityMember: `${rootURL}/community/communityById_communityMember/`,
  communityMemberAccessRight: `${rootURL}/community/members/`,
  communityList:`${rootURL}/community/communityByMemberId/`,
  creatCommunity: `${rootURL}/`,
  activeinsertseensql: `${rootURL}/active/activeinsertseensql/`,
  activeforyou: `${rootURL}/active/activeforyou/`,
  getActByCommunityId: `${rootURL}/active/by/community/`,
  likes: `${rootURL}/like/`,
  addlikes: `${rootURL}/like/add`,
  removelikes: `${rootURL}/like/remove`,
  addActLikeToSQL: `${rootURL}/active/addActLikeToSQL`,
  addReply: `${rootURL}/reply`,
  removeactlikesql: `${rootURL}/active/removeactlikesql`,
  getChatroom: `${rootURL}/chat/`,
  getChatmessage: `${rootURL}/chat/messages/`,
};



const checkLogin = async () => {
  // 向後端驗證身分，攜帶 JWT ， 後端解析你的身分
  if (!localStorage.getItem("Cycle link token")) {
    //
    return { result: 0, msg: "沒有 Token" };
  }

  let respone = await fetch(serverURL.login, {
    method: "GET",
    cache: "no-cache", // 不准使用快取
    headers: {
      // *攜帶 http request headers
      Authorization: localStorage.getItem("Cycle link token"), // *這個屬性帶 JWT
    },
  });

  let result = await respone.json();
  return result; // 回傳身分解析結果
};

export { serverURL, checkLogin };
