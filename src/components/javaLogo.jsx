import { RiJavaLine } from "react-icons/ri";

export default function Java() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="orange-blue-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stopColor="#F89820" offset="0%" />
                        <stop stopColor="#5382a1" offset="70%" />
                    </linearGradient>
            </svg>
            <RiJavaLine style={{ fill: "url(#orange-blue-gradient)", fontSize: "44px" }} className="rotate-clock"/>
        </>
    )
}