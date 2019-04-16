import { combineReducers} from "redux";
import tasksReducer from './components/DashBoard/MyTasks/duck/reducers'

const rootReducer = combineReducers({
	tasks: tasksReducer,
});

export default rootReducer


