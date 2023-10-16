import ImageMobile from '../../assets/images/illustration-sign-up-mobile.svg';
import ImageDesktop from '../../assets/images/illustration-sign-up-desktop.svg';

export default function Banner() {
  return (
    <>
      <source srcSet={ImageDesktop} media="(min-width: 1024px)"/>
      <img src={ImageMobile} alt="form banner"/>
    </>
  )
}
