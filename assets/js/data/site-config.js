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
      page: '#fdfdf9',
      surface: '#ffffff',
      surfaceAlt: '#f7f6ec',
      surfaceHover: '#eeecd8',
      ink: '#2a291d',
      muted: '#6a6751',
      quiet: '#726d53',
      line: '#e8e5d3',
      lineStrong: '#d6d0ad'
    },
    dark: {
      accent: '#ece64b',
      accentHover: '#fff78a',
      accentSoft: '#302e16',
      accentLine: '#625d25',
      onAccent: '#242106',
      page: '#191912',
      surface: '#212118',
      surfaceAlt: '#2a291d',
      surfaceHover: '#343221',
      ink: '#f4f2df',
      muted: '#bbb799',
      quiet: '#a29e7c',
      line: '#3b3925',
      lineStrong: '#535033'
    }
  }
};
