import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProjectsList } from '../../redux/reducers/gitHub'

import Head from '../head'

const ProjectsListPage = () => {
  const list = useSelector((state) => state.gitHub.list)
  const dispatch = useDispatch()
  const { user } = useParams()

  useEffect(() => {
    dispatch(getProjectsList(user))
  }, [dispatch, user])

  return (
    <div>
      <Head title="Projects list" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <p>{user} Projects list</p>
          {list.length &&
            list.map((project) => (
              <div key={project.name} className="flex">
                {project.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

ProjectsListPage.propTypes = {}

export default ProjectsListPage
