import Image from "next/image"
import * as S from "@/styles/components/Header"
import logo from "@/../public/images/logo.svg"
import { Button } from "./"

export default function Header() {
  return (
    <>
      <S.Header>
        <Image src={logo} alt="Shortly Logo" />
        <nav className="menu">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <S.ButtonContainer>
            <button className="login">Login</button>
            <Button>Sign Up</Button>
          </S.ButtonContainer>
        </nav>
      </S.Header>
    </>
  )
}
