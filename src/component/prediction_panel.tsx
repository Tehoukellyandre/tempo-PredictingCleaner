import { Card } from "@mui/material"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"
import { TrendingUp, Brain, AlertCircle } from "lucide-react"

export function PredictionPanel({ dataPrevision : atmosphericPrevision }) {
  const chartData = atmosphericPrevision?.map((p: any) => ({
    time: new Date(p.timestamp).toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    aqi: p.aqi,
    pm2_5: p.components.pm2_5 * 100,
  }))

  const maxAQI = Math.max(...chartData.map((d: any) => d.aqi))

  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Prédictions IA - 48 heures</h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Basé sur les données TEMPO, météo et patterns historiques
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="time"
            stroke="hsl(var(--muted-foreground))"
            fontSize={11}
            interval={5}
          />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <ReferenceLine y={50} stroke="hsl(var(--accent))" strokeDasharray="3 3" label="Bon" />
          <ReferenceLine y={100} stroke="hsl(var(--chart-3))" strokeDasharray="3 3" label="Modéré" />
          <ReferenceLine y={150} stroke="hsl(var(--destructive))" strokeDasharray="3 3" label="Mauvais" />
          <Line
            type="monotone"
            dataKey="aqi"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>AQI Maximum</span>
          </div>
          <div className="mt-2 text-2xl font-bold">{maxAQI}</div>
          <div className="mt-1 text-xs text-muted-foreground">Dans les 48 prochaines heures</div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Brain className="h-4 w-4" />
            <span>Modèle IA</span>
          </div>
          <div className="mt-2 text-sm font-semibold">Ensemble Learning</div>
          <div className="mt-1 text-xs text-muted-foreground">TEMPO + Météo + Historique</div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>Alertes prévues</span>
          </div>
          <div className="mt-2 text-2xl font-bold">
            {chartData.filter((d: any) => d.aqi > 100).length}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Périodes à surveiller</div>
        </div>
      </div>
    </Card>
  )
}
