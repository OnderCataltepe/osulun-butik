// Mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// Firebase
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../../firebase/config';
// Formik and yup
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
  name: yup.string().required('ürün ismini girin'),
  description: yup.string().required('ürün açıklaması girin'),
  price: yup.number().required('Ürün fiyatı girin'),
  amount: yup.number().required('Adet girin')
});
// React hooks
import { FormEvent, useState } from 'react';
// Constants
const categories = [
  {
    value: ['geçit', 'köprü'],
    label: 'köprü'
  },
  {
    value: ['geçit', 'kapı'],
    label: 'kapı'
  },
  {
    value: ['ulaşım', 'ray'],
    label: 'raylı sistem'
  },
  {
    value: ['ulaşım', 'deniz'],
    label: 'deniz yolu'
  },
  {
    value: ['ulaşım', 'kara'],
    label: 'kara yolu'
  },
  {
    value: ['ulaşım', 'kule'],
    label: 'kule'
  },
  {
    value: ['aksesuar', 'saat'],
    label: 'saat'
  },
  {
    value: ['aksesuar', 'heykel'],
    label: 'heykel'
  },
  {
    value: ['sihirli'],
    label: 'Sihirli Nesne'
  }
];

const AddProduct = (): JSX.Element => {
  const [progresspercent, setProgresspercent] = useState<number>(0);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      amount: 1,
      category: categories[0].label,
      images: ['', '', '', '']
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      const ref = collection(db, 'products');
      await addDoc(ref, values);
      formik.setFieldValue('images', ['', '', '', '']);
    }
  });

  // upload image to firebase storage then get the image url and set into values.
  const imgUpload = (event: FormEvent<HTMLInputElement>, index: number) => {
    if (event.currentTarget.files) {
      const file = event.currentTarget.files[0];
      if (!file) return;
      const storageRef = ref(storage, `sulunImages/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            formik.setFieldValue(`images[${index}]`, downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Ürünün adı"
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
          id="descrption"
          name="description"
          label="ürün açıklaması"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          size="small"
          variant="standard"
          margin="dense"
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          id="price"
          name="price"
          label="Fiyatı"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          size="small"
          variant="standard"
          margin="dense"
        />
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Adet"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputProps: {
              max: 10,
              min: 0
            }
          }}
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
          size="small"
          variant="standard"
          margin="dense"
        />
        <TextField
          fullWidth
          id="category"
          name="category"
          select
          label="Kategori"
          value={formik.values.category}
          onChange={formik.handleChange}
          margin="dense">
          {categories.map((option) => (
            <MenuItem key={option.label} style={{ pointerEvents: 'auto' }} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <input
          id="images-0"
          name="images[0]"
          type="file"
          onChange={(event) => imgUpload(event, 0)}
        />
        <input
          id="images-1"
          name="images[1]"
          type="file"
          onChange={(event) => imgUpload(event, 1)}
        />
        <input
          id="images-2"
          name="images[2]"
          type="file"
          onChange={(event) => imgUpload(event, 2)}
        />
        <input
          id="images-3"
          name="images[3]"
          type="file"
          onChange={(event) => imgUpload(event, 3)}
        />

        <Button type="submit" color="primary" variant="contained" fullWidth sx={{ my: 4 }}>
          Ekle
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
