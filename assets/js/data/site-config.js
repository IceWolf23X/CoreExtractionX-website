/* CoreExtractionX public identity, release source, assets and product palette. */
window.COREX_SITE = {
  schemaVersion: 1,
  brand: {
    family: 'CoreX',
    product: 'CoreExtractionX',
    author: 'IceWolf23X',
    familyLabel: 'A CoreX plugin',
    tagline: 'Configured mining behavior, predictable drops.',
    language: 'en',
    logo: 'assets/img/coreextractionx-logo.png',
    favicon: 'assets/img/coreextractionx-logo.png',
    description: 'CoreExtractionX gives Paper servers YAML-driven block replacement and extra-drop rules with explicit permission, Silk Touch and safety behavior.'
  },

  links: {
    download: 'https://modrinth.com/plugin/coreextractionx',
    modrinth: 'https://modrinth.com/plugin/coreextractionx',
    github: 'https://github.com/IceWolf23X/CoreExtractionX-issues',
    issues: 'https://github.com/IceWolf23X/CoreExtractionX-issues/issues',
    official: 'https://wiki-coreextractionx.icewolf23x.dev/'
  },

  releases: {
    provider: 'github',
    owner: 'IceWolf23X',
    repository: 'CoreExtractionX-website',
    cacheMinutes: 15,
    requestTimeoutMs: 10000,
    maxPages: 10,
    assetNames: {
      paper: ['CoreExtractionX-*.jar'],
      velocity: []
    }
  },

  assets: {
    heroPreview: {
      images: [
        { src: 'assets/img/coreextractionx-logo.png', alt: 'CoreExtractionX plugin logo' }
      ],
      autoplay: false,
      intervalMs: 5000,
      transitionMs: 240,
      pauseOnHover: true,
      objectFit: 'contain',
      src: '',
      alt: 'CoreExtractionX plugin logo'
    }
  },

  theme: {
    default: 'light',
    storageKey: 'corex.theme',
    light: {
      accent: '#756900',
      accentHover: '#5e5400',
      accentSoft: '#faf8d9',
      accentLine: '#e5dc8f',
      onAccent: '#ffffff',
      page: '#fcfcfb',
      surface: '#ffffff',
      surfaceAlt: '#f5f5f3',
      surfaceHover: '#eeedeb',
      ink: '#24232a',
      muted: '#65636f',
      quiet: '#726d7a',
      line: '#e7e5e9',
      lineStrong: '#d4d1da'
    },
    dark: {
      accent: '#ece64b',
      accentHover: '#fff78a',
      accentSoft: '#302e16',
      accentLine: '#625d25',
      onAccent: '#242106',
      page: '#17171a',
      surface: '#1d1d21',
      surfaceAlt: '#232327',
      surfaceHover: '#2b2a30',
      ink: '#eeedf1',
      muted: '#aaa7b3',
      quiet: '#8c8797',
      line: '#313037',
      lineStrong: '#45424e'
    }
  }
};
