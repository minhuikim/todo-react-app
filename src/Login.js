import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { signin, socialLogin } from "./service/ApiService";

// Login 페이지 -> 로그인버튼 -> handleSubmit -> signin(ApiService)
// 20230807 계정 생성 기능 추가
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");
        // ApiService의 signin 메서드를 사용해 로그인
        signin({ username: username, password: password });
    };

    // 20230903 소셜 로그인 함수 추가
    const handleSocialLogin = (provider) => {
        socialLogin(provider);
    }

    // 로그인 화면
    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "8% "}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form nobalidate="true" onSubmit={handleSubmit}>
                {" "}
                {/* submit 버튼을 누르면 handleSubmit이 실행됨 */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth id="username" label="아이디" name="username" autoComplete="username" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth id="password" label="패스워드" name="password" autoComplete="current-password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            로그인
                        </Button>
                    </Grid>
                    {/** 20230903 소셜 로그인 버튼 추가 */}
                    <Grid item xs={12}>
                        <Button onClick={() => handleSocialLogin("github")} fullWidth variant="contained" style={{backgroundColor: '#000'}}>
                            깃허브로 로그인하기
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                            계정이 없습니까? 여기서 가입하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;