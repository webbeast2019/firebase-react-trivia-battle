import React, {useEffect} from 'react';
import {firestore, withAuth} from '../firebase.app';
import {User} from 'firebase';

interface IProps {
  user?: User | undefined;
  signOut: () => void;
  signInWithGoogle: () => void;
}

const Home: React.FC<IProps> = ({user, signOut, signInWithGoogle}) => {
  useEffect(() => {
    if (user) {
      if (user) {
        const quiz = firestore.collection('quizzes')
          .doc('geography1');
    
        const questions = quiz.collection('questions');
        quiz.get().then(doc => console.log(doc.data()));
    
        questions.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
          });
        })
      }
    }
  });
  
  return (
    <div>
      {
        (user)
          ? <p>
            Hello {user.displayName}
            <img src={user.photoURL as string} alt=""/>
            <button onClick={signOut}>Logout</button>
          </p>
          : <button onClick={signInWithGoogle}>Login with Google</button>
      }
    </div>
  );
};

export default withAuth(Home);
