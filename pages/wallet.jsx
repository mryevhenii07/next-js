import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

import PropertyImg from '../public/assets/project/walletbg.png';

const wallet = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30Vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute" layout="fill" objectFit="cover" src={PropertyImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Wallet</h2>
          <h3>Team Project</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a team project,made page translation and form validation section, in this
            project I used dependencies: i18next, react, react-dom, react-icons, react-router-dom,
            react-sparklines and devDependencies: autoprefixer, eslint, husky, lint-staged, postcss,
            prettier and .For them install used npm. Starting of the project-CREATE REACT APP.
          </p>

          <Link
            href="https://memx86-team-project-wallet.netlify.app/"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/memx86/team-project-react">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java Script
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Router-Dom
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default wallet;
