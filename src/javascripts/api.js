const rootURL = "http://localhost:3050";

const serverURL = {
  root: rootURL,
  login: `${rootURL}/users/login`,
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
  articlesearch: `${rootURL}/article/search`,
  homePages: `${rootURL}/home/`,
  community: `${rootURL}/community/`,
  communityManager: `${rootURL}/community/communityManager/`
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
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Cycle link token"), // *這個屬性帶 JWT
    },
  });

  let result = await respone.json();
  return result; // 回傳身分解析結果
};
// checkLogin()

export { serverURL, checkLogin };
