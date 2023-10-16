import{useState} from 'react';
import ContentContainer from "../ContentContainer";
import ImageContainer from "../ImageContainer";

export default function Main() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validemailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if(!email || !validemailRegex.test(email)){
      setError('Valid email required')
      return;
    }
    setError('');
    e.currentTarget.submit()
  }
  return (
    <main role='main'>
      <ImageContainer />
      <ContentContainer setEmail={setEmail} validEmail={validEmail} error={error}/>
    </main>
  )
}

