import React from "react";

const InputField = ({ field, label, icon: Icon, formData, handleChange }) => {
  const isTextArea = field === "message";

  return (
    <div className="w-full space-y-1">
      {/* Label Khas Neo-Brutalist (Bold & Aksensuatif) */}
      <label
        htmlFor={field}
        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#111111] bg-[#ffcf33] px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-sm"
      >
        {Icon && <Icon className="w-3.5 h-3.5 stroke-[2.5]" />}
        <span>{label}</span>
      </label>

      {/* Wrapper Input/Textarea */}
      <div className="relative w-full">
        {isTextArea ? (
          <textarea
            id={field}
            name={field}
            placeholder={`Masukkan ${label.toLowerCase()}...`}
            value={formData[field]}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 bg-white text-[#111111] font-semibold border-3 border-[#111111] shadow-[4px_4px_0px_#111111] focus:shadow-[6px_6px_0px_#111111] focus:bg-[#fffde7] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none rounded-sm placeholder-[#111111]/40 resize-none"
            required
          />
        ) : (
          <input
            id={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={`Masukkan ${label.toLowerCase()}...`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 bg-white text-[#111111] font-semibold border-3 border-[#111111] shadow-[4px_4px_0px_#111111] focus:shadow-[6px_6px_0px_#111111] focus:bg-[#fffde7] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none rounded-sm placeholder-[#111111]/40"
            required
          />
        )}
      </div>
    </div>
  );
};

export default InputField;