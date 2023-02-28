import {Alert, AlertTitle} from "@mui/material";

const Error = () => {
    return (
        <Alert severity="error">
            <AlertTitle>Error 404</AlertTitle>
            This page wasnot found!
        </Alert>
    )
}
export default Error