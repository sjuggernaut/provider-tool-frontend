// action - state management
import * as actionTypes from 'store/actionTypes';
import {SHARE_COMMUNICATION_TYPE, SHARE_COMMUNICATION_MODE} from 'store/constant';


export const initialState = {
    from_user: "",
    to_user: "",

    mode: SHARE_COMMUNICATION_MODE.DASHBOARD,
    type: SHARE_COMMUNICATION_TYPE.EXTERNAL_FOLLOWUP,

    instance_type: "",
    instance_object: ""
}


const externalFollowUp = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHARE_SET_EXTERNAL_FOLLOWUP_DATA: {
            const {data} = action;
            return {
                ...state,
                ...data
            }
        }
        default: {
            return {...state};
        }
    }
};

export default externalFollowUp;
