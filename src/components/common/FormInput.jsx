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
        className="w-full h-12 px-4 rounded-lg bg-[#efece5] text-zinc-700 placeholder:text-[#9c988d] outline-none border border-transparent focus:bg-white focus:border-[#babec6] focus:ring-2 focus:ring-[#1a2744]/20 transition-all"
      />

      <div className="min-h-6 pt-1">
        <p className="text-xs text-[#d64545]">{errors?.message}</p>
      </div>
    </div>
  );
};

export default FormInput;
