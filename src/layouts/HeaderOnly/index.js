import Header from "~/layouts/components/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <h2>Header Only</h2>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
