import {Toolbar} from "./Toolbar";
import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Toolbar />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {children}
                </Container>
            </main>
        </>
    )
}
