import { Zap,Bot, CodeXml, BrainCircuit, Linkedin, Github } from 'lucide-react';
import React from 'react';
import Header from './components/Header';
import './Home.css'; // Ensure this file exists in your project

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Yusuf Sertkaya</h1>
          <p>Welcome to my portfolio. I'm a passionate Computer Engineering student and tech enthusiast.</p>
          <div className="hero-buttons">
            <a href="/dashboard" className="btn btn-primary">Projects</a>
            <a href="https://www.youtube.com/@asdfghjkl77357" className="btn btn-secondary">My Youtube Channel</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who Am I?</h2>
        <p>I am a third-year Computer Engineering student and a tech enthusiast with a passionate interest in every facet of the field.</p>
      </section>

      <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h2 className="font-bold text-3xl">Who Am I?</h2>
                    <h2 className="text-md text-gray-500">I am a second-year Computer Engineering student and a tech enthusiast with a passionate interest in every facet of the field.

                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
                            <Zap className='h-8 w-8' />
                            <h2 className="mt-4 text-xl font-bold text-black">Electronic&Robotic</h2>
                            <p className="mt-1 text-sm text-gray-600">
                            I love building electronic projects for fun and have extensive experience working with IoT-based systems and autonomous systems. I'm always on the lookout for innovative project ideas, such as smart home automation, drone technology, or AI-powered robotics.
                            </p>
                        </a>
                        <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
                            <CodeXml className='h-8 w-8' />
                            <h2 className="mt-4 text-xl font-bold text-black">Programming</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                I enjoy the power of programming because it allows me to bring my numerous ideas to life. The way programming helps me transform my thoughts into reality is truly amazing. But also hate the bugs :/


                            </p>
                        </a>
                        <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
                            <BrainCircuit className='h-8 w-8' />
                            <h2 className="mt-4 text-xl font-bold text-black">Ai</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                I'm very enthusiastic about being part of the AI revolution that's shaping our century, and I am actively working towards gaining involvement in this field.
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 text-center flex justify-center gap-5">
                        <a href="https://www.linkedin.com/in/yusuf-sertkaya-87888a244/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:text-white hover:bg-gray-200" role="alert" style={{ backgroundColor: '#18b6f4' }}>
                            <span className="text-sm rounded-full text-white px-5 py-2 mr-4" style={{ backgroundColor: '#0072b1' }}>
                                <Linkedin className='h-4 w-5' /> LinkedIn
                            </span>
                            <span className="text-sm text-white font-light">Yusuf Sertkaya</span>
                        
                        </a>
                        <a href="https://github.com/YsK-dev" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert" style={{ backgroundColor: '#18b6f4' }}>
                            <span className="text-sm rounded-full text-white px-5 py-2 mr-4" style={{ backgroundColor: '#2b3137' }}>
                                <Github className='h-4 w-5' /> GitHub
                            </span>
                            <span className="text-sm text-white font-lg">
                                YsK <Bot className='h-4 w-5 flex justify-between' />
                            </span>
                            
                        </a>
                    </div>
                </section>


    </div>
  );
};

export default Home;
