import React from 'react';
import Image from 'next/image';

import HtmlImg from '../public/assets/skills/html.png';
import CssImg from '../public/assets/skills/css.png';
import SassImg from '../public/assets/skills/sass.png';
import JsImg from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import NextJsImg from '../public/assets/skills/nextjs.png';
import ReduxImg from '../public/assets/skills/Redux.png';
import TailwindImg from '../public/assets/skills/tailwind.png';
import GitHubImg from '../public/assets/skills/github1.png';
import FirebaseImg from '../public/assets/skills/firebase.png';
import MaterialUiImg from '../public/assets/skills/material-ui.png';
import HookImg from '../public/assets/skills/react-hook-form.png';
import AgileImg from '../public/assets/skills/agile.png';
import TypeScriptImg from '../public/assets/skills/typescript.png';
import StyledComponentsImg from '../public/assets/skills/styledcomponents.png';
import TrelloImg from '../public/assets/skills/trello.png';
import FigmaImg from '../public/assets/skills/figma.png';
import SolidImg from '../public/assets/skills/solid.png';
import Restapi from '../public/assets/skills/restapi.png';
import WebpackImg from '../public/assets/skills/webpack.png';

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mt-1">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HtmlImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CssImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={StyledComponentsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>StyledComponents</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SassImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SASS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java Script</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TypeScriptImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReduxImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux-toolkit</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GitHubImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FirebaseImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HookImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React-Hook-Form</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MaterialUiImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Material-Ui</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={WebpackImg} alt="img" width="124" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Webpack</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Restapi} alt="img" width="104" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Rest Api</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AgileImg} alt="img" width="84" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Agile/Scrum</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FigmaImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TrelloImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Trello</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SolidImg} alt="img" width="154" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SOLID</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
