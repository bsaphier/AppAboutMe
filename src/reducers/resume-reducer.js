import { RESUME_LOADED } from '../constants';


const initialState = {
    name: '',
    contact: {},
    resume: {},
    siteInfo: '',
    portfolio: {}
};


export default (state = initialState, action) => {
    const nextState = {...state};
    switch (action.type) {
        case RESUME_LOADED:
            nextState.name = action.name;
            nextState.resume = action.resume;
            nextState.contact = action.contact;
            nextState.siteInfo = action.siteInfo;
            return nextState;
        default:
            return nextState;
    }
};
