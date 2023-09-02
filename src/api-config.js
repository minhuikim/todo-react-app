let backendHost;

const hostname = window && window.location && window.location.hostname;

/**
 * 백엔드 서비스 주소인 http://localhost:8080을 변수에 담고 현재 브라우저의 도메인이 localhost인 경우 로컬 호스트에서 동작하는 백엔드 애플리케이션을 사용
 * 
 * 20230830 Back-end AWS 빌드 후 Front-end 통합 작업 및 테스팅
 * 20230830 Front-end 배포를 위해 backendHost 수정
 */
if (hostname === "localhost") {
    backendHost = "http://localhost:8080";
} else {
    // 일래스틱 빈스톡의 애플리케이션 URL
    // backendHost = "http://prod-todo-api-service-m.ap-northeast-2.elasticbeanstalk.com";
    // Backend 도메인 URL
    backendHost = "https://api.minhsw.com";
}

export const API_BASE_URL = `${backendHost}`;