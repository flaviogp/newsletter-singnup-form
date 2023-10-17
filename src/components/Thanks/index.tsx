import IconSuccess from '../../assets/images/icon-success.svg'

import Button from "../Button";

export default function Thanks() {
  return (
    <div className="thanks-container">
      <div className="thanks-content">
        <img src={IconSuccess} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation emais has been set to <b>ash@lorecompany.com</b>.
          Please open in and click the button inside to confirm your
          subscription
        </p>
      </div>
      <Button text={'Dismiss message'}/>
    </div>
  )
}

