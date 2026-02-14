import { Button } from "@/components/ui/button";

interface CtaButtonProps {
  size?: "default" | "sm" | "lg" | "xl";
  text?: string;
  location?: string;
}

export function CtaButton({ size = "default", text = "COMPRAR AGORA", location }: CtaButtonProps) {
  const sizes = {
    default: "h-11 px-8",
    sm: "h-9 px-4",
    lg: "h-12 px-10 text-lg",
    xl: "h-14 px-12 text-xl font-bold",
  };

  return (
    <Button 
      className={cn("bg-[#FFD814] hover:bg-[#F7CA00] text-black border-b-4 border-[#c7a700] rounded-xl transition-all active:translate-y-1 active:border-b-0", sizes[size as keyof typeof sizes])}
      data-testid={`button-cta-${location || "default"}`}
      onClick={() => window.open("https://javaburn.com", "_blank")}
    >
      {text}
    </Button>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
