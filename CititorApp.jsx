import { useState } from 'react';
import { Home, Star, MessageCircle, User } from 'lucide-react';

export default function CititorApp() {
  const [page, setPage] = useState('home');

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F172A", color: "white", padding: "1rem", fontFamily: "sans-serif" }}>
      {page === 'home' && <HomePage />}
      {page === 'reviews' && <ReviewsPage />}
      {page === 'chat' && <ChatPage />}
      {page === 'profile' && <ProfilePage />}
      <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "#1E293B", borderTop: "1px solid #334155", display: "flex", justifyContent: "space-around", padding: "0.75rem 0" }}>
        <button onClick={() => setPage('home')} style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "0.75rem", color: "white" }}>
          <Home size={20} />
          Acasă
        </button>
        <button onClick={() => setPage('reviews')} style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "0.75rem", color: "white" }}>
          <Star size={20} />
          Recenzii
        </button>
        <button onClick={() => setPage('chat')} style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "0.75rem", color: "white" }}>
          <MessageCircle size={20} />
          Discuții
        </button>
        <button onClick={() => setPage('profile')} style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "0.75rem", color: "white" }}>
          <User size={20} />
          Profil
        </button>
      </nav>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Bine ai revenit</h1>
      <p style={{ fontSize: "0.875rem", color: "#94A3B8", marginBottom: "1rem" }}>Ai citit 6 cărți luna aceasta</p>
      <div style={{ backgroundColor: "#1E293B", padding: "1rem", borderRadius: "0.75rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "0.5rem" }}>Cărți citite</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ backgroundColor: "#0F172A", padding: "0.75rem", borderRadius: "0.75rem" }}>
            <p style={{ fontWeight: "500", fontSize: "0.875rem" }}>1984</p>
            <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>George Orwell</p>
            <p style={{ color: "#FBBF24" }}>★★★★★</p>
            <p style={{ fontSize: "0.75rem" }}>12 aprilie 2024</p>
          </div>
          <div style={{ backgroundColor: "#0F172A", padding: "0.75rem", borderRadius: "0.75rem" }}>
            <p style={{ fontWeight: "500", fontSize: "0.875rem" }}>Mândrie și prejudecată</p>
            <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Jane Austen</p>
            <p style={{ color: "#FBBF24" }}>★★★★★</p>
            <p style={{ fontSize: "0.75rem" }}>28 martie 2024</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1E293B", padding: "1rem", borderRadius: "0.75rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "0.5rem" }}>Recenzii</h2>
        <p style={{ fontSize: "0.875rem" }}>⭐️⭐️⭐️⭐️⭐️ O lectură plină de înțelegere și captivantă de la început până la sfârșit. O recomand cu drag!</p>
      </div>
      <div style={{ backgroundColor: "#1E293B", padding: "1rem", borderRadius: "0.75rem" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "0.5rem" }}>Temă</h2>
        <button style={{ backgroundColor: "#0F172A", color: "white", padding: "0.5rem 1rem", borderRadius: "0.375rem", border: "1px solid #334155" }}>🎨 Temă</button>
      </div>
    </div>
  );
}

function ReviewsPage() {
  return <div style={{ textAlign: "center", paddingTop: "2.5rem" }}>Recenzii în curând 📚</div>;
}

function ChatPage() {
  return <div style={{ textAlign: "center", paddingTop: "2.5rem" }}>Discuții în curând 💬</div>;
}

function ProfilePage() {
  return <div style={{ textAlign: "center", paddingTop: "2.5rem" }}>Setări de profil în curând 👤</div>;
}
