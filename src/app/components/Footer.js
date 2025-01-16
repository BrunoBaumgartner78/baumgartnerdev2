const Footer = () => {
    return (
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Baumgartner Development. Alle Rechte vorbehalten.</p>
        <div style={styles.links}>
          <a href="/privacy">Datenschutz</a> | <a href="/terms">AGB</a>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      marginTop: 'auto',
      padding: '1rem 2rem',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
    },
    links: {
      marginTop: '0.5rem',
    },
  };
  
  export default Footer;
  