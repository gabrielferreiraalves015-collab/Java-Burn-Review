import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "default" | "lg" | "xl";
  showIcon?: boolean;
  text?: string;
  location?: string;
}

export function CtaButton({ 
  className, 
  size = "default", 
  showIcon = true,
  text = "Comprar Java Burn no site oficial",
  location = "unknown",
  ...props 
}: CtaButtonProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e);
  };

  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl md:text-2xl",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        "bg-[#FFD814] text-black font-extrabold rounded-lg shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-wide",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {text}
      {showIcon && <ArrowRight className="w-6 h-6 stroke-[3]" />}
    </motion.button>
  );
}
