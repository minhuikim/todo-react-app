import "./App.css";
import Todo from "./Todo";
import React, { useEffect, useState } from "react";
import { Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography } from "@mui/material";
import AddTodo from "./AddTodo";
import { call, signout } from "./service/ApiService";

/*
  useEffect를 사용하지 않았을 때의 무한루프
    : 렌더링 -> 컴포넌트 호출 -> App() 함수 호출 -> fetch() -> Todo API 호출(비동기) -> then() -> setItem -> item 상태 초기화 -> 재렌더링 -> App() 호출...
      localhost:3000으로 접속해 network확인해보면 todo를 무한 호출 하고 있음
  useEffect를 사용할 경우
    : 첫 렌더링(마운팅)이 일어났을 때 배열[] 안의 오브젝트 값이 변할 때마다 콜백 함수 호출
      (렌더링 후에 발생하는 효과(Effect))
      -> [items]으로 설정 시 무한루프
*/
function App() {
  // deleteItem 추가 후 테스트를 위해 작성한 useState([...]) 배열을 빈 배열로 초기화
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
  }, [])

  // 새로운 Todo 추가
  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  };

  // Todo 수정
  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  };

  // Todo 삭제
  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  let todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );

  // 20230805 navigationBar 추가
  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">오늘의 할일</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <div className="App">
      {navigationBar} {/* 네비게이션 바 렌더링 */}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
