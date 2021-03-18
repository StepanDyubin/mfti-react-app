import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import MUIToolbar from '@material-ui/core/Toolbar';
import React from "react";

export const Toolbar = () => {
    return (
        <AppBar position="relative">
            <MUIToolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
            </MUIToolbar>
        </AppBar>
    );
}
