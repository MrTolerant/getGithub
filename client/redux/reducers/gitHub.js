import axios from 'axios'

const GET_PROJECT_README = 'GET_PROJECT_README'
const GET_PROJECTS_LIST = 'GET_PROJECTS_LIST'
const getProjectsUrl = (user) => `https://api.github.com/users/${user}/repos`
// const getReadmeUrl = (user, project) => `https://api.github.com/repos/${user}/${project}/readme`

const initialState = {
  user: null,
  list: [],
  readme: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_LIST: {
      return {
        ...state,
        user: action.user,
        list: action.list
      }
    }
    case GET_PROJECT_README: {
      return {
        ...state,
        user: action.user,
        readme: action.readme
      }
    }
    default:
      return state
  }
}

export function getProjectsList(user) {
  return (dispatch) => {
    const list = axios.get(getProjectsUrl(user))
    // eslint-disable-next-line no-console
    console.log(list)
    dispatch({
      list,
      user,
      type: GET_PROJECTS_LIST
    })
  }
}
