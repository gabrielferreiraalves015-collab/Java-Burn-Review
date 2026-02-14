import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 px-4", className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", center && "text-center")}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
