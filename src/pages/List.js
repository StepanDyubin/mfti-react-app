import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {Layout} from "../components/Layout";
import {Card} from "../components/Card";


export function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(res => res.json())
            .then(list => {
                setData(list);
            });

    }, []);

    return (
        <Layout>
            <Grid container spacing={4}>
                {data.map((person) => (
                    <Grid item key={person.id} xs={12} sm={6} md={4}>
                        <Card id={person.id} name={person.name} image={person.image} wikiLink={person.wiki} />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
}
