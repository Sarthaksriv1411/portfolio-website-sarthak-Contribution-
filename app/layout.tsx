import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import BackToTop from '@/components/BackToTop';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Sajda Sabnam - Full Stack Developer Portfolio',
    description: 'Detail-oriented web developer with hands-on experience in frontend and full-stack web development. Specializing in React, Next.js, Node.js, and building modern, responsive web applications.',
    keywords: ['Sajda Sabnam', 'Full Stack Developer', 'Frontend Developer', 'React Developer', 'Next.js', 'Node.js', 'Web Developer Portfolio'],
    authors: [{ name: 'Sajda Sabnam' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://yourportfolio.com',
        siteName: 'Sajda Sabnam Portfolio',
        title: 'Sajda Sabnam - Full Stack Developer',
        description: 'Detail-oriented web developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Sajda Sabnam - Full Stack Developer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sajda Sabnam - Full Stack Developer',
        description: 'Detail-oriented web developer specializing in React, Next.js, and modern web technologies.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <GoogleAnalytics gaId="G-MHLY1LNGY5" />
                <Script id="hotjar" strategy="afterInteractive">
                    {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6380611,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </Script>
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                    <BackToTop />
                </ReactLenis>
            </body>
        </html>
    );
}
