import HTML from "./htmlLogo";
import CSS3 from "./cssLogo";
import JavaScript from "./jsLogo";
import ReactJs from "./reactLogo";
import NodeJs from "./nodeLogo";
import Python from "./pythonLogo";
import MongoDb from "./mongoLogo";
import MySql from "./mysqlLogo";
import Java from "./javaLogo";
import AWS from "./awsLogo";
import Experience from "./experience";

export default function TechSkills() {
    return (

        <div className="skills-box">          
            <div className="grid-skills">
                <div className="item-skill-a">
                    <HTML />
                    <p>HTML5</p>
                </div>
                <div className="item-skill-k">
                    <h2 className="underline-effect">5 years</h2>
                </div>
                <div className="item-skill-b">
                    <CSS3 />
                    <p>CSS3</p>
                </div>
                <div className="item-skill-c">
                    <JavaScript />
                    <p>JavaScript</p>
                </div>
                <div className="item-skill-d">
                    <ReactJs />
                    <p>React</p>
                </div>
                <div className="item-skill-e">
                    <NodeJs />
                    <p>NodeJS</p>
                </div>
                <div className="item-skill-l">
                    <h2 className="underline-effect"> {'<'} 3 years </h2>
                </div>
                <div className="item-skill-f">
                    <Python />
                    <p>Python</p>
                </div>
                <div className="item-skill-g">
                    <MongoDb />
                    <p>MongoDB</p>
                </div>
                <div className="item-skill-h">
                    <MySql />
                    <p>SQL</p>
                </div>
                <div className="item-skill-m">
                    <h2 className="underline-effect"> {'<'} 2 years </h2>
                </div>
                <div className="item-skill-i">
                    <Java />
                    <p>Java</p>
                </div>
                <div className="item-skill-j">
                    <AWS />
                    <p>AWS Cloud</p>
                </div>
                <div className="item-skill-n">
                    <h2 className="underline-effect"> fundamentals </h2>
                </div>
            </div>
            <div><Experience /></div>
        </div>
    
    )
}