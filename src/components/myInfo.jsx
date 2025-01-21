import { Fragment } from "react";
import Cylinders from "./cylinders";

export default function MyInfo() {
    return(
        <div className="myInfo-box">                
            <Cylinders className="item-info-a" />
            <span className=" item-info-b img-background" >
                <h2 className="underline-effect">Nice to meet you! I'm Rodrigo Velazquez</h2>
            </span>
            <p className="myInfo-txt item-info-d">
                Based in Mexico City. I'm a front-end developer,
                and currently practicing Node JS to build REST APIs for any kind of application.
            </p>                
            
            <p className="myContact-txt item-info-e">feel free to contact me if you are looking for a profile like mine</p>
            
        </div>
    )
}