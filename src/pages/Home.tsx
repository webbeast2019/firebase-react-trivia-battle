import React from 'react';
import {withAuth} from '../firebase.app';
import {User} from 'firebase';

interface IProps {
  user?: User | undefined;
  signOut: () => void;
  signInWithGoogle: () => void;
}

const Home: React.FC<IProps> = ({user, signOut, signInWithGoogle}) => {
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
