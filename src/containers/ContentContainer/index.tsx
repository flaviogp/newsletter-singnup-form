import Content from "../../components/Content";
import Form from "../../components/Form";

interface ContentContainerProps{
  setEmail: (args:string) => void
  validEmail: (arg: React.FormEvent<HTMLFormElement>) => void
  error: string
}

export default function ContentContainer({setEmail, validEmail, error}:ContentContainerProps) {
  return (
    <div className="content-container">
      <Content />
      <Form setEmail={setEmail} validEmail={validEmail} error={error}/>
    </div>
  )
}

