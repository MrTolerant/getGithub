import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useSelector, useDispatch } from 'react-redux'
import { getProjectReadme } from '../../redux/reducers/repositories'

import Head from '../head'

const ProjectPage = () => {
  const readme = useSelector((state) => state.repositories.readme)
  const dispatch = useDispatch()
  const { user, project } = useParams()

  useEffect(() => {
    dispatch(getProjectReadme(user, project))
  }, [dispatch, user, project])

  return (
    <div>
      <Head title="Project page" />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="flex flex-row  m-4 rounded-lg border shadow-lg ">
          <ReactMarkdown className="text-gray-800 m-4 text-sm" source={readme} />
        </div>
      </div>
    </div>
  )
}

ProjectPage.propTypes = {}

export default ProjectPage
