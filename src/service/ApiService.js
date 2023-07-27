/**
 * API call 함수
 * 백엔드로 요청을 보낼 때 사용하기 위한 유틸리티 함수 작성
 */
import { API_BASE_URL } from "../api-config";

// call -> fetch -> (API 콜) -> then -> (HTTP 응답)
export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    if (request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    // 20230727 403에러 시 로그인 화면으로 redirect 추가 => sprint, npm start 후 / 경로로 들어가면 login페이지로 redirect됨
    return fetch(options.url, options).then((response) => {
        if (response.status == 200) {
            return response.json();
        } else if(response.status == 403) {
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
                // token이 존재하는 경우 Todo화면으로 redirect
                window.location.href = "/";
            }
        });
}