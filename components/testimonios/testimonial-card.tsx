"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface TestimonialCardProps {
  name: string
  procedure: string
  story: string
  beforeImage: string
  afterImage: string
  rating: number
  date: string
}

export function TestimonialCard({
  name,
  procedure,
  story,
  beforeImage,
  afterImage,
  rating,
  date,
}: TestimonialCardProps) {
  const [showAfter, setShowAfter] = useState(false)
  const { t } = useLanguage()

  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Before / After Image Comparison */}
      <div className="relative">
        <div
          className="relative aspect-[16/10] cursor-pointer group"
          onMouseEnter={() => setShowAfter(true)}
          onMouseLeave={() => setShowAfter(false)}
          onClick={() => setShowAfter(!showAfter)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowAfter(!showAfter)
          }}
          aria-label={`${t("testimoniosPage.viewPhoto")} ${showAfter ? t("testimoniosPage.before").toLowerCase() : t("testimoniosPage.after").toLowerCase()} - ${name}`}
        >
          {/* Before Image */}
          <Image
            src={beforeImage}
            alt={`${t("testimoniosPage.before")} - ${name}`}
            fill
            className={cn(
              "object-cover transition-opacity duration-500",
              showAfter ? "opacity-0" : "opacity-100"
            )}
          />
          {/* After Image */}
          <Image
            src={afterImage}
            alt={`${t("testimoniosPage.after")} - ${name}`}
            fill
            className={cn(
              "object-cover transition-opacity duration-500",
              showAfter ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Procedure tag */}
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
          {procedure}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>

        {/* Name and date */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <time className="text-xs text-muted-foreground">{date}</time>
        </div>

        {/* Story */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {story}
        </p>
      </div>
    </article>
  )
}
