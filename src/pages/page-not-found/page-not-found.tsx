import SEO from '../../components/SEO';

type PageNotFoundScreenProps = {
  pageTitle: string;
}

export default function PageNotFound({pageTitle}: PageNotFoundScreenProps) {
  const notFoundStyle = {
    margin: '40px auto',
    maxWidth: '1600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px'
  };

  return (
    <>
      <SEO pageTitle={pageTitle} />
      <h1 style={notFoundStyle}>404 Not Found</h1>
    </>
  );
}
