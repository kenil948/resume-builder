import { useContext } from "react"
import { ResumeEditorContext } from "../context/ResumeEditorContext"


export const useResumeEditor = () => {
    return useContext(ResumeEditorContext)
}