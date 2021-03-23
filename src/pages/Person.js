import { createSelector } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/Card";
import {useSelector} from "react-redux";



const selectPerson = createSelector(
    [
        state => state.persons.list,
        (_, personId) => personId
    ],
    (list, personId) => {
        return list.find((person) => person.id === Number(personId));
    }
);

export const Person = () => {
    const { personId } = useParams();

    const data = useSelector(state => selectPerson(state, personId))

    return data ? (
        <Layout>
            <Card name={data.name} wikiLink={data.wiki} image={data.image} id={data.id} />
        </Layout>
    ) : null
}
