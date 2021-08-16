import * as Yup from 'yup';
import 'yup-phone';

export const schema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required(),
  tel: Yup.string().phone('', false).required(),
});
