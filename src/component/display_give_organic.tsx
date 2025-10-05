"use client"

import { Card } from "@mui/material"
import { TrendingUp, TrendingDown, Minus} from "lucide-react"
import type { Pollutants } from ".."


interface MetricCardProps {
  title: string
  value: number
  unit: string
  status: "good" | "moderate" | "poor" | "hazardous"
  trend: "up" | "down" | "stable"
  change: string
}

function MetricCard({ title, value, unit, status, trend, change }: MetricCardProps) {
  const statusColors = {
    good: "text-accent",
    moderate: "text-chart-3",
    poor: "text-chart-4",
    hazardous: "text-destructive",
  }

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold ${statusColors[status]}`}>{value.toFixed(0)}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 text-sm ${trend === "up" ? "text-destructive" : trend === "down" ? "text-accent" : "text-muted-foreground"}`}
        >
          <TrendIcon className="h-4 w-4" />
          <span>{change}</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={`h-full ${statusColors[status]} bg-current transition-all`}
            style={{ width: `${Math.min((value / 200) * 100, 100)}%` }}
          />
        </div>
      </div>
    </Card>
  )
}

export function AirQualityMetrics({ pollutants , aqi , status}: { pollutants : Pollutants , aqi : string , status: "good" | "moderate" | "poor" | "hazardous" }) {


  const getTrend = (value: number): "up" | "down" | "stable" => {
    if (value > 5) return "up"
    if (value < -5) return "down"
    return "stable"
  }

  const metrics = [
    {
      title: "Indice de Qualité de l'Air",
      value: Number(aqi),
      unit: "AQI",
      status: status,
      trend: getTrend(0),
      change: "0%",
    },
    {
      title: "NO₂ (Dioxyde d'azote)",
      value: pollutants.no2,
      unit: "ppb",
      status: pollutants.no2 < 30 ? "good" : "moderate",
      trend: getTrend(pollutants.no2),
      change: `${pollutants.no2 > 0 ? "+" : ""}${pollutants.no2.toFixed(0)}%`,
    },
    {
      title: "O₃ (Ozone)",
      value: pollutants.o3,
      unit: "ppb",
      status: pollutants.o3 < 60 ? "good" : "moderate",
      trend: getTrend(pollutants.o3),
      change: `${pollutants.o3 > 0 ? "+" : ""}${pollutants.o3.toFixed(0)}%`,
    },
    {
      title: "PM2.5 (Particules fines)",
      value: pollutants.pm2_5,
      unit: "µg/m³",
      status: pollutants.pm2_5 < 15 ? "good" : "moderate",
      trend: getTrend(pollutants.pm2_5),
      change: `${pollutants.pm2_5 > 0 ? "+" : ""}${pollutants.pm2_5.toFixed(0)}%`,
    },
  ] as {
    title: string;
    value: number;
    unit: string;
    status: "good" | "moderate" | "poor" | "hazardous";
    trend: "up" | "down" | "stable";
    change: string;
  }[]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  )
}
