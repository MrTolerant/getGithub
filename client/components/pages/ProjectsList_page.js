import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../head'

const ProjectsListPage = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Projects list" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {user} Projects list
        </div>
      </div>
    </div>
  )
}

ProjectsListPage.propTypes = {}

export default ProjectsListPage
