/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Handbook',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Basics',
          items: [
            'basics/what-is-a-statechart',
            'basics/options',
            'basics/inline-vs-named-options',
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          items: [
            'tools/visual-editor',
            'tools/ide-extensions',
            'tools/visualizer',
            'tools/inspector',
          ],
        },
        {
          type: 'category',
          label: 'Actions and context',
          items: [
            'actions/actions',
            'actions/context',
            'actions/built-in-actions',
          ],
        },
        {
          type: 'category',
          label: 'Transitions and choices',
          items: [
            'transitions-and-choices/guards',
            'transitions-and-choices/guarded-actions',
            'transitions-and-choices/always',
            'transitions-and-choices/after',
            'transitions-and-choices/internal-external',
            'transitions-and-choices/transition-descriptions',
          ],
        },
        {
          type: 'category',
          label: 'Running machines',
          items: [
            'running-machines/intro',
            'running-machines/react',
            'running-machines/node',
          ],
        },
        {
          type: 'category',
          label: 'Deep dive: states',
          items: [
            'states/hierarchical-states',
            'states/other-state-attributes',
            'states/advanced-transitions',
            'states/final-states',
            'states/parallel-states',
            'states/history-states',
            'states/in-state-guards',
          ],
        },
        {
          type: 'category',
          label: 'Model-based testing',
          items: [
            'model-based-testing/intro',
            'model-based-testing/when-to-use',
            'model-based-testing/quickstart',
            'model-based-testing/test-paths',
            'model-based-testing/assertions',
            'model-based-testing/event-cases',
            'model-based-testing/jest',
            'model-based-testing/vitest',
            'model-based-testing/cypress',
            'model-based-testing/playwright',
          ],
        },
        {
          type: 'category',
          label: 'Actors',
          items: [
            'actors/intro',
            'actors/promises',
            'actors/actions-vs-actors',
            'actors/callbacks',
            'actors/machines',
            'actors/observables',
            'actors/parent-child-communication',
            'actors/spawn',
          ],
        },
        {
          type: 'category',
          label: 'TypeScript',
          items: [
            'typescript/typegen',
            'typescript/type-helpers',
            'typescript/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          items: ['advanced/react-patterns', 'advanced/scxml'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/intro'],
    },
  ],
};

module.exports = sidebars;
