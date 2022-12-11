import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { auth, signInWithEmailAndPassword } from '../../../firebase/config';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('E-mail adresiniz geçerli formatta olmalıdır.')
    .required('Lütfen e-mail adresinizi giriniz'),
  password: yup
    .string()
    .min(8, 'Şifreniz en az 8 karakter olmalıdır.')
    .required('Lütfen şifrenizi giriniz.')
});

const Login = () => {
  const userLogin = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      userLogin(values.email, values.password);
      formik.resetForm();
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          size="small"
          variant="standard"
          margin="dense"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Şifre"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          size="small"
          variant="standard"
          margin="dense"
        />

        <Button type="submit" color="primary" variant="contained" fullWidth sx={{ my: 4 }}>
          Giriş Yap
        </Button>
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Privacy_policy"
          rel="noreferrer"
          style={{ color: 'black', margin: '10px auto' }}>
          Şifremi Unuttum`
        </a>
      </form>
    </div>
  );
};

export default Login;
