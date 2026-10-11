import { FaRegTrashAlt } from "react-icons/fa";
import FormInput from "../common/FormInput";

const EducationCard = ({ form, index, remove, totalCards }) => {
  const { 
    register,
    formState: { errors },
  } = form;

  return (
    <div className="bg-[#f3efe8] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="uppercase text-sm tracking-wider font-semibold text-[#86708e]">
          Education {index + 1}
        </h1>

        {totalCards > 1 && (
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-[#86708e] hover:text-red-500 transition-all duration-300 active:scale-95"
          >
            <FaRegTrashAlt size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <FormInput
          label="Degree / Certification"
          name={`education.${index}.degree`}
          placeholder="B.Sc Information Technology"
          register={register}
          errors={errors.education?.[index]?.degree}
        />

        <FormInput
          label="School / University"
          name={`education.${index}.institution`}
          placeholder="SSASIT"
          register={register}
          errors={errors.education?.[index]?.institution}
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <div className="flex-1">
            <FormInput
              label="Graduation Year"
              name={`education.${index}.graduationYear`}
              placeholder="2026"
              register={register}
              errors={errors.education?.[index]?.graduationYear}
            />
          </div>

          <div className="flex-1">
            <FormInput
              label="GPA (Optional)"
              name={`education.${index}.gpa`}
              placeholder="8.5"
              register={register}
              errors={errors.education?.[index]?.gpa}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
