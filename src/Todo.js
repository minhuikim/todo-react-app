import React, {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) => {
    const [item, setItem] = useState([props.item]);
    const deleteItem = props.deleteItem;

    // deleteEventHandler
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    return (
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase inputProps={{ "aria-label": "naked" }} type="text" id={item.id} name={item.id} value={item.title}
                multiline={true} fullWidth={true}/>
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