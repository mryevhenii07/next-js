// import React from 'react';
// // import Link from 'next/link';

// import Tooltip from '@material-ui/core/Tooltip';

// // import Box from '@mui/material/Box';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Modal from '@mui/material/Modal';

// import { AiOutlineMail } from 'react-icons/ai';
// import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const Main = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div id="home" className="w-full h-screen text-center">
//       <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
//         <div>
//           <p className="uppercase text-sm tracking-widest text-gray-600">
//             LETS BUILD SOMETHING TOGETHER
//           </p>
//           <h1 className="py-4 text-gray-700">
//             Hi, Im <span className="text-[#5651e5]">Yevhenii</span>
//           </h1>
//           <h2 className="py-2 text-gray-700">A Front-End Web Developer</h2>
//           <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
//             I’m focused on building responsive front-end web applications while learning back-end
//             technologies.
//           </p>
//           <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
//             <a
//               href="https://www.linkedin.com/in/yevhenii-peredrii-a069a7223/"
//               target="_blank"
//               rel="noreferrer">
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <FaLinkedinIn size={22} />
//               </div>
//             </a>
//             <a href="https://github.com/mryevhenii07" target="_blank" rel="noreferrer">
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <FaGithub size={22} />
//               </div>
//             </a>

//             <Tooltip title="mrit.works07@gmail.com" arrow>
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <AiOutlineMail size={22} />
//               </div>
//             </Tooltip>
//             {/* <if href="../public/assets/civi.pdf"> */}
//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <BsFillPersonLinesFill size={22} />
//             </div>
//             {/* </if> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa';

import Modal from './modal/modal';

const TextOnlyTooltip = withStyles({
  tooltip: {
    color: 'white',
    backgroundColor: 'blank',
    height: '40px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
  },
})(Tooltip);

const Main = () => {
  const [open, setOpen] = React.useState(true);
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
              technologiess.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/yevhenii-peredrii-a069a7223/"
                target="_blank"
                rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn size={24} />
                </div>
              </a>
              <a href="https://github.com/mryevhenii07" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size={24} />
                </div>
              </a>
              <TextOnlyTooltip title="mrit.works07@gmail.com" arrow>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={24} />
                </div>
              </TextOnlyTooltip>

              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTelegram size={28} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
