// Formik and Yuo
import { useFormik } from 'formik';
import * as yup from 'yup';
// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('E-mail adresiniz geçerli formatta olmalıdır.')
    .required('Lütfen e-mail adresinizi giriniz'),
  acceptTerms: yup.bool().oneOf([true], 'Üyelik sözleşmesini kabul etmelisiniz')
});

const Subscribe = (): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const formik = useFormik({
    initialValues: {
      email: '',
      acceptTerms: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert('Tebrikler abone oldun!');
      formik.resetForm();
    }
  });

  return (
    <div style={{ textAlign: 'center', width: isMobil ? '90%' : '60%' }}>
      <Typography variant="h5">Haftalık Bülten</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Şimdi abone olun ve koleksiyonlardan doğrudan haber alın.
      </Typography>
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

        <FormControl
          sx={{ my: 3 }}
          error={formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)}>
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
                size="small"
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
        <Button type="submit" color="primary" variant="outlined" fullWidth>
          Abone Ol
        </Button>
      </form>
    </div>
  );
};

export default Subscribe;
