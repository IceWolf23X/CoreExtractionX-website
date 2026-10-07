/* CoreExtractionX landing copy; shared renderers read this file without product HTML edits. */
window.COREX_LANDING = {
  order: ['hero', 'compatibility', 'features', 'setup', 'docsPromo', 'faq', 'finalCta'],

  header: {
    nav: [
      { label: 'Features', href: '#/features', nav: 'features' },
      { label: 'Setup', href: '#/setup', nav: 'setup' },
      { label: 'Documentation', href: '#/docs/overview', nav: 'docs', docsLink: true },
      { label: 'FAQ', href: '#/faq', nav: 'faq' },
      { label: 'Releases', href: '#/releases', nav: 'releases' }
    ]
  },

  hero: {
    eyebrow: 'YAML-driven mining for Paper',
    title: [
      { text: 'Choose the block.' },
      { text: 'Define the extraction.', accent: true }
    ],
    description: 'Replace configured mined blocks while preserving natural drops, or keep vanilla breaking and add a precisely controlled extra item.',
    actions: [
      { label: 'Download on Modrinth', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Explore the docs', href: '#/docs/overview', icon: 'book', docsLink: true }
    ],
    platforms: ['Paper 1.21.11+', 'Java 21', 'Version 2026.1.1'],
    preview: {
      assetKey: 'heroPreview',
      ariaLabel: 'CoreExtractionX plugin logo',
      topLeft: 'COREEXTRACTIONX / PAPER',
      placeholderLabel: 'PLUGIN PREVIEW',
      placeholderTitle: 'Mining rules from YAML.',
      placeholderText: 'Block replacement and extra drops without a custom progression stack.',
      dimensions: 'PAPER / 2026.1.1',
      captionLeft: 'Two extraction modes.',
      captionRight: 'Paper + YAML',
      tag: 'Keep unrelated mining vanilla.'
    }
  },

  compatibility: {
    labelLines: ['FOCUSED ON', 'PAPER SURVIVAL'],
    items: [
      { label: 'Paper 1.21.11+', icon: 'server' },
      { label: 'Java 21', icon: 'code' },
      { label: 'Survival players', icon: 'users' },
      { label: 'YAML rules', icon: 'file' },
      { label: 'Natural drops', icon: 'box' },
      { label: 'Protection-aware', icon: 'shield' }
    ]
  },

  features: {
    id: 'features',
    number: '01 /',
    eyebrow: 'A narrow extraction layer',
    title: ['Change configured blocks.', 'Leave the rest of mining alone.'],
    description: 'CoreExtractionX handles only enabled, valid rules for survival players in allowed worlds.',
    cards: [
      {
        icon: 'layers',
        title: 'REPLACEMENT mode.',
        text: 'Replace the mined source block, calculate its natural drops with the current tool, damage that tool once and optionally preserve captured XP.',
        link: { label: 'Read replacement behavior', href: '#/docs/overview/extraction-modes~replacement-mode' }
      },
      {
        icon: 'box',
        title: 'DROP mode.',
        text: 'Let the block break normally, then add a configured item after generated drops exist.',
        link: { label: 'Read drop behavior', href: '#/docs/overview/extraction-modes~drop-mode' }
      },
      {
        icon: 'sliders',
        title: 'Four amount strategies.',
        text: 'Use fixed, random, initial-generated quantity or current-event quantity with explicit Fortune and cap semantics.',
        link: { label: 'Compare amount modes', href: '#/docs/paper/ores-yml~drop-amount-schema' }
      },
      {
        icon: 'shield',
        title: 'Permission and Silk Touch policy.',
        text: 'Resolve global or per-rule requirements, then choose vanilla fallback or a denied break.',
        link: { label: 'Configure fallbacks', href: '#/docs/paper/config-yml~permission-and-silk-touch' }
      },
      {
        icon: 'server',
        title: 'Protection-friendly event handling.',
        text: 'Already-cancelled break and drop events are ignored so earlier protection decisions stay authoritative.',
        link: { label: 'Understand event ordering', href: '#/docs/reference/safety-and-compatibility~event-ordering' }
      },
      {
        icon: 'code',
        title: 'Safe configuration recovery.',
        text: 'Invalid enabled rules are skipped individually. Fatal global enum errors safe-disable extraction while reload remains available.',
        link: { label: 'Review validation', href: '#/docs/reference/troubleshooting' }
      }
    ],
    bottom: {
      strong: 'Predictable rules without a progression system.',
      text: 'No database, economy, GUI, vein miner, auto miner or protection bridge is required.',
      link: { label: 'Open the complete overview', href: '#/docs/overview/features' }
    }
  },

  setup: {
    id: 'setup',
    number: '02 /',
    eyebrow: 'Three public YAML files',
    title: ['Boot once.', 'Test before broad rules.'],
    tabAriaLabel: 'CoreExtractionX deployment',
    modes: [
      {
        id: 'paper',
        tabLabel: 'Paper server',
        tabIcon: 'server',
        title: 'Paper owns every extraction decision.',
        text: 'CoreExtractionX is a standalone Paper plugin. Rules, messages and global behavior stay in the plugin data folder.',
        steps: [
          'Install the CoreExtractionX JAR on Paper 1.21.11+ with Java 21.',
          'Start once to generate config.yml, ores.yml and messages.yml.',
          'Validate one normal, one deepslate and one Nether rule in a staging world.'
        ],
        link: { label: 'Follow the installation guide', href: '#/docs/getting-started/installation' },
        topology: {
          labelLeft: 'DEPLOYMENT / PAPER',
          labelRight: 'SURVIVAL EVENTS',
          nodes: [
            { icon: 'users', label: 'Survival player' },
            { icon: 'server', label: 'Paper', small: 'CoreExtractionX', primary: true },
            { icon: 'file', label: 'YAML rules' }
          ],
          note: 'No proxy, database or client installation participates in extraction.'
        }
      }
    ]
  },

  docsPromo: {
    eyebrow: 'Every fallback, documented.',
    title: ['Know when a rule runs.', 'Know exactly what it changes.'],
    description: 'The wiki covers both modes, every public key, event timing, permissions, Silk Touch, reload recovery and production validation.',
    cards: [
      { icon: 'layers', title: 'Behavior overview', href: '#/docs/overview', text: 'Replacement, extra drops, default rules, event scope and intentional exclusions.' },
      { icon: 'code', title: 'Paper configuration', href: '#/docs/paper/config-yml', text: 'Global settings, the complete dynamic rule schema and every player-facing message.' }
    ]
  },

  faq: {
    id: 'faq',
    number: '03 /',
    eyebrow: 'Before you edit rules',
    title: 'The exact boundaries.',
    description: 'Answers based on the current 2026.1.1 source and bundled defaults.',
    introLink: { label: 'Read the full FAQ', href: '#/docs/getting-started/faq' },
    items: [
      { question: 'Does it need Vault, WorldGuard or a database?', answer: 'No. CoreExtractionX has no hard dependency beyond Paper. Protection compatibility comes from ignoring events that were cancelled before its handler runs.', link: { label: 'Current scope', href: '#/docs/overview/current-state' } },
      { question: 'What does REPLACEMENT preserve?', answer: 'It calculates the original block’s natural drops with the current tool and player, then can respawn the XP captured from the break event. It does not add a separate correct-tool check.', link: { label: 'Replacement mode', href: '#/docs/overview/extraction-modes~replacement-mode' } },
      { question: 'What is the difference between MATCH_DROPS and MATCH_QUANTITY?', answer: 'MATCH_DROPS uses the initial generated quantity captured at LOWEST. MATCH_QUANTITY uses the current event quantity when CoreExtractionX handles it at HIGHEST.', link: { label: 'Amount schema', href: '#/docs/paper/ores-yml~drop-amount-schema' } },
      { question: 'What happens without permission or with Silk Touch?', answer: 'Each policy resolves a per-rule override where available, then a global setting. VANILLA leaves the break alone; DENY cancels it and can send a configured message.', link: { label: 'Fallback policy', href: '#/docs/paper/config-yml~permission-and-silk-touch' } },
      { question: 'Can a broken config be reloaded?', answer: 'Yes. Fatal global enum errors safe-disable extraction but leave /coreextractionx reload and /cex reload available. Invalid enabled block rules are skipped individually.', link: { label: 'Reload and recovery', href: '#/docs/getting-started/reload-and-restart' } }
    ]
  },

  finalCta: {
    title: ['Choose the source block.', 'Make the outcome explicit.'],
    description: 'Download the current build, generate the defaults and validate your rules on a staging world.',
    actions: [
      { label: 'Download on Modrinth', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Read the setup guide', href: '#/docs/getting-started/installation' }
    ]
  },

  footer: {
    caption: 'Configured mining behavior, predictable drops.',
    nav: [
      { label: 'Overview', href: '#/docs/overview' },
      { label: 'Setup', href: '#/docs/getting-started/installation' },
      { label: 'Configuration', href: '#/docs/paper/config-yml' },
      { label: 'Issues', linkKey: 'issues', external: true },
      { label: 'Releases', href: '#/releases' },
      { label: 'Modrinth', linkKey: 'modrinth', external: true }
    ],
    copyright: '© 2026 CoreExtractionX · A CoreX plugin by IceWolf23X.',
    scopeLink: { label: 'Documentation scope', href: '#/docs/reference/source-notes' }
  }
};
