import { FaAws } from "react-icons/fa"

export default function AWS() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="vivid-black-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop stopColor="#FF9900" offset="70%" />
                        <stop stopColor="#000000" offset="95%" />
                    </linearGradient>
            </svg>
            <FaAws style={{ fill: "url(#vivid-black-gradient)", fontSize: "44px" }} className="rotate-reverse-clock"/>
        </>
    )
}