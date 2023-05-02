import { authentication } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if(cancelled) return;
    }

    const createUser = async (data) => {
      checkIfIsCancelled();
      setLoading(true)
      setError(null)
      try {
        const user = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
        await updateProfile(user, {
            displayName: data.displayName
        })

        setLoading(false)
        return user

      } catch (error) {
        console.log(error.message)
        console.log(typeof error.message)

        let systemErrorMessage
        if (error.message.includes("Password")) {
            systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres!"
        } else if (error.message.includes("email-already")) {
            systemErrorMessage = "Este e-mail já está cadastrado no site!"
        } else {
            systemErrorMessage = "Ocorreu um erro inesperado! Tente novamente mais tarde."
        }
        setError(systemErrorMessage)
      }
    }

    useEffect(() => {
      return () => setCancelled(true);
    }, [])

    return(
        auth,
        loading,
        error,
        createUser
    )
}
