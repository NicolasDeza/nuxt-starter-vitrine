export {};

declare global {
  interface Window {
    _paq?: MatomoCommand[];
  }
}

type MatomoCommand = [string, ...unknown[]];
