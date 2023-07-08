import * as Yup from 'yup'

export const bookValidationSchema = Yup.object().shape({
  author: Yup.string().required('The field is requiered'),
  title: Yup.string(),
  titlePl: Yup.string(),
  rating: Yup.string().required(),
  language: Yup.mixed.oneOf([]).required('The language field is required'),
  status: Yup.mixed
    .oneOf(['toRead', 'inProgress', 'done'])
    .required('The status of reading of the book is required'),
  isAdaptation: Yup.boolean().required(
    'The information about the adaptation is required'
  ),
  isSaga: Yup.boolean().required(
    'The information about book being part of a saga is requied'
  ),
  dateOfBeingRead: Yup.date(),
  genre: Yup.array().of(
    string().oneOf(['classic', 'fantasy', 'history', 'alliens'])
  ),
})

// validationSchema.validate({ email: newEmail }).catch((error) => {
//     setError(error.message);
//   })
