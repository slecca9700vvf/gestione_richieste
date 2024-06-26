import React from 'react';
import { getLabelByName } from '../Exports/Labels';


const Sector = () => {
    return (
        <div className="sector form-container">
        <h2>{ getLabelByName("forms_sector_new") }</h2>
            <form action="#" method="post">
                <label htmlFor="sector">{ getLabelByName("forms_sector_description") }</label>
                <input type="text" id="sector" name="sector" placeholder={ getLabelByName("forms_sector_description_placeholder") } required/>
                <label htmlFor="sector">{ getLabelByName("forms_sector_additional_info") }</label>
                <input type="text" id="sector" name="sector" placeholder={ getLabelByName("forms_sector_additional_info_placeholder") } required/>
                <input type="submit" value={ getLabelByName("forms_sector_submit") }/>
            </form>
        </div>
        );
}
export default Sector;