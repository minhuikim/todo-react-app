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
        if (e.key == "Enter") {
            setReadOnly(true);
        }
    };

    // 내용 수정
    const editEventHandler = (e) => {
        item.title = e.target.value;
        editItem();
    }

    // 삭제기능
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    return (
        <ListItem>
            <Checkbox checked={item.done}/>
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