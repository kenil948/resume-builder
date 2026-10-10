import { useResumeEditor } from "../hooks/useResumeEditor";

const GetEditableProps = (field) => {
  const { isEditMode, selectedField, setSelectedField } = useResumeEditor();
  if (!isEditMode) {
    return {};
  }

  const isSelected =
    selectedField?.section === field.section &&
    selectedField?.field === field.field &&
    selectedField?.index === field.index;

  return {
    onClick: () => {
      setSelectedField(field);
    },
    className: `rounded cursor-pointer ${isSelected ? "outline outline-2 outline-blue-500" : "hover:outline hover:outline-2 hover:outline-gray-400"}`,
  };
};

export default GetEditableProps;
