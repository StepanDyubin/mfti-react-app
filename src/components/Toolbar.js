import Typography from "@material-ui/core/Typography";
import React from "react";
import AppBar from "@material-ui/core/AppBar";


export const Toolbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Toolbar
                </Typography>
            </Toolbar>
        </AppBar>
    )
};
