"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VIDEO_SRC = '/SKS.mp4';

export default function FounderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileStarted, setMobileStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { rootMargin: '80px', threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showVideo = isDesktop ? inView : mobileStarted;

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !showVideo) return;
    v.muted = isDesktop;
    setIsMuted(isDesktop);
    v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [showVideo, isDesktop]);

  const handleContainerClick = () => {
    const v = videoRef.current;
    if (!isDesktop && !mobileStarted) { setMobileStarted(true); return; }
    if (!v) return;
    if (v.paused) {
      v.muted = false; setIsMuted(false);
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    } else if (v.muted) {
      v.muted = false; setIsMuted(false);
    } else {
      v.pause(); setIsPlaying(false);
    }
  };

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const overlayVisible = showVideo && (!isPlaying || isMuted || isHovered);

  return (
    <div
      ref={containerRef}
      className="group relative w-full max-w-sm cursor-pointer overflow-hidden glass-card transition-all duration-300"
      style={{ aspectRatio: '4/5' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleContainerClick}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#0a0d1a] to-[#040608]">
          <Play className="mb-3 h-14 w-14 text-primary opacity-90" strokeWidth={1.25} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {isDesktop ? 'Scroll into view' : 'Tap to play'}
          </span>
        </div>
      )}

      {/* Inner shadow overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_60px_rgba(0,0,0,0.7)]" />

      {/* Play/Pause overlay */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-250 ${
          overlayVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-black/70 text-primary backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
            {!isPlaying ? (
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            ) : isMuted ? (
              <VolumeX className="h-8 w-8" strokeWidth={1.5} />
            ) : (
              <Pause className="h-8 w-8" fill="currentColor" />
            )}
          </div>
          {isDesktop && isPlaying && isMuted && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">Click to unmute</span>
          )}
          {!isDesktop && !mobileStarted && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">Tap to load & play</span>
          )}
        </div>
      </div>

      {/* Mute toggle */}
      {showVideo && (
        <div className="absolute bottom-3 left-3 z-30">
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full border border-primary/30 bg-black/60 p-2 text-primary backdrop-blur-sm transition-colors hover:bg-black/80"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      )}
    </div>
  );
}
