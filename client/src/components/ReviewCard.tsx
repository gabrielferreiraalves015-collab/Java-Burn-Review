import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  location: string;
  content: string;
  rating?: number;
}

export function ReviewCard({ name, location, content, rating = 5 }: ReviewCardProps) {
  return (
    <div className="p-6 rounded-2xl shadow-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300 text-[#000000] bg-[#00000000]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-lg italic mb-6 leading-relaxed opacity-90">"{content}"</p>
      <div className="flex items-center gap-3 border-t border-white/20 pt-4">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-[#FFD814]">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-xs opacity-70 uppercase tracking-wider">{location}</div>
        </div>
      </div>
    </div>
  );
}
