import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreetings } from '../store/configureStore';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const greetings = useSelector((state) => state.greetings);

  return (
    <ul>
      {greetings.map((greeting) => (
        <li key={greeting.id}>{greeting.msg}</li>
      ))}
    </ul>
  );
}

export default Greeting;
