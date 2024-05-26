import React from 'react';
import { CategoriesInt } from '../../store/context/contextInterfaces';
import './CategoryDropdown.scss';
import { Link, useParams } from 'react-router-dom';



const CategoryDropdown: React.FC<CategoriesInt> = (props: CategoriesInt) => {
    const { userId } = useParams<{ userId: string }>();
    return (
        <div className="select-dropdown">
            <select name="select" id="select">
                <option value="" disabled selected>Choose a category</option>
                <option value={props.movies}>{props.movies}</option>
                <option value={props.series}>{props.series}</option>
                <option value={props.podcatsts}>{props.podcatsts}</option>
                <option value={props.kids}>{props.kids}</option>
            </select>
            <div className="search">
               <Link to={`/search/${userId}`} className='text-light'><i className="fa fa-search search-icon" aria-hidden="true"></i></Link> 
            </div>
        </div>
    );
};

export default CategoryDropdown;






