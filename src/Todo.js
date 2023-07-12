import React, {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    // 수정
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.editItem;
    // 삭제
    const deleteItem = props.deleteItem;

    // 수정기능 활성화
    const turnOffReadOnly = () => {
        setReadOnly(false);
    };

    // 수정완료 (읽기만 가능)
    const turnOnReadOnly = (e) => {
        // Todo항목 수정을 완료한 시점에 http 요청
        if (e.key == "Enter" && readOnly == false) {
            setReadOnly(true);
            editItem(item);
        }
    };

    // 내용 수정
    const editEventHandler = (e) => {
        // 프론트에서 수정하는 Todo항목 item값을 업데이트하되, http요청은 안하도록 변경
        // item.title = e.target.value;
        // editItem();
        
        setItem({...item, title: e.target.value});
    };

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item); // 체크 상태 변경 시 백엔드에 http 요청
    };

    // 삭제기능
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase inputProps={{ "aria-label": "naked", readOnly: readOnly }} onClick={turnOffReadOnly} onKeyDown={turnOnReadOnly} onChange={editEventHandler}
                type="text" id={item.id} name={item.id} value={item.title} multiline={true} fullWidth={true} />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;