import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getFilter } from '../../redux/contacts/contacts-selectors';
import {changeFilter} from "../../redux/contacts/actions";

import style from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const onChange = e => dispatch(changeFilter(e.target.value))

    return (
        <div className={style.filter}>
            <label>Find contacts by name
                <input
                    className='input'
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    />
            </label>
        </div>
    )
}

export default Filter;
