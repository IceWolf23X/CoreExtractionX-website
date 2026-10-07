/* CoreExtractionX documentation catalog; article prose lives under assets/content/docs/. */
window.COREX_DOCS = {
  "schemaVersion": 2,
  "meta": {
    "product": "CoreExtractionX",
    "articleCount": 16,
    "editingModel": "Article HTML is maintained in assets/content/docs/. This file contains the catalog; tools/build-docs-bundle.mjs assembles the offline bodies.",
    "pluginVersion": "2026.1.1"
  },
  "navigation": {
    "scope": "reference/source-notes",
    "troubleshooting": "reference/troubleshooting"
  },
  "groups": [
    { "id": "overview", "label": "Feature overview", "icon": "layers" },
    { "id": "getting-started", "label": "Getting started", "icon": "compass" },
    { "id": "paper", "label": "Paper configuration", "icon": "server" },
    { "id": "reference", "label": "Reference & operations", "icon": "book" }
  ],
  "hubs": {
    "instructionStarts": ["getting-started/installation", "getting-started/reload-and-restart"],
    "searchSuggestions": ["overview/extraction-modes", "paper/ores-yml", "reference/safety-and-compatibility"],
    "overviewCategories": [
      { "id": "start-here", "title": "Start here", "articles": ["introduction", "current-state"] },
      { "id": "extraction", "title": "Extraction behavior", "articles": ["features", "extraction-modes"] }
    ]
  },
  "articles": [
    { "id": "overview/introduction", "group": "overview", "title": "Introduction", "description": "What CoreExtractionX changes and where to begin.", "icon": "file", "bodyFile": "assets/content/docs/overview/introduction.html" },
    { "id": "overview/current-state", "group": "overview", "title": "Current state", "description": "Verified platform, dependency and release scope for 2026.1.1.", "icon": "file", "bodyFile": "assets/content/docs/overview/current-state.html" },
    { "id": "overview/features", "group": "overview", "title": "Feature overview", "description": "Dynamic rules, filters, fallbacks and deliberate exclusions.", "icon": "file", "bodyFile": "assets/content/docs/overview/features.html" },
    { "id": "overview/extraction-modes", "group": "overview", "title": "Extraction modes", "description": "Exact REPLACEMENT and DROP event behavior.", "icon": "file", "bodyFile": "assets/content/docs/overview/extraction-modes.html" },

    { "id": "getting-started/installation", "group": "getting-started", "title": "Installation", "description": "Requirements, first boot, generated files and first tests.", "icon": "compass", "bodyFile": "assets/content/docs/getting-started/installation.html" },
    { "id": "getting-started/reload-and-restart", "group": "getting-started", "title": "Reload, restart and recovery", "description": "Normal reloads and recovery from safe-disabled configuration.", "icon": "compass", "bodyFile": "assets/content/docs/getting-started/reload-and-restart.html" },
    { "id": "getting-started/faq", "group": "getting-started", "title": "Frequently asked questions", "description": "Practical answers about drops, tools, permissions and compatibility.", "icon": "book", "bodyFile": "assets/content/docs/getting-started/faq.html" },

    { "id": "paper/config-yml", "group": "paper", "title": "config.yml", "description": "Global enablement, filters, fallbacks, spawn position, physics and XP.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/config.yml" }, "bodyFile": "assets/content/docs/paper/config-yml.html" },
    { "id": "paper/ores-yml", "group": "paper", "title": "ores.yml", "description": "The complete dynamic block-rule and DROP amount schema.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/ores.yml" }, "bodyFile": "assets/content/docs/paper/ores-yml.html" },
    { "id": "paper/messages-yml", "group": "paper", "title": "messages.yml", "description": "All player and command messages plus placeholders.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/messages.yml" }, "bodyFile": "assets/content/docs/paper/messages-yml.html" },

    { "id": "reference/commands-and-permissions", "group": "reference", "title": "Commands and permissions", "description": "Reload aliases, help and runtime permission resolution.", "icon": "book", "bodyFile": "assets/content/docs/reference/commands-and-permissions.html" },
    { "id": "reference/safety-and-compatibility", "group": "reference", "title": "Safety and compatibility", "description": "Event ordering, protection plugins, pending drops and material validation.", "icon": "shield", "bodyFile": "assets/content/docs/reference/safety-and-compatibility.html" },
    { "id": "reference/troubleshooting", "group": "reference", "title": "Troubleshooting", "description": "Rule validation, safe-disabled state, drops and world filters.", "icon": "book", "bodyFile": "assets/content/docs/reference/troubleshooting.html" },
    { "id": "reference/production-checklist", "group": "reference", "title": "Production validation checklist", "description": "A complete pre-launch rule, tool, permission and protection exercise.", "icon": "book", "bodyFile": "assets/content/docs/reference/production-checklist.html" },
    { "id": "reference/support-policy", "group": "reference", "title": "Release and support policy", "description": "Public releases, previews, critical fixes and optional support.", "icon": "book", "bodyFile": "assets/content/docs/reference/support-policy.html" },
    { "id": "reference/source-notes", "group": "reference", "title": "Source notes and documentation scope", "description": "Evidence boundary, runtime enforcement and public links.", "icon": "book", "bodyFile": "assets/content/docs/reference/source-notes.html" }
  ]
};
