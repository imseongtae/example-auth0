module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  syntax: "scss",
  rules: {
    "indentation": 2,
    'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,
    // 'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'no-descending-specificity': null,
    // 
    'declaration-block-trailing-semicolon': null,    
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': 'never',
        
    // 'scss/at-rule-no-unknown': null
  },
};
