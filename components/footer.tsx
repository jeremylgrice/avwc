import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-surface-950 border-t border-surface-800" role="contentinfo">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-white">
            Made with ❤️ by Vet That Codes
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2" role="navigation" aria-label="Social media links">
            <a
              href="https://github.com/jeremylgrice"
              className="mx-3 bg-surface-800 hover:bg-surface-700 hover:text-white border border-surface-600 text-gray-100 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-surface-950"
              aria-label="Visit Jeremy's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeremylgrice/"
              className="mx-3 bg-surface-800 hover:bg-surface-700 hover:text-white border border-surface-600 text-gray-100 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-surface-950"
              aria-label="Visit Jeremy's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
