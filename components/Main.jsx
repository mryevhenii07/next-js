import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa';

import Modal from './modal/modal';

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(false);
  const onClose = () => setOpen(true);

  return (
    <div id="home" className="w-full h-screen text-center relative">
      {!open ? (
        <Modal onClose={onClose} />
      ) : (
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              LETS BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-gray-700">
              Hi, Im <span className="text-[#5651e5]">Yevhenii</span>
            </h1>
            <h2 className="py-2 text-gray-700">A Front-End Web Developer</h2>
            <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
              I’m focused on building responsive front-end web applications while learning back-end
              technologies.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/yevhenii-peredrii-a069a7223/"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn size={22} />
                </div>
              </a>
              <a href="https://github.com/mryevhenii07" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size={22} />
                </div>
              </a>
              <Tooltip title="mrit.works07@gmail.com" arrow>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={22} />
                </div>
              </Tooltip>

              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTelegram size={26} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
