'use client';
import { useRef, useState } from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ContactCard {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    action: () => void;
    gradient: string;
    glowColor: string;
}

const HolographicContactHub = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLElement | null)[]>([]);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const linkedinUrl = SOCIAL_LINKS.find(link => link.name === 'linkedin')?.url;
    const githubUrl = SOCIAL_LINKS.find(link => link.name === 'github')?.url;

    const contactCards: ContactCard[] = [
        {
            id: 'linkedin',
            icon: <Linkedin size={32} />,
            title: 'LinkedIn',
            subtitle: "Let's connect",
            action: () => {
                window.open(linkedinUrl, '_blank');
            },
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
            glowColor: 'rgba(59, 130, 246, 0.4)',
        },
        {
            id: 'github',
            icon: <Github size={32} />,
            title: 'GitHub',
            subtitle: 'Check my code',
            action: () => {
                window.open(githubUrl, '_blank');
            },
            gradient: 'from-gray-700 via-gray-800 to-black',
            glowColor: 'rgba(156, 163, 175, 0.4)',
        },
    ];

    // Magnetic effect
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x * 0.15;
        const moveY = y * 0.15;

        gsap.to(card, {
            x: moveX,
            y: moveY,
            rotateX: -y * 0.05,
            rotateY: x * 0.05,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = (index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;

        gsap.to(card, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
        });
    };

    // Floating animation
    useGSAP(
        () => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.to(card, {
                    y: '+=15',
                    duration: 2 + index * 0.3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.2,
                });
            });
        },
        { scope: containerRef },
    );

    // Entrance animation
    useGSAP(
        () => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.from('.hub-title', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })
                .from('.hub-subtitle', {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                }, '-=0.4')
                .from(cardsRef.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                }, '-=0.3');
        },
        { scope: containerRef },
    );

    return (
        <section className="py-20 relative overflow-hidden" id="contact" ref={containerRef}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            
            {/* Animated grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }} />
            </div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="hub-title text-5xl md:text-7xl font-anton mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        LET&apos;S CONNECT
                    </h2>
                    <p className="hub-subtitle text-lg text-muted-foreground">
                        Choose your preferred way to reach out
                    </p>
                </div>

                {/* Holographic Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {contactCards.map((card, index) => (
                        <button
                            key={card.id}
                            ref={(el: any) => {
                                cardsRef.current[index] = el;
                            }}
                            onMouseMove={(e: any) => handleMouseMove(e, index)}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => {
                                handleMouseLeave(index);
                                setHoveredCard(null);
                            }}
                            onClick={card.action}
                            type="button"
                            className="relative group cursor-pointer z-10 w-full border-0 bg-transparent p-0 block"
                            style={{ perspective: '1000px', textDecoration: 'none' }}
                        >
                            {/* Glow effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl blur-2xl transition-opacity duration-500 pointer-events-none ${
                                    hoveredCard === card.id ? 'opacity-60' : 'opacity-0'
                                }`}
                                style={{
                                    background: card.glowColor,
                                }}
                            />

                            {/* Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden">
                                {/* Glassmorphism background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 pointer-events-none" />
                                
                                {/* Gradient overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                                />

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                                    {/* Icon with glow */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`absolute inset-0 blur-xl ${
                                                hoveredCard === card.id ? 'opacity-60' : 'opacity-0'
                                            } transition-opacity duration-500 pointer-events-none`}
                                            style={{ background: card.glowColor }}
                                        />
                                        <div className="relative text-white transform group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                                            {card.icon}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-2xl font-anton text-white mb-2 group-hover:text-primary transition-colors duration-300 pointer-events-none">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-white/70 mb-4 pointer-events-none">
                                        {card.subtitle}
                                    </p>

                                    {/* Arrow */}
                                    <div className="text-white/50 group-hover:text-primary transform group-hover:translate-x-2 transition-all duration-300 pointer-events-none">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                                        style={{
                                            transform: 'translateX(-100%)',
                                            animation: hoveredCard === card.id ? 'shine 1.5s ease-in-out infinite' : 'none',
                                        }}
                                    />
                                </div>

                                {/* Scanline effect */}
                                <div className="absolute inset-0 pointer-events-none opacity-20">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                                        style={{
                                            height: '2px',
                                            animation: hoveredCard === card.id ? 'scan 2s linear infinite' : 'none',
                                        }}
                                    />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Email Contact */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground">
                        Or reach me via email at{' '}
                        <a 
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
                        >
                            {GENERAL_INFO.email}
                        </a>
                    </p>
                </div>

                {/* Additional text */}
                <div className="text-center mt-6">
                    <p className="text-muted-foreground">
                        Available for freelance opportunities and collaborations
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes shine {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes scan {
                    0% {
                        top: 0%;
                    }
                    100% {
                        top: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default HolographicContactHub;
