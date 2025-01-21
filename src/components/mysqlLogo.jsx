import { SiMysql } from "react-icons/si"

export default function MySql() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="sea-blue-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stopColor="#FFFFFF" offset="0%" />
                        <stop stopColor="#00758F" offset="30%" />
                    </linearGradient>
            </svg>
            <SiMysql style={{ fill: "url(#sea-blue-gradient)", fontSize: "50px" }} className="rotate-clock"/>
        </>
    )
}