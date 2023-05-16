export declare global {
    interface Window {
        loading: Promise<void>;
    }
}

declare module '*.module.css';
declare module '*.mp3';
declare module '*.wav';
declare module '*.svg';
declare module '*.png';
declare module '*.gif';

type Optional<T> = T | undefined;
type List<T> = T[];
type NumberLike = string | number;

type LocalFile = File;
type Image = LocalFile;

type TimeStamp = number;
type DateString = string;

type Keys<T> = keyof T;
type Values<T, Keys> = T[Keys];

type UnknownObject = Record<string, unknown>;
