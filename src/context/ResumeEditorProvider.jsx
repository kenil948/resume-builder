import { useState } from "react"
import { ResumeEditorContext } from "./ResumeEditorContext"
import getFieldKey from "../utils/getFieldKey"

export const ResumeEditorProvider = ({ children }) => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [selectedField, setSelectedField] = useState(null)
    const [savedStyle, setSavedStyle] = useState(() => {
        if (!localStorage.getItem("resumeData")) return {}
        const template = localStorage.getItem("selectedTemplate")
        const style = localStorage.getItem("resumeStyle")
        if (!style) return {}
        try {
            const parsed = JSON.parse(style)
            const isScoped = Object.keys(parsed).some((k) =>
                ["classic", "modern", "creative", "minimal", "executive"].includes(k)
            )
            return isScoped ? (parsed[template] || {}) : parsed
        } catch {
            return {}
        }
    })
    const [editingStyle, setEditingStyle] = useState({})

    const updateFieldStyle = ({ field, property, value }) => {
        const key = getFieldKey(field);
        setEditingStyle((prev) => {
            const updatedField = {
                ...(prev[key] || {}),
            };
            if (value === undefined) {
                delete updatedField[property];
            } else {
                updatedField[property] = value;
            }
            return {
                ...prev,
                [key]: updatedField,
            };
        });
    };

    const resetFieldStyle = (field) => {
        const key = getFieldKey(field)

        setEditingStyle((prev) => {
            const updateStyle = { ...prev }
            delete updateStyle[key]
            return updateStyle
        })
    }

    return (
        <ResumeEditorContext.Provider value={{ isEditMode, setIsEditMode, selectedField, setSelectedField, savedStyle, setSavedStyle, editingStyle, setEditingStyle, updateFieldStyle, resetFieldStyle }}>{children}</ResumeEditorContext.Provider>
    )
}