import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/Card";

export const Person = () => {
    const { personId } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://akabab.github.io/starwars-api/api/id/${personId}.json`)
            .then(res => res.json())
            .then(personData => {
                setData(personData);
            })
    }, [personId]);

    return (
        <Layout>
            <Card name={data.name} wikiLink={data.wiki} image={data.image} id={data.id} />
        </Layout>
    )
}
