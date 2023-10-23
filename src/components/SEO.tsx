import { Helmet } from 'react-helmet-async';

export default function SEO (props: {pageTitle: string}) {
  return (
    <Helmet>
      <title>{props.pageTitle}</title>
    </Helmet>
  );
}
