import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

function useContent(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)

    useEffect(_ => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContent = snapshot.docs.map(item => {
                    return ({
                        ...item.data(),
                        docId: item.id
                    })
                })

                setContent(allContent)
            })
            .catch(error => {
                console.log(error.message)
            })       
    }, [])

    return { [target]: content }
}

export default useContent