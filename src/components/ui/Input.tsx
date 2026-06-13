import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  helperText?: string;
  required?: boolean;
}

/**
 * Reusable Input component with validation and error handling
 *
 * Usage:
 * <Input
 *   label="Email"
 *   type="email"
 *   error={emailError}
 *   required
 * />
 */
export default function Input({
  label,
  error,
  icon,
  helperText,
  required,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(" ", "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          className={`
            w-full px-4 py-3 rounded-lg border transition-all duration-200
            ${icon ? "pl-12" : ""}
            ${
              error
                ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }
            focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed
            ${className || ""}
          `}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
