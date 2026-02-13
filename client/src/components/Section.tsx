import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 overflow-hidden",
        dark ? "bg-[#002B5C] text-white" : "bg-white text-[#333333]",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, center = true }: { title: string, subtitle?: string, center?: boolean }) {
  return (
    <div className={cn("mb-12 md:mb-16", center && "text-center")}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <div className={cn("h-1.5 w-24 bg-[#FFD814] rounded-full mt-6", center ? "mx-auto" : "")} />
    </div>
  );
}
