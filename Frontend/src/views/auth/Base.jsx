
// Componente de cabeçalho
const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Bem-Vindo ao Meu Site</h1>
    </header>
  );
};

// Componente principal de conteúdo
const MainContent = () => {
  return (
    <main style={styles.main}>
      <p>Estamos felizes em tê-lo aqui. Explore nosso site para saber mais sobre nós.</p>
    </main>
  );
};

// Componente de rodapé
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
    </footer>
  );
};

// Componente da página de bem-vindo
const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

// Estilos inline
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  main: {
    margin: '20px 0',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    marginTop: '20px',
  },
};

export default WelcomePage;