declare const __DEV__: boolean;

declare module '*.module.css';
declare module '*.mp3';
declare module '*.wav';
declare module '*.svg';
declare module '*.png';
declare module '*.gif';

interface Window {
    loading: Promise<boolean>;
    scriptLoadError?: () => void;
}

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
