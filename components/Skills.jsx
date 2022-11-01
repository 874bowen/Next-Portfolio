import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
         <p className='uppercase text-xl tracking-widest text-[#722410]'>Skills</p>
         <h2 className='py-2'>What I Can Do</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* TODO - create a component*/}
            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/html.jpg" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/css.jpg" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/tailwind.jpg" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/bootstrap.jpg" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/js.png" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/react.png" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/next.jpg" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src="/../public/assets/skills/node.jpg" alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node</h3>
                </div>
              </div>
            </div>

         </div>
      </div>
    </div>
  );
}

export default Skills;