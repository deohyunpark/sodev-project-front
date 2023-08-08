import React, { Fragment, useState, useRef } from "react";
import axios from "axios";

function Register() {
  // 초기값
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwCheck, setInputPwCheck] = useState("");
  const [inputNicK, setInputNick] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  // 에러메세지
  const [idMessage, setIdMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  // const [isId, setIsId] = useState(false);
  // const [isname, setIsName] = useState(false);
  // const [isPassword, setIsPassword] = useState(false);
  // const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 유효성 검사 메서드
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setInputId(currentId);
    const idRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!idRegExp.test(currentId)) {
      setIdMessage("아이디는 이메일 형식만 가능합니다.");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setInputNick(currentName);

    if (currentName.length < 2 || currentName.length > 16) {
      setNameMessage("닉네임은 2글자 이상 16글자 이하로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setInputPw(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("영문,숫자,특수기호 포함 6자리 이상이어야 합니다.");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setInputPwCheck(currentPasswordConfirm);
    if (inputPw !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("");
      setIsPasswordConfirm(true);
    }
  };

  // 휴대폰 하이픈 자동입력 메서드
  const phoneRef = useRef();

  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setInputPhone(e.target.value);
  };

  // 회원가입 메서드
  const onClickJoin = () => {
    axios
      .post("/v1/join", {
        email: inputId,
        password: inputPw,
        nickName: inputNicK,
        phone: inputPhone,
      })
      .then((res) => {
        console.log(res.data.result);
        if (res.data.resultCode === "SUCCESS") {
          alert("회원가입이 완료되었습니다.");
          document.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error.response.data.data);
        if (error.response.data.resultCode === "DUPLICATE_USER_ID") {
          alert("이미 등록된 아이디가 있습니다.");
        } else if (
          error.response.data.resultCode === "DUPLICATE_USER_NICKNAME"
        ) {
          alert("이미 사용중인 닉네임 입니다.");
        } else if (error.response.data.data !== null) {
          alert("회원가입 양식을 지켜주세요.");
        }
        // else if (error.response.data.data.nickName !== null) {
        //   alert(error.response.data.data.nickName);
        // } else if (error.response.data.data.password !== null) {
        //   alert(error.response.data.data.password);
        // } else if (error.response.data.data.phone !== null) {
        //   alert(error.response.data.data.phone);
        // }
      });
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
          <div className="col-xl-3 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"></div>
          <div className="col-xl-6 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size  display2-md-size mb-3">
                  회원가입
                </h2>
                <form>
                  <div className="form-group icon-input mb-0">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      value={inputId}
                      onChange={onChangeId}
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="이메일을 입력해주세요."
                    />
                    <h6 className="ps-3 d-inline-block bg-white fw-500 font-xsss text-danger mb-0">
                      {idMessage}
                    </h6>
                  </div>
                  <div className="form-group icon-input mb-0">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      value={inputNicK}
                      onChange={onChangeName}
                      type="text"
                      className="style2-input ps-5 form-control text--900 font-xsss fw-600"
                      placeholder="닉네임을 입력해주세요."
                    />
                    <h6 className="ps-3 d-inline-block bg-white fw-500 font-xsss text-danger mb-0">
                      {nameMessage}
                    </h6>
                  </div>

                  <div className="form-group icon-input mb-0">
                    <input
                      value={inputPw}
                      onChange={onChangePassword}
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="비밀번호를 입력해주세요."
                    />
                    <h6 className="ps-3 d-inline-block bg-white fw-500 font-xsss text-danger mb-0">
                      {passwordMessage}
                    </h6>
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-group icon-input mb-0">
                    <input
                      value={inputPwCheck}
                      onChange={onChangePasswordConfirm}
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="비밀번호를 다시한번 입력해주세요"
                    />
                    <h6 className="ps-3 d-inline-block bg-white fw-500 font-xsss text-danger mb-0">
                      {passwordConfirmMessage}
                    </h6>
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-group icon-input mb-3">
                    <input
                      value={inputPhone}
                      ref={phoneRef}
                      onChange={handlePhone}
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="핸드폰 번호를 입력해주세요."
                    />
                    <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                  </div>
                </form>

                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <div
                      onClick={onClickJoin}
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      회원가입
                    </div>
                  </div>
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    이미 SoDev에 가입이 되어있으신가요?{" "}
                    <a href="/login" className="fw-700 ms-1">
                      로그인
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
