/**
 * API call 함수
 * 백엔드로 요청을 보낼 때 사용하기 위한 유틸리티 함수 작성
 */
import { API_BASE_URL } from "../api-config";

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
    return fetch(options.url, options).then((response) => {
        if (response.status == 200) {
            return response.json();
        }
    }).catch((error) => {
        console.log("http error");
        console.log(error);
    });
}