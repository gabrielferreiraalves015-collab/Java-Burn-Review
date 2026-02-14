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
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 hover:bg-[#F7CA00] text-black border-b-4 border-[#c7a700] rounded-xl transition-all active:translate-y-1 active:border-b-0 h-11 px-8 text-[19px] font-semibold bg-[#f7ca00]"
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
