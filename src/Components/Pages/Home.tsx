import {Alert, AlertColor, Button, Grid, List, ListItem, ListItemText, Snackbar, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem, removeAllItems} from "../../redux/reducers/todoListSlice";

export type AlertType = {
    show: boolean
    type: AlertColor | undefined
    text: string
}
const Home = () => {
    const list = useSelector((state:any) => {
        return state.todoListSlice.list
    });
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('')
    const [alert, setAlert] = useState<AlertType>({
        show: false,
        type: 'error',
        text: 'error'
    })
    const addItemTodo = () => {
        if(inputValue && !list?.includes(inputValue)) {
            dispatch(addItem(inputValue))
        } else if(!inputValue) {
            setAlert({
                show: true,
                type: 'error',
                text: 'Pole musí být vyplněno'
            })
        } else if(list?.includes(inputValue)) {
            setAlert({
                show: true,
                type: 'error',
                text: 'Tato položka už v seznamu je !!!'
            })
        }
    }
    const removeItemTodo = (removeIndex:number) => {
        dispatch(removeItem(removeIndex))
    }
    const removeAllItemsTodo = () => {
        dispatch(removeAllItems())
    }
    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert({
            ...alert,
            show: false,
        })
    };
    return (
        <>
            <Snackbar open={alert.show} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.type}>
                    {alert.text}
                </Alert>
            </Snackbar>
            <Grid container>
                <Grid item container gap='20px' alignItems='center'>
                    <Grid item>
                        <TextField
                            label="Item"
                            variant="outlined"
                            size='small'
                            value={inputValue}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setInputValue(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={() => addItemTodo()}>Add</Button>
                    </Grid>
                </Grid>
                <Grid item container flexDirection='column'>
                    <Grid item>
                        <List>
                            {list?.map((item: string, index: number) => (
                                <ListItem alignItems="center" sx={{gap: '10px'}} key={item}>
                                    <ListItemText
                                        primary={`${index+1}. ${item}`}
                                    />
                                    <DeleteIcon color='primary' onClick={() => removeItemTodo(index)}/>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={removeAllItemsTodo}>Remove all</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Home