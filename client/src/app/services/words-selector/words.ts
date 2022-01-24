import { Theme } from '@app/components/selectors/theme-selector/themes';

export interface Word {
    en: string;
    fr: string;
    de: string;
    themes: Theme[];
}

export const words: Word[] = [
    {
        en: 'fast',
        fr: 'rapide',
        de: 'schnell',
        themes: [Theme.Adjectives],
    },
    {
        en: 'juice',
        fr: 'jus',
        de: 'saft',
        themes: [Theme.Food],
    },
    {
        en: 'blue',
        fr: 'bleu',
        de: 'blau',
        themes: [Theme.Colors],
    },
    {
        en: 'sweet',
        fr: 'sucré',
        de: 'süß',
        themes: [Theme.Adjectives, Theme.Food],
    },
];
