import * as S from "@/styles/components/Button"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <S.Container {...props}>{props.children}</S.Container>
    </>
  )
}
