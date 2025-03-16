import pdfImg from '../../assets/images/pdf.png';

function ProductDocs() {
  const documents = [
    { title: 'Control All Major Termite Species', icon: pdfImg, url: '#' },
    { title: 'Control All Major Termite Species', icon: pdfImg, url: '#' },
    { title: 'Control All Major Termite Species', icon: pdfImg, url: '#' },
    { title: 'Control All Major Termite Species', icon: pdfImg, url: '#' }
  ];

  return (
    <section className="product-docs">
      <h2>DOCUMENTOS DEL PRODUCTO</h2>
      
      <div className="docs-list">
        {documents.map((doc, index) => (
          <a href={doc.url} className="doc-item" key={index}>
            <span>{doc.title}</span>
            <img src={doc.icon} alt="PDF" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProductDocs;