import { FaReact } from "react-icons/fa";

export default function ReactJs() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="indigo-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#61dbfb" offset="0%" />
                        <stop stopColor="#31A4C1" offset="70%" />
                        <stop stopColor="#1A6D82" offset="100%" />
                    </linearGradient>
            </svg>
            <FaReact style={{ fill: "url(#indigo-gradient)", fontSize: "50px" }} className="rotate-infinite" />
        </>
    )
}