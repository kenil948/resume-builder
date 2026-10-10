// import React from "react";
import FormInput from "../common/FormInput";
import FormTextarea from "../common/FormTextarea";

const Personal = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="w-full h-full overflow-y-auto">
      <form className="flex flex-col gap-6 px-6 pt-7 pb-6" noValidate>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 flex-1">
            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              register={register}
              errors={errors.fullName}
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              register={register}
              errors={errors.email}
            />

            <FormInput
              label="Location"
              name="location"
              placeholder="Surat, Gujarat"
              register={register}
              errors={errors.location}
            />

            <FormInput
              label="GitHub (Optional)"
              name="github"
              type="url"
              placeholder="https://github.com/johndoe"
              register={register}
              errors={errors.github}
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <FormInput
              label="Professional Title"
              name="professionalTitle"
              placeholder="Frontend Developer"
              register={register}
              errors={errors.professionalTitle}
            />

            <FormInput
              label="Phone"
              name="phone"
              type="tel"
              placeholder="9876543210"
              register={register}
              errors={errors.phone}
            />

            <FormInput
              label="Portfolio (Optional)"
              name="portfolio"
              type="url"
              placeholder="https://johndoe.dev"
              register={register}
              errors={errors.portfolio}
            />

            <FormInput
              label="LinkedIn (Optional)"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/johndoe"
              register={register}
              errors={errors.linkedin}
            />
          </div>
        </div>

        <FormTextarea
          label="Professional Summary"
          name="professionalSummary"
          placeholder="Write a short professional summary..."
          register={register}
          errors={errors.professionalSummary}
        />
      </form>
    </div>
  );
};

export default Personal;