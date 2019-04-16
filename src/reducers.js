import { combineReducers} from "redux";
import tasksReducer from './components/DashBoard/MyTasks/duck/reducers'
import projectsReducer from './components/DashBoard/Projects/duck/reducers'

const rootReducer = combineReducers({
	tasks: tasksReducer,
	projects: projectsReducer,
});

export default rootReducer


