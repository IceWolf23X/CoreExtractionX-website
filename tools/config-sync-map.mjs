/** Public CoreExtractionX defaults allow-listed for website synchronization. */
export const SOURCE_REPOSITORY = 'IceWolf23X/CoreExtractionX-plugin';
export const SOURCE_REF = 'main';

export const CONFIG_FILES = [
  { id: 'paper/config.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/config.yml', target: 'synced-configs/paper/config.yml', article: 'paper/config-yml' },
  { id: 'paper/ores.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/ores.yml', target: 'synced-configs/paper/ores.yml', article: 'paper/ores-yml' },
  { id: 'paper/messages.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/messages.yml', target: 'synced-configs/paper/messages.yml', article: 'paper/messages-yml' }
];
