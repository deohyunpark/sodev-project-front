import React, { Fragment, useState } from "react";
import axios from "axios";
function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post("/v1/login", {
        email: inputId,
        password: inputPw,
      })
      .then((res) => {
        if (res.data === "EMAIL_NOT_FOUNDED") {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'

          alert("존재하지 않는 이메일입니다.");
        } else if (res.data === "PASSWORD_NOT_EQUAL") {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (res.headers.auth === "[ROLE_MEMBER]") {
          console.log("======================", res.headers.auth);
          document.location.href = "/";
        }
      })
      .catch();
  };
  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="/">
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                SoDev{" "}
              </span>{" "}
            </a>
            <button className="nav-menu me-0 ms-auto"></button>

            <a
              href="/login"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              로그인
            </a>
            <a
              href="/register"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              회원가입
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-14 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3">
                  개발자를 위한 커뮤니티
                  <br />
                  SoDev!
                </h2>
                <form>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      value={inputId}
                      onChange={handleInputId}
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="이메일을 입력해주세요."
                    />
                    {/* <h6 className="mb-0 ps-2 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                      이메일 형식으로 입력해주세요.
                    </h6> */}
                  </div>
                  <div className="form-group icon-input mb-4">
                    <input
                      value={inputPw}
                      onChange={handleInputPw}
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="비밀번호를 입력해주세요."
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck5"
                    />
                    <label className="form-check-label font-xsss text-grey-500">
                      아이디 기억
                    </label>
                    <a
                      href="/forgot"
                      className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                    >
                      비밀번호를 잊으셨나요?
                    </a>
                  </div>
                </form>

                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <div
                      onClick={onClickLogin}
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      로그인
                    </div>
                  </div>
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    계정이 없으신가요?{" "}
                    <a href="/register" className="fw-700 ms-1">
                      회원가입
                    </a>
                  </h6>
                </div>
                <div className="col-sm-12 p-0 text-center mt-2">
                  <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                    소셜 계정으로 로그인{" "}
                  </h6>
                  <div className="form-group mb-1">
                    <a
                      href="/register"
                      className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                    >
                      <img
                        src="assets/images/naver.png"
                        alt="icon"
                        className="ms-2 w40 mb-1 me-5"
                      />{" "}
                      NAVER
                    </a>
                  </div>
                  <div className="form-group mb-1">
                    <a
                      href="/register"
                      className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                    >
                      <img
                        src="assets/images/3669973.png"
                        alt="icon"
                        className="ms-2 w40 mb-1 me-5"
                      />{" "}
                      KAKAO
                    </a>
                  </div>
                  <div className="form-group mb-1">
                    <a
                      href="/register"
                      className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                    >
                      <img
                        src="assets/images/google_icon.png"
                        alt="icon"
                        className="ms-2 w40 mb-1 me-5"
                      />{" "}
                      GOOGLE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
