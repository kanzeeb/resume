import { FaCss3 } from "react-icons/fa";

export default function CSS3() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#214ce5" offset="0%" />
                        <stop stopColor="#2565f0" offset="80%" />
                    </linearGradient>
            </svg>
            <FaCss3 style={{ fill: "url(#blue-gradient)", fontSize: "38px" }} className="rotate-clock"/>
        </>
    )
}