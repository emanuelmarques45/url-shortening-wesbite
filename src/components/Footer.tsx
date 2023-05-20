import Image from "next/image"
import logo from "@/../public/images/logo.svg"
import * as S from "@/styles/components/Footer"

export default function Footer() {
  return (
    <>
      <S.Container>
        <div className="content">
          <Image className="logo" src={logo} alt="Shortly Logo"></Image>
          <ul className="menu">
            <li>
              <span>Features</span>
              <ul className="submenu">
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </li>
            <li>
              <span>Resources</span>
              <ul className="submenu">
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </li>
            <li>
              <span>Company</span>
              <ul className="submenu">
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </li>
          </ul>
          <ul className="social">
            <li>
              <a href="https://www.facebook.com/">
                <Image
                  src="/images/icon-facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                ></Image>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <Image
                  src="/images/icon-twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                ></Image>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <Image
                  src="/images/icon-pinterest.svg"
                  alt="Pinterest"
                  width={24}
                  height={24}
                ></Image>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Image
                  src="/images/icon-instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                ></Image>
              </a>
            </li>
          </ul>
        </div>
      </S.Container>
    </>
  )
}
