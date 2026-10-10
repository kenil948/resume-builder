// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TemplatePage from '../../Pages/TemplatePage'
import BuilderPage from '../../Pages/BuilderPage'
import { ResumeEditorProvider } from '../../context/ResumeEditorProvider'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<TemplatePage />} />
                <Route path="/builder" element={<ResumeEditorProvider><BuilderPage /></ResumeEditorProvider>} />
            </Routes>
        </div>
    )
}

export default AppRoutes