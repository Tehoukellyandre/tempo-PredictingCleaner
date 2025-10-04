import { Satellite } from "lucide-react"
import { Settings } from 'lucide-react';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Satellite className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold">TEMPO Air Quality</h1>
            <p className="text-xs text-muted-foreground">NASA Mission</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Settings />
          <Bell />
        </div>
      </div>
    </header>
  )
}
