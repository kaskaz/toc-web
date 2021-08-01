import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
