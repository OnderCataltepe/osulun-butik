import { useParams } from 'react-router-dom';
import { navData } from '../../navigateData';
import PageLayout from '../../layouts/PageLayout';
import MultiWrapper from '../../layouts/MultiWrapper';
import ErrorPage from '../error/ErrorPage';
const Category = (): JSX.Element => {
  const { multiId } = useParams();
  const products = navData.find((product) => product.path === multiId);

  if (!products) {
    return <ErrorPage />;
  }
  return (
    <PageLayout image={products.bgImg} color="white" title={products.title}>
      <MultiWrapper products={products} />
    </PageLayout>
  );
};

export default Category;
