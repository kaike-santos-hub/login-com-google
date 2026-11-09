import { useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  async function handleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <h1>Login com Google</h1>

      {user ? (
        <div className="perfil">
          <img src={user.photoURL} alt="Foto do usuário" width={80} style={{ borderRadius: '50%' }} />
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Entrar com Google</button>
      )}
    </div>
  );
}

export default App;