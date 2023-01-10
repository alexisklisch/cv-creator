import { FC } from "react"

interface Props {
  name: string
}
export const JobNameBox:FC<Props> = ({name}) => {
  return (
    <button type="button" className="bg-slate-200 active:bg-slate-300 rounded-md min-w-[280px] w-80 h-24 grid place-content-center text-2xl font-bold text-slate-700 shadow-md hover:translate-y-1 transition-all">
      {name}
    </button>
  )
}
