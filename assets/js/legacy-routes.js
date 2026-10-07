/* Preserve the previous CoreExtractionX page and section bookmarks in the routed wiki. */
(function (root) {
  'use strict';
  const routes = {
    'features.html': {
      route: '#/docs/overview/features',
      anchors: {
        'core-design': '#/docs/overview/features~core-design',
        'replacement': '#/docs/overview/extraction-modes~replacement-mode',
        'drop': '#/docs/overview/extraction-modes~drop-mode',
        'rules': '#/docs/overview/features~rules',
        'permissions': '#/docs/overview/features~permissions',
        'silk-touch': '#/docs/overview/features~silk-touch',
        'drops': '#/docs/overview/features~drops',
        'scope': '#/docs/overview/features~scope'
      }
    },
    'installation.html': {
      route: '#/docs/getting-started/installation',
      anchors: {
        'requirements': '#/docs/getting-started/installation~requirements',
        'download': '#/docs/getting-started/installation~download',
        'install': '#/docs/getting-started/installation~install',
        'generated-files': '#/docs/getting-started/installation~generated-files',
        'reload': '#/docs/getting-started/reload-and-restart',
        'first-test': '#/docs/getting-started/installation~first-test',
        'validation': '#/docs/reference/production-checklist'
      }
    },
    'configuration.html': {
      route: '#/docs/instructions',
      anchors: {
        'before-you-configure': '#/docs/getting-started/installation',
        'first-setup-flow': '#/docs/getting-started/installation~install',
        'which-file-to-edit': '#/docs/overview/introduction~start-here',
        'file-layout': '#/docs/getting-started/installation~generated-files',
        'reload-vs-restart': '#/docs/getting-started/reload-and-restart',
        'runtime-model': '#/docs/overview/extraction-modes',
        'common-starter-changes': '#/docs/paper/ores-yml~safe-custom-rule',
        'config-yml': '#/docs/paper/config-yml',
        'ores-yml': '#/docs/paper/ores-yml',
        'messages-yml': '#/docs/paper/messages-yml',
        'permissions': '#/docs/reference/commands-and-permissions~permissions',
        'troubleshooting-quick-reference': '#/docs/reference/troubleshooting',
        'production-validation-checklist': '#/docs/reference/production-checklist'
      }
    },
    'docs.html': { route: '#/docs/instructions', anchors: null },
    'faq.html': { route: '#/docs/getting-started/faq', anchors: null },
    'support-policy.html': {
      route: '#/docs/reference/support-policy',
      anchors: {
        'release-channels': '#/docs/reference/support-policy~release-channels',
        'supporter-preview-builds': '#/docs/reference/support-policy~supporter-preview-builds',
        'critical-fix-policy': '#/docs/reference/support-policy~critical-fix-policy',
        'paid-memberships': '#/docs/reference/support-policy~paid-memberships',
        'discord-authentication': '#/docs/reference/support-policy~discord-authentication',
        'disclaimer': '#/docs/reference/support-policy~disclaimer'
      }
    }
  };

  /** Select the maintained wiki route for one legacy page bookmark. */
  function target(page, hash) {
    const entry = routes[page];
    if (!entry) return 'index.html#/docs/getting-started/installation';
    let anchor = '';
    try { anchor = decodeURIComponent(String(hash || '').replace(/^#/, '')); } catch (_) { /* Invalid bookmarks select the page root. */ }
    const route = entry.anchors ? (entry.anchors[anchor] || entry.route) : entry.route + (anchor ? '~' + encodeURIComponent(anchor) : '');
    return 'index.html' + route;
  }

  if (typeof module === 'object' && module.exports) module.exports = { target, routes };
  else if (root.document) root.location.replace(target(root.document.body.dataset.legacyPage, root.location.hash));
}(typeof window !== 'undefined' ? window : globalThis));
