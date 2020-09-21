<template>
        <div id='page_log-in' class='page page_signIn'>

            <div class="Login_container" id="Login_container">
                <div class="Login_form-container Login_sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="Login_social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="Login_form-container Login_sign-in-container">
                    <form action="#" id="form_signIn">
                        <h1>Sign in</h1>
                        <div class="Login_social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input name="fAccount" type="text" placeholder="Account" />
                        <input name="fPassword" type="password" placeholder="Password" />
                        <div class="Login_CheckContainer">
                            <a class="Login_CheckBox_Link" href="">
                                <div class="Login_CheckBox" id="Login_CheckBox"></div>
                            </a>
                            <p>我不是機器人</p>
                        </div>
                        <a href="#" id="forgot-password" class="Forgotpassword">Forgot your password?</a>

                        <button id="loginSubmit">Sign In</button>
                    </form>
                </div>
                <div class="Login_overlay-container">
                    <div class="Login_overlay">
                        <div class="Login_overlay-panel Login_overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="Login_ghost" id="Login_signIn">Sign In</button>
                        </div>
                        <div class="Login_overlay-panel Login_overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="Login_ghost" id="Login_signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="forgot-password-modal" class="Forgotpasswordwindow hide">

                <!-- 弹窗内容 -->
                <div class="modal-content">
                    <span class="forgot-password-close">&times;</span>

                    <main>
                        <h2>忘記密碼</h2>
                        <form id="forgot-password-form">

                            <input class="login_input_item_input" id="login_input_account" type="text" name="fAccount"
                                placeholder="Account">
                            <input class="login_input_item_input" id="login_input_mail" type="text" name="fMail"
                                placeholder="E-Mail">

                            <input id="forgot-password-submit" type="submit">
                        </form>
                    </main>
                </div>

            </div>



            <div class="Login_checkviewcontainer">
                <!-- <a href="" class="Login_CloseLink"><img src="./img/times-solid.svg" width="20" alt=""></a> -->
                <div class="Login_checkviewtitle">
                    <h3>請勾選出下面圖片含有路牌</h3>
                </div>
                <div class="Login_checkviewdiv">
                    <div class="Login_imgLine">
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                    </div>
                    <div class="Login_imgLine">
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                    </div>
                    <div class="Login_imgLine">
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                        <div class="Login_checkimgbox"><img src="" alt=""></div>
                    </div>
                </div>
                <div class="Login_checkfooter"><input type="button" value="驗證" class="Login_answerBtn"></div>
            </div>
            <div class="Login_backgroundview Login_hide"></div>


        </div>

</template>

<script>
import ClsLogin from "../javascripts/login"


export default {
       mounted:  function(){
        new ClsLogin;
    }
    
}
</script>