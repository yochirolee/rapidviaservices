'use client';
import React, { useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?4e9162c48b3e6974a406ee77b28';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        scriptRef.current = script;

        const interval = setInterval(() => {
            const widget = document.querySelector('.ti-widget') as HTMLElement;
            if (widget && containerRef.current && !containerRef.current.contains(widget)) {
                containerRef.current.appendChild(widget);
                clearInterval(interval);
            }
        }, 300);

        return () => {
            if (scriptRef.current && scriptRef.current.parentNode) {
                scriptRef.current.parentNode.removeChild(scriptRef.current);
            }
            clearInterval(interval);
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="trustindex-container" style={{ marginTop: '2rem'}}></div>
    );
};

export default Testimonials;