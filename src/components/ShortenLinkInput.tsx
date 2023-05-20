import * as S from "@/styles/components/ShortenLinkInput"
import { useEffect, useRef, useState } from "react"
import { ShortenResponse } from "@/types/shorten"
import { CopyAlt } from "@styled-icons/boxicons-regular/CopyAlt"

export default function ShortenLinkInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const shortLinkRef = useRef<HTMLSpanElement>(null)
  const [links, setLinks] = useState<ShortenResponse[]>([])

  useEffect(() => {
    console.log(links)
  }, [links])

  async function shortenLink() {
    const params = { url: inputRef.current?.value }
    const data: ShortenResponse = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(data => data.json())

    if (data.ok) {
      setLinks([...links, data])
    }

    inputRef.current!.value = ""
  }

  function copyShortLink() {
    navigator.clipboard.writeText(shortLinkRef.current!.textContent!)
  }

  return (
    <S.Container>
      <div className="input-box">
        <input ref={inputRef} type="url" placeholder="Shorten a link here..." />
        <button onClick={shortenLink}>Shorten It!</button>
      </div>
      <ul className="links">
        {links.map(link => (
          <li className="link" key={link.result.code}>
            <span ref={shortLinkRef}>{link.result.short_link}</span>
            <span>{link.result.original_link}</span>
            <CopyAlt
              onClick={copyShortLink}
              size="48"
              title="Copy icon"
              cursor={"pointer"}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}
