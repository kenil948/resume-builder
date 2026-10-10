import { useResumeEditor } from "./useResumeEditor";
import GetEditableProps from "../utils/GetEditableProps";
import getFieldStyle from "../utils/getFieldStyle";

const useEditableField = (field) => {
  const { isEditMode, editingStyle, savedStyle } = useResumeEditor();

  const editable = GetEditableProps(field);
  const style = getFieldStyle(isEditMode ? editingStyle : savedStyle, field);

  return { ...editable, style };
};

export default useEditableField;
