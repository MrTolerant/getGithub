import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../head'

const ProjectsPage = () => {
  const { user, project } = useParams()

  return (
    <div>
      <Head title="Project page" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          User: {user} Project {project} page
        </div>
      </div>
    </div>
  )
}

ProjectsPage.propTypes = {}

export default ProjectsPage
