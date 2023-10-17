import Button from "../Button";

interface FormProps{
  setEmail: (args:string) => void
  validEmail: (arg: React.FormEvent<HTMLFormElement>) => void
  error: string
}

export default function Form({setEmail, validEmail, error}:FormProps) {



  return (
    <form action="#"onSubmit={e => validEmail(e)}>
      <label htmlFor="email">
        <div className="head-input">
          <p>Email address</p>
          {error && <p className='error'>{error}</p>}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
          onChange={e=> setEmail(e.currentTarget.value)}
          className={error ? 'input-error' : ''}
          />
      </label>
      <Button text={'Subscribe to monthly newsletter'}/>
    </form>
  )
}
