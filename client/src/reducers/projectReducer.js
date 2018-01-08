﻿import { SEARCH_PROJECTS, FETCH_OPEN_PROJECTS, FETCH_PROJECT_BY_ID } from '../actions/types';

export default function (state = { intial: {} }, action) {
    console.log('projects reducer: action recieved:======', action);
    switch (action.type) {
        case SEARCH_PROJECTS:
            return action.payload.data
        case FETCH_OPEN_PROJECTS:
            return action.payload.data
        case FETCH_PROJECT_BY_ID:
            return action.payload.data
        default:
            return state;
    }
}