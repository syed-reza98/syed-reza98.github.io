import { useEffect } from 'react';
import { useScene } from '../context/SceneContext';

const ROOM_METAS = {
    gallery: {
        title: "The Archive — Projects | Syed Salman Reza",
        description: "Explore 10 production systems: Flutter mobile apps, multi-tenant SaaS, ATM electronic journal extractors, and AI MCP tooling by Syed Salman Reza.",
        url: "https://syed-reza98.github.io/gallery"
    },
    studio: {
        title: "The Terminal — CodeStorm Hub | Syed Salman Reza",
        description: "CodeStorm Hub operations: 33+ repositories, SaaS platforms, dual-screen POS firmware, and AI infrastructure by Syed Salman Reza.",
        url: "https://syed-reza98.github.io/studio"
    },
    about: {
        title: "The Odyssey — Career & Experience | Syed Salman Reza",
        description: "Four years of banking infrastructure, computer vision publications, quantum computing capstones, and systems engineering by Syed Salman Reza.",
        url: "https://syed-reza98.github.io/about"
    },
    contact: {
        title: "The Dispatch — Open to Work | Syed Salman Reza",
        description: "Get in touch with Syed Salman Reza for full-time engineering roles, remote teams, and freelance product architecture.",
        url: "https://syed-reza98.github.io/contact"
    }
};

const DEFAULT_META = {
    title: 'Syed Salman Reza | Full-Stack Engineer & Systems Architect',
    description: "Personal 3D portfolio — 'The Engineer's Ledger' — showcasing banking systems, SaaS platforms, Flutter mobile apps, and AI integrations by Syed Salman Reza.",
    url: 'https://syed-reza98.github.io/'
};

export const getInitialRoomFromUrl = () => {
    if (typeof window === 'undefined') return null;
    const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
    const validRooms = ['gallery', 'studio', 'about', 'contact'];
    return validRooms.includes(path) ? path : null;
};

export const useDocumentMeta = () => {
    const { currentRoom } = useScene();

    useEffect(() => {
        const meta = (currentRoom && ROOM_METAS[currentRoom]) || DEFAULT_META;

        document.title = meta.title;

        const updateMeta = (selector, attr, value) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                const [attrName] = selector.replace(/[\[\]']/g, '').split('=');
                el.setAttribute(attrName, selector.split('=')[1]?.replace(/['"]/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute(attr, value);
        };

        updateMeta('meta[name="description"]', 'content', meta.description);
        updateMeta('meta[property="og:title"]', 'content', meta.title);
        updateMeta('meta[property="og:description"]', 'content', meta.description);
        updateMeta('meta[property="og:url"]', 'content', meta.url);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', meta.url);
        }

        const path = currentRoom ? `/${currentRoom}` : '/';
        if (window.location.pathname !== path) {
            window.history.pushState(null, '', path);
        }
    }, [currentRoom]);
};
