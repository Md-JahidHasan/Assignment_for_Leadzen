import React from 'react';
import { default as api } from '../../store/apiSlice'
import Person from './Person';

const Persons = () => {
    ;
    const { data, isFetching, isSuccess, isError } = api.useGetPersonsQuery();
    console.log(data);
    return (
        <div>
            <h1>Persons</h1>
            {
                data?.map(person => <Person
                key={person.id}
                person={person}
                ></Person>)
            }
            
        </div>
    );
};

export default Persons;