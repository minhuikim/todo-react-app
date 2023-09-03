import React from "react";
import { Navigate } from "react-router-dom";

// 쿼리 파라미터의 값을 찾아 토큰이 존재하는 경우 로컬스토리지에 저장한 후 메인 화면인 todo화면으로 redirect
const SocialLogin = (props) => {
    // 쿼리 파라미터에서 값을 추출해주는 함수
    const getUrlParameter = (name) => {
        let search = window.location.search;
        
        let params = new URLSearchParams(search);
        return params.get(name);
    };

    const token = getUrlParameter("token");

    console.log("토큰 파싱: " + token);

    if (token) {
        console.log("로컬 스토리지에 토큰 저장" + token);
        localStorage.setItem("ACCESS_TOKEN", token);
        return (
            <Navigate to={{
                pathname: "/",
                state: { from: props.location },
            }}/>
        );
    } else {
        return (
            <Navigate to={{
                pathname: "/login",
                state: { from: props.location },
            }}/>
        );
    }
};

export default SocialLogin;