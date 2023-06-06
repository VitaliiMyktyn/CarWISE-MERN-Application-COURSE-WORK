import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { carsReducer } from "./reducers/carsReducer";
import { alertsReducer } from "./reducers/alertsReducer";
const composeEnchancers = composeWithDevTools({});

const rootReducer = combineReducers({
	carsReducer,
	alertsReducer,
});

const store = createStore(
	rootReducer,
	composeEnchancers(applyMiddleware(thunk))
);

export default store;
