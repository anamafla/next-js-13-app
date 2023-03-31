export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#fff", color: "purple" }}>
        The best of the best
      </marquee>
      {children}
    </div>
  );
}
