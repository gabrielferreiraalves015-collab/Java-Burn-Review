import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  location: string;
  content: string;
}

export function ReviewCard({ name, location, content }: ReviewCardProps) {
  return (
    <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden">
      <CardContent className="p-8">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FFD814] text-[#FFD814]" />
          ))}
        </div>
        <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
          "{content}"
        </p>
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
}
