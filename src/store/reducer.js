import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducer import
import customizationReducer from './reducers/customizationReducer';
import snackbarReducer from './reducers/snackbarReducer';
import cartReducer from './reducers/cartReducer';
import sectionFormReducer from './reducers/sectionFormReducer';

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
    customization: customizationReducer,
    snackbar: snackbarReducer,
    sectionForm: sectionFormReducer,
    cart: persistReducer(
        {
            key: 'cart',
            storage,
            keyPrefix: 'berry-'
        },
        cartReducer
    )
});

export default reducer;
