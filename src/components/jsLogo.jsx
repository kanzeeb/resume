import { RiJavascriptLine } from "react-icons/ri";

export default function ReactJs() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="yellow-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#E9F50A" offset="0%" />
                        <stop stopColor="#C9E223" offset="40%" />
                    </linearGradient>
            </svg>
            <RiJavascriptLine style={{ fill: "url(#yellow-gradient)", fontSize: "38px" }} className="rotate-reverse-clock" />
        </>
    )
}