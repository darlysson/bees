import { ChartBar, MapPin, Phone } from "@phosphor-icons/react"

export type Props = {
  icon: "chart" | "phone" | "map"
  data: string
}

export function Tag({ icon, data }: Props) {
  return (
    <div className="rounded-full flex items-center gap-1 bg-[#F2EC54] px-3 py-2">
      {icon === "phone" && <Phone size={16} weight="light" />}
      {icon === "chart" && <ChartBar size={16} weight="light" />}
      {icon === "map" && <MapPin size={16} weight="light" />}

      <span className="text-base">{data}</span>
    </div>
  )
}
