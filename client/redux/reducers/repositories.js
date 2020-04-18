import axios from 'axios'

const GET_PROJECT_README = 'GET_PROJECT_README'
const GET_PROJECTS_LIST = 'GET_PROJECTS_LIST'
const RESET_STATE = 'RESET_STATE'
const getProjectsUrl = (user) => `https://api.github.com/users/${user}/repos`
const getReadmeUrl = (user, project) => `https://api.github.com/repos/${user}/${project}/readme`

const initialState = {
  user: null,
  list: [{ name: '' }],
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
    case RESET_STATE: {
      return {
        ...initialState
      }
    }
    default:
      return state
  }
}

export function clearState() {
  return (dispatch) => {
    dispatch({
      type: RESET_STATE
    })
  }
}

export function getProjectReadme(user, project) {
  return (dispatch) => {
    axios
      .get(getReadmeUrl(user, project))
      .then(({ data }) => data)
      .then((result) => {
        dispatch({
          readme: atob(result.content),
          user,
          type: GET_PROJECT_README
        })
      })
  }
}

export function getProjectsList(user) {
  return (dispatch) => {
    axios
      .get(getProjectsUrl(user))
      .then(({ data }) => data)
      .then((list) => {
        dispatch({
          list,
          user,
          type: GET_PROJECTS_LIST
        })
      })
  }
}
