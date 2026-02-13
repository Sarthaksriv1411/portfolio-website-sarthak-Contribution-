'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HolographicContactHub from './HolographicContactHub';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = () => {
    const pathname = usePathname();

    // Check if we're on a project detail page
    const isProjectPage = pathname?.startsWith('/projects/');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const repoStats = await fetch(
                    'https://api.github.com/repos/tajmirul/portfolio-2.0',
                );

                if (repoStats.ok) {
                    await repoStats.json() as RepoStats;
                }
            } catch (error) {
                console.error('Failed to fetch GitHub stats:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <footer className="text-center pb-5">
            {!isProjectPage && <HolographicContactHub />}
        </footer>
    );
};

export default Footer;
