import { SiMongodb } from "react-icons/si"

export default function MongoDb() {
    return(
        <>
            <svg width="0" height="0">
                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#215732" offset="0%" />
                        <stop stopColor="#44883e" offset="40%" />
                        <stop stopColor="#6cc24a" offset="80%" />
                        <stop stopColor="#333333" offset="100%" />
                    </linearGradient>
            </svg>
            <SiMongodb style={{ fill: "url(#green-gradient)", fontSize: "50px" }} className="rotate-reverse-clock"/>
        </>
    )
}