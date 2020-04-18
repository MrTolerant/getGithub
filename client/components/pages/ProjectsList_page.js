import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProjectsList } from '../../redux/reducers/repositories'

import Head from '../head'

const ProjectsListPage = () => {
  const list = useSelector((state) => state.repositories.list)
  const dispatch = useDispatch()
  const { user } = useParams()

  useEffect(() => {
    dispatch(getProjectsList(user))
  }, [dispatch, user])

  return (
    <div>
      <Head title="Projects list" />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="antialiased text-4xl m-4 text-gray-700 font-bold ">{user.toUpperCase()}</p>
        <div className=" text-indigo-500  font-bold rounded-lg border shadow-lg p-10 hove:text-indigo-400 ">
          {list.map((project) => (
            <div key={project.name} className="flex my-2">
              <Link to={`/${user}/${project.name}`}>{project.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectsListPage.propTypes = {}

export default ProjectsListPage
