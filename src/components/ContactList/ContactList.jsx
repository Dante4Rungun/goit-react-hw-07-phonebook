import { ContactListItem } from "components/ContactListItem/ContactListItem";
import React, { useEffect } from "react";
import styled from "./ContactList.module.css"
import { getContacts, getError, getFilter, getIsLoading } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { RotatingLines } from 'react-loader-spinner'

export const ContactList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const items = useSelector(getContacts)

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])

    return (
        <ul id="filter-list" className={styled.filterList}>
            {isLoading === true ?
                <li className={styled.list__loader}><RotatingLines /></li> : 
            items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(contact => (
                <li key={contact.id} className={styled.filterList__item}>
                    <ContactListItem id={contact.id} name={contact.name} number={contact.phone} /> 
                </li>                 
            ))}
            {error && <li className={styled.list__error}></li> }
        </ul>   
    )
}

//removeFromContacts={removeFromContacts} 