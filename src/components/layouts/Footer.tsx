
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
function Footer() {
  return (
    <footer id='Footer' className="w-100 bg-magenDark text-magenLight py-4 mt-5">
        <Container className='d-flex justify-content-around'>
            <a href="https://github.com/Sanchezguidorl?tab=repositories" target='blank' className='anchor-footer d-flex flex-column align-items-center text-decoration-none text-uppercase text-cyanLight'>
            <p className='mb-1 social-media'>Github</p>
            <FontAwesomeIcon className='social-media-icon' icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/cygnus.agency/" target='blank' className='anchor-footer d-flex flex-column align-items-center text-decoration-none text-uppercase text-cyanLight'>
            <p className='mb-1 social-media'>Instagram</p>
            <FontAwesomeIcon className='social-media-icon' icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/guido-abel-sanchez/" target='blank' className='anchor-footer d-flex flex-column align-items-center text-decoration-none text-uppercase text-cyanLight'>
            <p className='mb-1 social-media'>LinkedIn</p>
            <FontAwesomeIcon className='social-media-icon' icon={faLinkedinIn} />
            </a>
        </Container>
    </footer>
  )

}

export default Footer;
