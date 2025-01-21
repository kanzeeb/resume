import { SiHtml5 } from "react-icons/si"

export default function HTML() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="orange-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#E44D21" offset="0%" />
                        <stop stopColor="#F16524" offset="10%" />
                        <stop stopColor="#EE8554" offset="100%" />
                    </linearGradient>
            </svg>
            <SiHtml5 style={{ fill: "url(#orange-gradient)", fontSize: "38px" }} className="rotate-reverse-clock"/>
        </>
    )
}