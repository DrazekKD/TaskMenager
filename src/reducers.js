import { combineReducers} from "redux";
import tasksReducer from './app/tasks/duck'
import projectsReducer from './app/projects/duck'

const rootReducer = combineReducers({
	tasks: tasksReducer,
	projects: projectsReducer
});

export default rootReducer


