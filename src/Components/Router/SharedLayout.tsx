import {Outlet} from "react-router";
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import {NavigationGrid} from "../Css/TwinMacro/Main";
import {Link} from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavigationGrid>
                        <Typography>
                            <Link to='/'>
                                Home
                            </Link>
                        </Typography>
                        <Typography>
                            <Link to='/fetch'>
                                Fetch
                            </Link>
                        </Typography>
                    </NavigationGrid>
                </Toolbar>
            </Container>
        </AppBar>
        <Container maxWidth="xl" sx={{minHeight: '100vh', paddingTop: '24px', paddingBottom: '24px'}}>
            <Outlet/>
        </Container>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavigationGrid>
                        <Typography>
                            Footer
                        </Typography>
                    </NavigationGrid>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}
export default SharedLayout