"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';

const VIDEO_SRC = '/SKS.mp4';

type Viewport = 'unknown' | 'mobile' | 'desktop';

export default function FounderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState<Viewport>('unknown');
  const [inView, setInView] = useState(false);
  const [mobileStarted, setMobileStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isDesktop = viewport === 'desktop';

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setViewport(mq.matches ? 'desktop' : 'mobile');
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: '80px', threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showVideo =
    viewport !== 'unknown' && (isDesktop ? inView : mobileStarted);

  useEffect(() => {
    if (viewport === 'unknown') return;
    const v = videoRef.current;
    if (!v || !showVideo) return;

    if (isDesktop) {
      v.defaultMuted = true;
      v.muted = true;
      setIsMuted(true);
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      v.muted = false;
      setIsMuted(false);
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [showVideo, viewport, isDesktop]);

  const pulseBorder = () => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { boxShadow: '0 0 50px rgba(240,147,43,0.65)' },
      { boxShadow: '0 0 30px rgba(240,147,43,0.28)', duration: 0.5 }
    );
  };

  const handleContainerClick = () => {
    const v = videoRef.current;
    if (!isDesktop && !mobileStarted) {
      setMobileStarted(true);
      pulseBorder();
      return;
    }
    if (!v) return;

    if (v.paused) {
      v.muted = false;
      setIsMuted(false);
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
      pulseBorder();
      return;
    }
    if (v.muted) {
      v.muted = false;
      setIsMuted(false);
      pulseBorder();
      return;
    }
    v.pause();
    setIsPlaying(false);
    pulseBorder();
  };

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const overlayVisible =
    showVideo && (!isPlaying || isMuted || isHovered);

  return (
    <div
      ref={containerRef}
      className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-[rgba(240,147,43,0.45)] bg-black/40 shadow-[0_0_30px_rgba(240,147,43,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_50px_rgba(240,147,43,0.45)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleContainerClick}
      data-cursor="hover"
      style={{ aspectRatio: '4/5', maxHeight: '600px' }}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
          src={VIDEO_SRC}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          controls={false}
        />
      ) : (
        <div
          className="flex h-full min-h-[280px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#0a1020] via-[#030508] to-black md:min-h-0"
          aria-hidden
        >
          {viewport === 'unknown' ? (
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted/80">Loading…</span>
          ) : !isDesktop ? (
            <>
              <Play className="mb-3 h-16 w-16 text-primary opacity-90 md:h-14 md:w-14" strokeWidth={1.25} />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">Tap to play</span>
            </>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted/80">Scroll into view</span>
          )}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />

      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${
          overlayVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-black/80 text-primary shadow-[0_0_30px_rgba(240,147,43,0.45)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
            {!isPlaying ? (
              <Play className="ml-1 h-10 w-10 md:h-11 md:w-11" fill="currentColor" />
            ) : isMuted ? (
              <VolumeX className="h-10 w-10 md:h-11 md:w-11" strokeWidth={1.5} />
            ) : (
              <Pause className="h-10 w-10 md:h-11 md:w-11" fill="currentColor" />
            )}
          </div>
          {isDesktop && isPlaying && isMuted && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">Click to unmute</span>
          )}
          {!isDesktop && !mobileStarted && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">Tap to load & play</span>
          )}
        </div>
      </div>

      {showVideo && (
        <div className="absolute bottom-4 left-4 z-30">
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full border border-[rgba(240,147,43,0.35)] bg-black/60 p-2.5 text-primary backdrop-blur-md transition-colors hover:bg-black/80"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      )}
    </div>
  );
}
