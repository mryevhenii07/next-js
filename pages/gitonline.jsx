import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';

import PropertyImg from '../public/assets/project/property.jpg';

const gitonline = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30Vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute" layout="fill" objectFit="cover" src={PropertyImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GitOnline</h2>
          <h3>React/JS/Redux </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem vel
            animi illum non? Voluptatum facere maiores amet minus, ut qui obcaecati odit non quod
            praesentium explicabo. Saepe perferendis aperiam, cumque unde illo, voluptatibus
            officiis eius tempore, tenetur fugit consectetur accusantium velit labore harum omnis
            modi dolor inventore? Quae repellendus sunt ipsam tempore similique voluptas, amet
            quaerat ea reiciendis ut recusandae quisquam eveniet non cumque temporibus ullam
            consectetur molestiae esse nesciunt sapiente quos voluptatem ad facere. Soluta officiis
            minima voluptatum, magni vitae eos molestiae impedit similique ad. Voluptate cupiditate
            cumque eum, atque perspiciatis reprehenderit dolore incidunt culpa. Sequi, possimus
            fugit.
          </p>
          <a href="mryevhenii07.github.io/pizza/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>

          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java Script
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
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

export default gitonline;
