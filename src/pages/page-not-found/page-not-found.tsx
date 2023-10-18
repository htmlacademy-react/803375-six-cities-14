function PageNotFound() {
  const notFoundStyle = {
    margin: '40px auto',
    maxWidth: '1600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px'
  };

  return (
    <h1 style={notFoundStyle}>404 Not Found</h1>
  );
}

export default PageNotFound;
