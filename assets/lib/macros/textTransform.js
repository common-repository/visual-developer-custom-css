VisualDeveloper.Macro.TextTransform = {

  alias            : "TextTransform",
  name             : "Text Format",
  targetOption     : 'TextTransform',
  cssModel         : "single-inline",
  format  : {
    value : {
      fieldType       : 'select',
      fieldValidation : false,
      fieldOptions    : {
        ''            : 'x',
        'capitalize'  : 'Uppercase First',
        'uppercase'   : 'Uppercase',
        'lowercase'   : 'Lowercase'
      }
    }
  },

  optionImages   : {},
  composedFormat : false,

  getMacroFormat      : function() {
    if(this.cssModel == 'single' || this.cssModel == 'single-inline')
      return this.format;

    if(this.composedFormat != false)
      return this.composedFormat;

    var objectInstance  = this;

    this.composedFormat = JSON.parse(JSON.stringify(this.format));

    jQuery.each(this.composedFormat.value.fieldOptions, function(fieldKey, fieldValue) {
      objectInstance.composedFormat.value.fieldOptions[fieldKey] = objectInstance.optionImages[fieldValue];
    });

    return this.composedFormat;
  },

  getMacroValueByOptionFormat : function(optionFormat) {
    return optionFormat.value;
  },

  composeOptionFormat : function(macroFormat) {
    return {
      value : macroFormat.value
    };
  }

};
