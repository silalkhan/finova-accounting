import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

/**
 * Reusable Button component with multiple variants and sizes
 *
 * Usage:
 * <Button variant="primary" size="lg">Click me</Button>
 * <Button variant="secondary" isLoading={true}>Loading...</Button>
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2";

  // Variant styles
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50",
    secondary:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 md:px-8 py-3 text-base",
    lg: "px-8 md:px-10 py-4 text-lg",
  };

  // Width styles
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${
        className || ""
      }`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
