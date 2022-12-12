import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { auth, setDoc, createUserWithEmailAndPassword, doc, db } from '../../../firebase/config';
import { useState } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Loading from '../../../pages/loading/Loading';
import InfoModal from '../../modals/InfoModal';
const validationSchema = yup.object({
  name: yup.string().required('Lütfen adınızı yazınız.'),
  surname: yup.string().required('Lütfen soyadınızı yazınız'),
  email: yup
    .string()
    .email('E-mail adresiniz geçerli formatta olmalıdır.')
    .required('Lütfen e-mail adresinizi giriniz'),
  password: yup
    .string()
    .min(8, 'Şifreniz en az 8 karakter olmalıdır.')
    .required('Lütfen şifrenizi giriniz.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Girilen şifreler birbirinden farklı.')
    .required('Lütfen şifrenizi tekrar giriniz.'),
  acceptTerms: yup.bool().oneOf([true], 'Üyelik sözleşmesini kabul etmelisiniz')
});

interface SProps {
  closeModal: () => void;
}
const SignUp = ({ closeModal }: SProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const userSignUp = async (name: string, surname: string, email: string, password: string) => {
    setLoading(true);
    setError(false);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        surname,
        name,
        role: 'user',
        authProvider: 'local',
        email,
        basket: []
      });
      setOpenInfo(true);
    } catch (err) {
      setError(true);
      setOpenInfo(true);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      acceptTerms: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      userSignUp(values.name, values.surname, values.email, values.password);
      formik.resetForm();
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }}>
        <TextField
          fullWidth
          id="name-up"
          name="name"
          label="Adınız"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          size="small"
          variant="standard"
          margin="dense"
        />
        <TextField
          fullWidth
          id="surname"
          name="surname"
          label="Soyadınız"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
          size="small"
          variant="standard"
          margin="dense"
        />
        <TextField
          fullWidth
          id="email-up"
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
        <TextField
          fullWidth
          id="passwordConfirm"
          name="passwordConfirm"
          label="Şifre(tekrar)"
          type="password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
          helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
          size="small"
          variant="standard"
          margin="dense"
        />

        <FormControl error={formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)}>
          <FormControlLabel
            style={{ pointerEvents: 'none' }}
            label={
              <p style={{ fontSize: '10px' }}>
                {' '}
                <a
                  style={{ color: 'black', pointerEvents: 'auto' }}
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Privacy_policy"
                  rel="noreferrer">
                  Üyelik Sözleşmesini
                </a>{' '}
                okudum, kabul ediyorum.
              </p>
            }
            control={
              <Checkbox
                id="acceptTerms"
                name="acceptTerms"
                onChange={formik.handleChange}
                sx={{ pointerEvents: 'auto' }}
                checked={formik.values.acceptTerms}
              />
            }
          />
          <FormHelperText error={formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)}>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && formik.errors.acceptTerms}
          </FormHelperText>
        </FormControl>

        <Button type="submit" color="primary" variant="contained" fullWidth sx={{ my: 4 }}>
          Üye Ol
        </Button>
      </form>
      {loading && <Loading />}
      {
        <InfoModal
          open={openInfo}
          color={error ? 'red' : 'green'}
          text={
            error ? 'Bu email adresine kayıtlı kullanıcı bulunmaktadır' : 'Kayıt işlemi başarılı.'
          }
          closeModal={closeModal}
        />
      }
    </div>
  );
};

export default SignUp;
