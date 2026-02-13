'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Learning. Building. Improving — one project at a time.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade mb-6">
                            Hi, I&apos;m Sajda.
                        </p>
                        
                        {/* Video Section */}
                        <div className="slide-up-and-fade">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto max-h-[350px] rounded-lg shadow-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 object-cover"
                            >
                                <source src="/intro-video.mp4" type="video/mp4" />
                                <source src="/intro-video.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a motivated web developer with a strong
                                interest in building modern, responsive, and
                                user-friendly websites. I enjoy turning ideas
                                into functional digital experiences using clean
                                code and thoughtful design. With a solid
                                foundation in frontend development and growing
                                experience in full-stack technologies, I focus
                                on creating interfaces that are both visually
                                appealing and easy to use.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I am driven by curiosity and continuous
                                learning, always looking to improve my skills
                                and explore new tools and technologies. I value
                                clarity, consistency, and attention to detail in
                                my work, and I aim to deliver reliable,
                                high-quality solutions that solve real problems
                                and create meaningful user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
