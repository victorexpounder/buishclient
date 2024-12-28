import { Search } from 'lucide-react'
import { Input } from "@/Components/ui/input"

export function SearchInput() {
  return (
    (<div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search here..." className="pl-8" />
    </div>)
  );
}

