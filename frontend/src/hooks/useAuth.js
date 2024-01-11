import { useState, useEffect } from 'react';

function useAuth() {
    const [authInfo, setAuthInfo] = useState({
        isAuthenticated: false,
        userRole: null,
    });

    useEffect(() => {
        // Token aus dem Local Storage holen
        const token = localStorage.getItem('token');
        // Optional: Token validieren oder dekodieren, um Benutzerrolle zu extrahieren
        // ...

        if (token) {
            // Hier könntest du die Benutzerrolle aus dem Token extrahieren
            // Zum Beispiel angenommen, du hast die Rolle im Token gespeichert:
            // const userRole = extrahiereRollesAusToken(token);

            setAuthInfo({
                isAuthenticated: true,
                userRole: 'Benutzerrolle', // Setze die tatsächliche Rolle hier
            });
        }
    }, []);

    return authInfo;
}
