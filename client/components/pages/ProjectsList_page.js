import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProjectsList } from '../../redux/reducers/repositories'

import Head from '../head'

const ProjectsListPage = () => {
  const list = useSelector((state) => state.repositories.list)
  const currentUser = useSelector((state) => state.repositories.user)
  const dispatch = useDispatch()
  const { user } = useParams()

  useEffect(() => {
    if (currentUser !== user) dispatch(getProjectsList(user))
  }, [dispatch, user, currentUser])

  return (
    <div>
      <Head title="Projects list" />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="rounded-lg border shadow-lg p-10 ">
          {list.map((project) => (
            <div
              key={project.name}
              className=" text-gray-700  text-2xl rounded font-bold  flex my-2 hover:text-indigo-600 "
            >
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
