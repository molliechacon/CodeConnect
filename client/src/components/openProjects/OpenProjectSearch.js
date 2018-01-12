﻿import "./OpenProjectSearch.css"
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import DatePicker from 'react-datepicker';


const OpenProjectSearch = (props) => {

    return (

        <div className="col sm12">
            <div id="project-search-title" className="valign-wrapper">
                <h4>PROJECT SEARCH</h4>
            </div>

            <div id="search-form">
                <form>
                    <div className="form-group col s4">
                        <label>Keyword(s)</label>
                        <input name="keyword" onChange={props.onChange} type="text" className="form-control" id="keyword" placeholder="Keyword" value={props.keyword} />

                    </div>
                    <div className="form-group col s4">
                        <label>Start Date</label>
                        <DatePicker
                            selected={props.startDate ? props.startDate : null}
                            onChange={props.onChangeStartDate}
                            placeholderText="Start Date"
                        />
                    </div>
                    <div className="form-group col s4">
                        <label>End Date</label>
                        <DatePicker
                            selected={props.endDate ? props.endDate : null}
                            onChange={props.onChangeEndDate}
                            placeholderText="End Date"
                        />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default OpenProjectSearch;