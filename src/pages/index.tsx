import Head from "next/head"
import Image from "next/image"
import * as S from "@/styles/pages/Home"
import { Button, ShortenLinkInput } from "@/components"
import backgroundDesktop from "@/../public/images/illustration-working.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortening App</title>
        <meta name="author" content="Emanuel Felipe Marques" />
        <meta name="description" content="URL shortening app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <section>
          <div className="content">
            <div className="text">
              <h1>More than just shorter links</h1>
              <p>
                Build your brand&apos;s recognition and get detailed insights on
                how your links are performing
              </p>
              <Button className="get-started">Get Started</Button>
            </div>
            <Image
              className="illustration-working"
              src={backgroundDesktop}
              alt="Illustration Image"
            />
          </div>
        </section>
        <section>
          <div className="content">
            <ShortenLinkInput />
            <div className="advanced">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard
              </p>
            </div>
            <ul className="advanced-list">
              <li>
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don&apos;t mean a thing. Branded links help instil confidence
                  in your content.
                </p>
              </li>
              <li>
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </li>
              <li>
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </li>
            </ul>
          </div>
          <div className="boost">
            <h2>Boost your links today</h2>
            <Button>Get Started</Button>
          </div>
        </section>
      </S.Container>
    </>
  )
}
