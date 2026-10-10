import { useFieldArray } from "react-hook-form";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ form }) => {
  const { control } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const emptyExperience = {
    jobTitle: "",
    company: "",
    startYear: "",
    endYear: "",
    description: "",
  };

  const handleAddExperience = () => {
    append(emptyExperience);
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <form className="flex flex-col gap-5 px-6 py-6" noValidate>
        {fields.map((field, index) => (
          <ExperienceCard
            key={field.id}
            index={index}
            form={form}
            remove={remove}
            totalCards={fields.length}
          />
        ))}

        <button
          type="button"
          onClick={handleAddExperience}
          className="w-full py-3 rounded-xl border-2 border-dashed border-[#d7d2c6] text-[#1a2744] font-semibold cursor-pointer hover:bg-[#efece5] transition-all duration-300 active:scale-95"
        >
          + Add Experience
        </button>
      </form>
    </div>
  );
};

export default Experience;
