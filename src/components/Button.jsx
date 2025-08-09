const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
  backgroundColor: "var(--orange)",
  color: "var(--very-dark-blue)",
  border: "none",
  cursor: "pointer",
  padding: "1.5rem 0rem",
  borderRadius: "1rem",
  flexGrow: "1",
  fontSize: "1.6rem",
  fontWeight: "700",
};

function Button({ children, className, ...props }) {
  return (
    <button style={styles} className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
