import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// In a real app, you'd import from 'firebase/auth'
// import { 
//   getAuth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   onAuthStateChanged, 
//   signOut 
// } from 'firebase/auth';
// import { app } from '../firebase/firebase.config.js'; // Your firebase config file

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- MOCKED AUTH FUNCTIONS ---
  // Replace these with your real Firebase functions

  const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'artist@example.com' && password === 'password') {
          const mockUser = { 
            email: 'artist@example.com', 
            displayName: 'Test Artist', 
            photoURL: 'https://placehold.co/100x100/222/fff?text=A' 
          };
          setUser(mockUser);
          resolve(mockUser);
        } else {
          reject(new Error('Invalid credentials. (Hint: artist@example.com / password)'));
        }
      }, 500);
    });
  };

  const mockRegister = (name, email, photoURL, password) => {
     return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { 
          email, 
          displayName: name, 
          photoURL: photoURL || 'https://placehold.co/100x100/222/fff?text=?' 
        };
        setUser(mockUser);
        resolve(mockUser);
      }, 500);
    });
  };

  const mockGoogleLogin = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { 
          email: 'google.user@example.com', 
          displayName: 'Google User', 
          photoURL: 'https://placehold.co/100x100/222/fff?text=G' 
        };
        setUser(mockUser);
        resolve(mockUser);
      }, 500);
    });
  };

  const mockLogout = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(null);
        resolve();
      }, 200);
    });
  };
  
  // --- END OF MOCKED FUNCTIONS ---

  const login = async (email, password) => {
    setLoading(true);
    // return signInWithEmailAndPassword(auth, email, password); // REAL
    return mockLogin(email, password); // MOCKED
  };

  const register = async (name, email, photoURL, password) => {
    setLoading(true);
    // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // await updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
    // return userCredential; // REAL
    return mockRegister(name, email, photoURL, password); // MOCKED
  };

  const googleLogin = () => {
    setLoading(true);
    // return signInWithPopup(auth, googleProvider); // REAL
    return mockGoogleLogin(); // MOCKED
  };

  const logout = () => {
    setLoading(true);
    // return signOut(auth); // REAL
    return mockLogout(); // MOCKED
  };

  // Observe auth state changes (MOCKED)
  useEffect(() => {
    // This simulates Firebase's onAuthStateChanged
    setLoading(true);
    setTimeout(() => {
      // To test private routes, you can set a default user here:
      // setUser({ email: 'artist@example.com', displayName: 'Test Artist', photoURL: 'https://placehold.co/100x100/222/fff?text=A' });
      setLoading(false);
    }, 1000);

    // --- REAL onAuthStateChanged ---
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    //   setLoading(false);
    // });
    // return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    login,
    register,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;