import React, { Component, Fragment } from "react";

class Forgot extends Component {
  render() {
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
            <div className="col-xl-3 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"></div>

            <div className="col-xl-6 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
              <div className="card shadow-none border-0 ms-auto me-auto login-card">
                <div className="card-body rounded-0 text-left">
                  <h2 className="ps-1 fw-700 display1-size display2-md-size mb-4">
                    비밀번호 변경
                  </h2>
                  <div className="form-group icon-input mb-3">
                    <input
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="가입 시 등록한 핸드폰번호를 입력해주세요."
                    />
                    <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                  </div>
                  <form>
                    <div className="form-group icon-input mb-3">
                      <input
                        type="Password"
                        className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="새로운 비밀번호를 입력해주세요."
                      />
                      <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                    </div>
                    <div className="form-group icon-input mb-3">
                      <input
                        type="Password"
                        className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="새로운 비밀번호를 다시한번 입력해주세요."
                      />
                      <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                    </div>
                  </form>

                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <a
                        href="/login"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      >
                        비밀번호 변경
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
}

export default Forgot;
