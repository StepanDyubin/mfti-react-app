import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'

import {Layout} from "../components/Layout";
import {Card} from "../components/Card";


export function List() {
    const data = useSelector(state => state.persons.list);

    return (
        <Layout>
            <Grid container spacing={4}>
                {data?.map((person) => (
                    <Grid item key={person.id} xs={12} sm={6} md={4}>
                        <Card id={person.id} name={person.name} image={person.image} wikiLink={person.wiki} />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
}
