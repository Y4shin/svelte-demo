import { writable } from 'svelte/store';
import { browser } from '$app/env';

const darkModeDefault = false;
const darkModeInitial: boolean = browser ? ((window.localStorage.getItem('darkMode') ?? darkModeDefault) === 'true' ? true : false) : darkModeDefault;

export const darkmode = writable(darkModeInitial);
export const routeUp = writable("/");

darkmode.subscribe((val) => {
    if (browser) {
        window.localStorage.setItem('darkMode', val ? 'true' : 'false');
    }
})