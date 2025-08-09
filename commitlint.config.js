export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'ci',
        'chore',
        'revert',
        'docs',
        'style',
        'refactor',
        'test',
        'perf',
        'build',
        'workflow',
      ],
    ],
  },
};
