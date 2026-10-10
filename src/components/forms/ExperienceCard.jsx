import FormInput from "../common/FormInput";
import FormTextarea from "../common/FormTextarea";
import { FaRegTrashAlt } from "react-icons/fa";

const ExperienceCard = ({ form, index, remove, totalCards }) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <div className="bg-[#f3efe8] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="uppercase text-sm tracking-wider font-semibold text-[#86708e]">
          Experience {index + 1}
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
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              label="Job Title"
              name={`experience.${index}.jobTitle`}
              placeholder="Frontend Developer"
              register={register}
              errors={errors.experience?.[index]?.jobTitle}
            />
          </div>
          <div className="flex-1">
            <FormInput
              label="Company"
              name={`experience.${index}.company`}
              placeholder="TCS"
              register={register}
              errors={errors.experience?.[index]?.company}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              label="Start Year"
              name={`experience.${index}.startYear`}
              placeholder="2023"
              register={register}
              errors={errors.experience?.[index]?.startYear}
            />
          </div>
          <div className="flex-1">
            <FormInput
              label="End Year"
              name={`experience.${index}.endYear`}
              placeholder="Present / 2026"
              register={register}
              errors={errors.experience?.[index]?.endYear}
            />
          </div>
        </div>
        <FormTextarea
          label="Description"
          name={`experience.${index}.description`}
          placeholder="Describe your responsibilities and achievements..."
          register={register}
          errors={errors.experience?.[index]?.description}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
