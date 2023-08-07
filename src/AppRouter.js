import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

/** 
<BrowserRouter>
    react-dom-router의 라우터 컴포넌트 중 하나로,
    오래된 버전의 클라이언트-사이드 라우팅의 경우 브라우저 화면은 업데이트 되지만 
    브라우저의 히스토리에 남지 않아 뒤로가기 같은 버튼 지원이 제대로 안되는 경우가 있다.
    BrowserRouter의 경우 브라우저가 관리하는 히스토리를 사용해 브라우저와 리액트 사이의 URL을 동기화 하므로 그런 문제가 발생하지 않는다.
<Route>
    실제 경로를 지정해주기 위한 컴포넌트
    http://localhost:3000/login 경로는 Login 컴포넌트를 렌더링 하기 위해 <Route path="login" element={<Login />} />와 같이 Route 컴포넌트를 선언
<Routes>
    여러개의 Route를 관리하고 실제로 가장 적합한 Route를 찾아주는 컴포넌트
    URL 경로가 바뀌는 경우 Routes 컴포넌트가 자신에게 등록된 모든 Route컴포넌트를 검토하고 가장 적합한 Route를 찾는다.
*/
function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
};

export default AppRouter;