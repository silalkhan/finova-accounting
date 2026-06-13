import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outline" | "gradient";
  hover?: boolean;
  className?: string;
}

/**
 * Reusable Card component with multiple variants
 *
 * Usage:
 * <Card variant="elevated" hover>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Content>Content here</Card.Content>
 * </Card>
 */
export default function Card({
  children,
  variant = "default",
  hover = true,
  className = "",
}: CardProps) {
  const baseStyles =
    "rounded-2xl p-6 md:p-8 border transition-all duration-300";

  const variantStyles = {
    default: "bg-white border-gray-200 shadow-md",
    elevated: "bg-white border-gray-200 shadow-lg hover:shadow-2xl",
    outline: "bg-transparent border-gray-300 hover:border-blue-400",
    gradient:
      "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg",
  };

  const hoverStyle = hover ? "hover:border-blue-300 hover:shadow-xl" : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyle} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

Card.Header = function CardHeader({
  children,
  className = "",
}: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

Card.Content = function CardContent({
  children,
  className = "",
}: CardContentProps) {
  return <div className={`${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

Card.Footer = function CardFooter({
  children,
  className = "",
}: CardFooterProps) {
  return (
    <div className={`mt-6 pt-6 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};
