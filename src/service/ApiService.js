/**
 * API call 함수
 * 백엔드로 요청을 보낼 때 사용하기 위한 유틸리티 함수 작성
 */
import { API_BASE_URL } from "../api-config";

// call -> fetch -> (API 콜) -> then -> (HTTP 응답)
export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    // 20230803 로컬 스토리지에서 ACCESS TOKEN 가져오기
    // 액세스 토큰 헤더에 추가 : 로그인에 관련되지 않은 모든 API콜은 call 메서드를 통해 이루어지기 때문에 call에서 토큰이 존재하는 경우 헤더에 추가하는 로직 작성
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken != null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };
    if (request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    // 20230727 403에러 시 로그인 화면으로 redirect 추가 => sprint, npm start 후 / 경로로 들어가면 login페이지로 redirect됨
    return fetch(options.url, options).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else if(response.status === 403) {
            window.location.href = "/login"; //redirect
        } else {
            Promise.reject(response);
            throw Error(response);
        }
    }).catch((error) => {
        console.log("http error");
        console.log(error);
    });
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO).then((response) => {
            if(response.token) {
                // 20230803 로그인시 받은 토큰을 로컬스토리지에 저장
                localStorage.setItem("ACCESS_TOKEN", response.token);
                // console.log(localStorage);
                // token이 존재하는 경우 Todo화면으로 redirect
                window.location.href = "/";
            }
        });
}

// 20230807 계정 생성 메서드 추가
export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

// 20230903 socialLogin API 추가 (/auth/authorize/github로 브라우저 리다이렉트)
export function socialLogin(provider) {
    window.location.href = API_BASE_URL + "/auth/authorize" + provider;
}