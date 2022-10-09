import React from "react";
import styled from "./ContactListItem.module.css"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

export const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch()

    const handleDelete = () => dispatch(deleteContact(contact.id))

    return (
        <div className={styled.item__container} key={contact.id}>
            <div className={styled.item__name}>
                <span >{contact.name}</span>
            </div>
            <div className={styled.item__number }>
                <span >{contact.number}</span>
            </div>
            <button className={styled.filterList__btn} onClick={handleDelete}>Delete</button>
        </div>        
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.object
}

//onClick={removeFromContacts}