import { useState } from 'react';
import { PROJECTS, EXPERIENCE, CERTIFICATIONS, OPERATOR_INFO } from '../config/portfolioData';

export const isSanityConfigured = false;
export const isSanityDataLoaded = () => true;
export const loadSanityData = () => Promise.resolve();

export function useGalleryProjects() {
    return PROJECTS;
}

export function useStudioContent() {
    // Map experience and flagships into studio monitor content
    return [
        {
            id: 'codestorm-0',
            title: 'CodeStorm Hub Flagships',
            platform: 'STUDIO',
            description: 'Founded and lead a 7-engineer product studio (33+ repositories) shipping StormCom multi-tenant SaaS, PetFolio social-commerce, and Awaken ML Kit alarm apps.',
            url: 'https://www.codestormhub.dev',
            date: '2024-PRESENT',
            views: '33+ Repos',
            likes: '7 Devs'
        },
        {
            id: 'banking-1',
            title: 'Eastern Bank NetCon EJ Parser',
            platform: 'BANKING',
            description: 'Multi-vendor ATM and Cash-Recycling Machine electronic journal parser for Eastern Bank PLC. Python Flask API with ElectronJS desktop UI.',
            url: 'https://github.com/syed-reza98',
            date: '2022-2026',
            views: 'Production',
            likes: '100% Reconciled'
        },
        {
            id: 'ai-2',
            title: 'AI MCP Servers & Agent Tooling',
            platform: 'AI LABS',
            description: 'Material 3 design system MCP server, freellmapi unified client, Azure AI comment labeler GitHub action, and AMD Developer Hackathon ACT II competitor.',
            url: 'https://github.com/CodeStorm-Hub/freellmapi',
            date: '2025-2026',
            views: 'Hackathon',
            likes: 'Model Context'
        },
        {
            id: 'vision-3',
            title: 'YOLOv4 Bike Helmet Detection',
            platform: 'RESEARCH',
            description: 'Computer vision model with 85,300+ views and 4,600+ downloads on Roboflow Universe. Scaled YOLOv4 achieving 91.5% mAP@50 and 92.8% Recall.',
            url: 'https://universe.roboflow.com/bike-helmets/bike-helmet-detection-2vdjo',
            date: '2020-PUBLISHED',
            views: '85.3k Views',
            likes: '4.6k Downloads'
        }
    ];
}

export function useAwards() {
    return {
        sotd: {
            id: 'cert-oci',
            layout: 'certificate_grid',
            title: 'Oracle Cloud Infrastructure',
            items: [
                {
                    label: 'Oracle Cloud Infrastructure Solution Engineer Specialist',
                    date: '2023',
                    url: 'https://www.linkedin.com/in/salman-reza/'
                },
                {
                    label: 'Oracle Analytics Solution Engineer Specialist',
                    date: '2024',
                    url: 'https://www.linkedin.com/in/salman-reza/'
                }
            ],
            platformConfig: { label: 'CERTIFICATION', color: '#1a1a1a', icon: '🏆' }
        },
        sotm: {
            id: 'cert-exadata',
            layout: 'certificate_grid',
            title: 'Oracle Exadata & Database',
            items: [
                {
                    label: 'Oracle Exadata On-Premise Solution Engineer & Sales Specialist',
                    date: '2022',
                    url: 'https://www.linkedin.com/in/salman-reza/'
                },
                {
                    label: 'Oracle Database 19c: Introduction to SQL (40h Track)',
                    date: '2022',
                    url: 'https://www.linkedin.com/in/salman-reza/'
                }
            ],
            platformConfig: { label: 'SPECIALIZATION', color: '#1a1a1a', icon: '💾' }
        },
        other: {
            id: 'research-quantum',
            layout: 'certificate_grid',
            title: 'University & Research Honors',
            items: [
                {
                    label: 'North South University: BSc Computer Science & Engineering (2022)',
                    date: '2022',
                    url: 'https://www.linkedin.com/in/salman-reza/'
                },
                {
                    label: 'Quantum Superdense Coding Defense on IBM Quantum Hardware',
                    date: '2022',
                    url: 'https://github.com/syed-reza98'
                }
            ],
            platformConfig: { label: 'RESEARCH', color: '#1a1a1a', icon: '⚛️' }
        }
    };
}
