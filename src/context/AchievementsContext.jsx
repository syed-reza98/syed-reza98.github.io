import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useAudio } from './AudioManager';

const AchievementsContext = createContext();

export const ACHIEVEMENTS = {
    corridor_enter: { id: 'corridor_enter', label: 'Click a door to enter the vault', title: 'Vault Explorer' },
    corridor_explore: { id: 'corridor_explore', label: 'Scroll to explore the ledger corridor', title: 'Ledger Keeper' },
    about_fly: { id: 'about_fly', label: 'Scroll to fly through the career sky', title: 'Systems Aviator' },
    studio_interact: { id: 'studio_interact', label: 'Drag to inspect monitors and terminal', title: 'Terminal Operator' },
    gallery_inspect: { id: 'gallery_inspect', label: 'Click transaction project to inspect', title: 'Chief Archivist' },
    contact_choose: { id: 'contact_choose', label: 'Find a direct engagement channel', title: 'Reconciled' }
};

export const AchievementsProvider = ({ children }) => {
    const { playSound } = useAudio();

    // Synchronous ref to prevent double-firing on rapid events (like wheel scroll)
    const completedRef = useRef([]);

    // Load completed achievements from local storage
    const [completed, setCompleted] = useState(() => {
        try {
            const saved = localStorage.getItem('syed_achievements');
            if (saved) {
                const parsed = JSON.parse(saved);
                const filtered = parsed.filter(id => id !== 'corridor_enter');
                completedRef.current = [...filtered];
                return filtered;
            }
            return [];
        } catch (e) {
            return [];
        }
    });

    const audioCtxRef = useRef(null);

    // WebAudio chime for achievement unlock (A4 440Hz -> E5 659.25Hz harmonic sine wave)
    const playUnlockChime = useCallback(() => {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;

            if (!audioCtxRef.current) {
                audioCtxRef.current = new AudioCtx();
            }

            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') {
                ctx.resume().catch(() => {});
            }

            if (ctx.state !== 'running') return;

            const gain = ctx.createGain();
            const osc = ctx.createOscillator();

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.15);

            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.05);
            gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.5);
        } catch (err) {
            // Silently fail if blocked by browser policy
        }
    }, []);

    const [activePopup, setActivePopup] = useState(null);

    useEffect(() => {
        const toSave = completed.filter(id => id !== 'corridor_enter');
        localStorage.setItem('syed_achievements', JSON.stringify(toSave));
    }, [completed]);

    const unlockAchievement = useCallback((id) => {
        if (!ACHIEVEMENTS[id]) return;

        if (completedRef.current.includes(id)) {
            return;
        }

        completedRef.current.push(id);
        setCompleted(prev => [...prev, id]);

        playUnlockChime();

        setActivePopup({
            id,
            status: 'completed',
            isTutorial: false
        });
    }, [playUnlockChime]);

    const showTutorial = useCallback((id) => {
        if (!ACHIEVEMENTS[id]) return;

        if (completedRef.current.includes(id)) {
            return;
        }

        setActivePopup({
            id,
            status: 'pending',
            isTutorial: true
        });
    }, []);

    const hidePopup = useCallback(() => {
        setActivePopup(prev => {
            if (!prev) return null;
            return { ...prev, status: 'hiding' };
        });
        setTimeout(() => {
            setActivePopup(null);
        }, 400);
    }, []);

    const value = {
        achievements: ACHIEVEMENTS,
        completed,
        activePopup,
        unlockAchievement,
        showTutorial,
        hidePopup
    };

    return (
        <AchievementsContext.Provider value={value}>
            {children}
        </AchievementsContext.Provider>
    );
};

export const useAchievements = () => useContext(AchievementsContext);
