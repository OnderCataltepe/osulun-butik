import { useParams } from 'react-router-dom';
import { navData } from '../../navigateData';
import PageLayout from '../../layouts/PageLayout';
import MultiWrapper from '../../layouts/MultiWrapper';
import { useEffect } from 'react';

const Category = () => {
  const { multiId } = useParams();
  const products = navData.find((product) => product.path === multiId);

  if (!products) {
    return null;
  }
  return (
    <PageLayout image={products.bgImg} color="white" title={products.title}>
      <MultiWrapper products={products} />
    </PageLayout>
  );
};

export default Category;
