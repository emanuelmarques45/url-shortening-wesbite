import { Layout } from "@/components"
import { GlobalStyle } from "@/styles/Global"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  )
}
