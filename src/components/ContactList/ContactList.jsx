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
        <div id="filter-list" className={styled.contactList}>
            {isLoading === true ?
                <div className={styled.list__loader}><RotatingLines/></div> : 
            items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(contact => ( 
                <ContactListItem contact={contact} />                               
            ))}
            {error && <li className={styled.list__error}></li> }
        </div>   
    )
}

//removeFromContacts={removeFromContacts} 