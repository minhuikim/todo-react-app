import "./App.css";
import Todo from "./Todo";
import React, { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";

function App() {
  // deleteItem 추가 후 테스트를 위해 작성한 useState([...]) 배열을 빈 배열로 초기화
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;  // key를 위한 id
    item.done = false;              // done 초기화

    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);     // [...items] : 새 배열 추가
    // console.log("items : ", items);
  };

  const deleteItem = (item) => {
    // 삭제할 아이템을 찾는다.
    const newItems = items.filter(e => e.id != item.id);

    // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems])
  }

  let todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );

  return (<div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>);
}

export default App;
