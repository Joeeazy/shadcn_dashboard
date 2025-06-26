"use client"

import React from 'react'
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"
import { CardFooter } from './ui/card'
import { TrendingUp } from 'lucide-react'
 
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--custom-chart1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--custom-chart3)",
  },
} satisfies ChartConfig

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

export default function AppAreaChart() {
  return (
    <div>
        <h1 className='text-lg font-medium mb-6'>Total Revenue</h1>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
            <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) =>
            typeof value === 'string' ? value.slice(0, 3) : value
        }
        />
            <YAxis
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />

      </AreaChart>
    </ChartContainer>
    <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </div>
  )
}
