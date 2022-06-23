/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                t: {
                    reg: {
                        lgt: { DEFAULT: '#374151', hgl: '#000000' },
                        drk: { DEFAULT: '#d1d5db', hgl: '#ffffff' }
                    },
                    suc: {
                        lgt: { DEFAULT: '#059669', hgl: '#064e3b' },
                        drk: { DEFAULT: '#34d399', hgl: '#d1fae5' }
                    },
                    fal: {
                        lgt: { DEFAULT: '#dc2626', hgl: '#7f1d1d' },
                        drk: { DEFAULT: '#f87171', hgl: '#fee2e2' }
                    }
                },
                p: {
                    bgr: { lgt: { DEFAULT: '#e5e7eb', hgl: '#9ca3af', bdr: '#9ca3af' }, drk: { DEFAULT: '#374151', hgl: '#6b7280', bdr: '#6b7280' } },
                    pri: { lgt: { DEFAULT: '#ffffff', hgl: '#e5e7eb', bdr: '#e5e7eb' }, drk: { DEFAULT: '#111827', hgl: '#4b5563', bdr: '#4b5563' } },
                    acc: { lgt: { DEFAULT: '#a5b4fc', hgl: '#6366f1', bdr: '#6366f1' }, drk: { DEFAULT: '#312e81', hgl: '#4338ca', bdr: '#4338ca' } }
                },
            }
        }
    },
    plugins: [],
    darkMode: 'class'
};