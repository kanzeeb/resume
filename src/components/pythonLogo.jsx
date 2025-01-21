import { FaPython } from "react-icons/fa";

export default function Python() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="cyan-sunglow-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#646464" offset="0%" />
                        <stop stopColor="#FFD43B" offset="40%" />
                        <stop stopColor="#4B8BBE" offset="55%" />
                        <stop stopColor="#306998" offset="80%" />
                        <stop stopColor="#FFE873" offset="100%" />
                        
                    </linearGradient>
            </svg>
            <FaPython style={{ fill: "url(#cyan-sunglow-gradient)", fontSize: "50px" }} className="rotate-clock"/>
        </>
    )
}