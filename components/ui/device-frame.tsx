import type React from "react"

interface DeviceFrameProps {
  className?: string
  children: React.ReactNode
}

export function DeviceFrame({ className = "", children }: DeviceFrameProps) {
  return (
    <div
      className={`aspect-[9/19] w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-2 shadow-lg ${className}`}
    >
      <div className="flex h-full items-center justify-center rounded-xl bg-white">{children}</div>
    </div>
  )
}
