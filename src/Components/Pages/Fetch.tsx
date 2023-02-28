import axios from "axios";
import {useEffect, useState} from "react";
import {Alert, AlertTitle, Box, CircularProgress, List, ListItem, ListItemText, Typography} from "@mui/material";
export type DataType = {
    [K: string]: string | number
}
enum STATUS {
    ERROR,
    LOADING,
    OK
}
export const getData = () => {
    return axios.get<DataType[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
}
const Fetch = () => {
    const [data, setData] = useState<DataType[]>([])
    const [status, setStatus] = useState<STATUS>(STATUS.LOADING)
    useEffect(() => {
        getData().then((data) => {
            if(Object.keys(data.data).length > 0) {
                setData(data.data)
                setStatus(STATUS.OK)
            } else {
                setStatus(STATUS.ERROR)
            }
        })
    },[])
    if(status === STATUS.OK) {
        return (
            <>
                <Typography component='h2'>
                    Random API
                </Typography>
                <List>
                    {data?.map((item) => (
                        <ListItem alignItems="flex-start" key={item.id}>
                            <ListItemText
                                primary={`${item.id}. ${item.title}`}
                                secondary={item.body}
                            />
                        </ListItem>
                    ))}
                </List>
            </>
        )
    } else if (status === STATUS.ERROR) {
        return (
            <Alert severity="error">
                <AlertTitle>Get error 404</AlertTitle>
                Data not found!
            </Alert>
        )
    } else {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }
}
export default Fetch