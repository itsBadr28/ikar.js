import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage,
} from 'vee-validate';
import {
  required,
  email,
  min,
  max,
  max_value as maxVal,
  min_value as minVal,
  digits,
  alpha_spaces as alphaSpaces,
  confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('confirmed', confirmed);
    defineRule('maxVal', maxVal);
    defineRule('minVal', minVal);
    defineRule('digits', digits);
  },
};
