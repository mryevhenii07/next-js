import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import CryptoImg from '../public/assets/project/crypto.jpg';
import SearchEvenImg from '../public/assets/project/search-even.png';
import PizzaImg from '../public/assets/project/pizza.png';
import IceImg from '../public/assets/project/ice.png';
import GitonlineImg from '../public/assets/project/gitonline.png';
import CryptoImg from '../public/assets/project/crypto.png';
import WalletImg from '../public/assets/project/wallet.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5">Projects</p>
        <h2 className="py-4">What I Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Crypto App" backgroundImg={CryptoImg} projectUrl="/crypto" />
          <ProjectItem title="Pizza King" backgroundImg={PizzaImg} projectUrl="/pizza" />
          <ProjectItem title="Search Event" backgroundImg={SearchEvenImg} projectUrl="/event" />
          <ProjectItem title="Git Online" backgroundImg={GitonlineImg} projectUrl="/gitonline" />
          <ProjectItem title="Ice Cream" backgroundImg={IceImg} projectUrl="/icecream" />
          <ProjectItem title="Wallet App" backgroundImg={WalletImg} projectUrl="/wallet" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
