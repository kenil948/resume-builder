const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
}) => {
  return (
    <div>
      <label className="block mb-2 uppercase text-sm tracking-wider text-[#5a5965] font-semibold">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-lg bg-[#efece5] text-[14px] sm:text-[15px] text-zinc-700 placeholder:text-[#9c988d] outline-none border border-transparent focus:bg-white focus:border-[#babec6] focus:ring-2 focus:ring-[#1a2744]/20 transition-all"
      />

      <div className="min-h-5 pt-1">
        <p className="text-xs text-[#d64545] break-words">{errors?.message}</p>
      </div>
    </div>
  );
};

export default FormInput;
