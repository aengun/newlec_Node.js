import React from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import SecurityContext from "../security/SecurityContext"

export default class Login extends React.Component {
    constructor() {
        super();

        this.uidInput = React.createRef();
        this.pwdInput = React.createRef();
    }

    componentDidMount() {

       
    }

    loginButtonClickHandler(e){
        e.preventDefault();
        console.log("로그인 버튼 누름");

        let uid = this.uidInput.current.value;
        let pwd = this.pwdInput.current.value;

        fetch(`http://localhost:3000/api/member/${uid}`)
            .then(result => result.json())
            .then(member => {
                console.log(bcrypt.compareSync(pwd, member.pwd));
                // if(bcrypt.compareSync(pwd, member.pwd)){
                //     //성공하면 뭐할건딩?
                //     SecurityContext.userName = uid;
                //     SecurityContext.authorities = ['admin','teacher','user'];
                // }
            }, err => {
                console.log(err);
            });
    }

    render() {
        return <main>
            <h2 className="main title">로그인</h2>

            <div className="breadcrumb">
                <h3 className="hidden">breadlet</h3>
                <ul>
                    <li>home</li>
                    <li>회원</li>
                    <li>로그인</li>
                </ul>
            </div>

            <div className="margin-top first">
                <h3 className="hidden">로그인 정보 입력</h3>
                <form className="login-form" method="post">
                    <fieldset>
                        <legend className="hidden">로그인 폼</legend>
                        <h4>
                            <img src="../images/member/txt-title.png" />
                        </h4>
                        <ul className="login-box">
                            <li>
                                <label for="uid">아이디</label>
                                <input type="text" name="username" placeholder="아이디" ref={this.uidInput}/></li>
                            <li>
                                <label for="pwd">비밀번호</label>
                                <input type="password" name="password" placeholder="비밀번호" ref={this.pwdInput}/></li>
                        </ul>

                        <div className="login-btn-box">
                            <input type="hidden" />
                            <input style={{width:"200px"}} type="submit" className="btn login-btn" onClick={this.loginButtonClickHandler.bind(this)}/>
                        </div>
                        <ul className="login-option">
                            <li>
                                <span>아이디 또는 비밀번호를 분실하셨나요?</span>
                                <a href="find-id">
                                    <img alt="ID/PWD 찾기" src="../images/member/btn-find.png" />
                                </a>
                            </li>
                            <li className="margin-top">
                                <span>아이디가 없으신 분은 회원가입을 해주세요.</span>
                                <a href="agree">
                                    <img alt="회원가입" src="../images/member/btn-join.png" />
                                </a>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </div>

        </main>;
    }
};