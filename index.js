module.exports = {
  'extends': 'airbnb',
  'ecmaFeatures': {
    'experimentalObjectRestSpread': true,
  },
  rules: {
    'array-bracket-spacing': [ 2, 'always', {
      'objectsInArrays': false,
      'arraysInArrays': false,
    }],
    'camelcase': 2,
    'computed-property-spacing': [ 2, 'always' ],
    'new-cap': 0,
    'no-undef': 0,
    'object-curly-spacing': [ 2, 'always', {
      'objectsInObjects': false,
      'arraysInObjects': false,
    }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-sort-prop-types': 2,
    'react/no-set-state': 2,
    'space-before-function-paren': [ 2, {
      'anonymous': 'always',
      'named': 'always',
    }],
    'space-in-parens': [ 2, 'always', {
      'exceptions': [ 'empty', '()', '{}', '[]' ],
    }],
    'space-unary-ops': [ 2, {
      'words': true,
      'nonwords': false,
    }],
  },
};
