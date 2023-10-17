import{useState} from 'react';
import ContentContainer from "../ContentContainer";
import ImageContainer from "../ImageContainer";
import Thanks from '../../components/Thanks';

export default function Main() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sendForm, setSendForm] = useState(false)

  const validEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validemailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if(!email || !validemailRegex.test(email)){
      setError('Valid email required')
      return;
    }
    setError('');
    setSendForm(true)
    // e.currentTarget.submit()
  }
  console.log(sendForm)
  return (
    <main role='main'>
      {
        !sendForm ?
        <>
          <ImageContainer />
          <ContentContainer setEmail={setEmail} validEmail={validEmail} error={error}/>
        </>
        :
        <Thanks />
      }
    </main>
  )
}

