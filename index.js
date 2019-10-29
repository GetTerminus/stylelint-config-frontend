module.exports = {
  'plugins': [
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
    // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
    'stylelint-declaration-block-no-ignored-properties',
    // https://github.com/AndyOGo/stylelint-declaration-strict-value
    'stylelint-declaration-strict-value',
    // https://github.com/ssivanatarajan/stylelint-selector-no-empty
    'stylelint-selector-no-empty',
    // https://github.com/kristerkari/stylelint-scss
    'stylelint-scss',
    // https://github.com/ierhyna/stylelint-no-indistinguishable-colors
    'stylelint-no-indistinguishable-colors',
  ],
  'rules': {
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [
      'always',
      {
        // Needed to avoid conflict with `at-if-closing-brace-newline-after`
        'ignoreAtRules': [
          'if',
        ],
      },
    ],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-required',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric',
    /*
     * TODO: Turn rule back on once the merged fix is released:
     * https://github.com/stylelint/stylelint/pull/4046
     *'function-calc-no-invalid': true,
     */
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-whitespace-after': 'always',
    'indentation': 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'linebreaks': 'unix',
    'max-empty-lines': 4,
    'media-feature-colon-space-after': 'always',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-space-after': 'always',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': [
      true,
      {
        'ignore': [
          'empty-lines',
        ],
      },
    ],
    'no-extra-semicolons': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-newline-after': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        'ignorePseudoClasses': [
          'horizontal',
          'vertical',
        ],
      },
    ],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        'ignorePseudoElements': [
          'ng-deep',
        ],
      },
    ],
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-max-empty-lines': 0,

    // Plugin rules
    'order/properties-alphabetical-order': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/stylelint-no-indistinguishable-colors': true,
    'plugin/stylelint-selector-no-empty': true,
    'scale-unlimited/declaration-strict-value': [
      [
        'box-shadow',
        '/^((.+-)?(color))$/',
        'cursor',
        '/font/',
        '/^(margin|padding)(-top|-left|-bottom|-right)?/',
        'z-index',
      ],
      {
        'disableFix': true,
        'ignoreFunctions': true,
        'ignoreKeywords': {
          '': [
            'auto',
            'currentColor',
            'inherit',
            'none',
          ],
          '/^((.+-)?(color))$/': [
            'currentColor',
            'inherit',
            'transparent',
          ],
          '/^(margin|padding)(-top|-left|-bottom|-right)?/': [
            '0',
            'auto',
            'none',
            'unset',
          ],
          'z-index': [
            -1,
            1,
            'auto',
          ],
        },
      },
    ],
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        'ignoreInsideAtRules': [
          'if',
          'for',
        ],
        'ignoreInside': [
          'at-rule',
          'nested-at-rule',
        ],
      },
    ],
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
