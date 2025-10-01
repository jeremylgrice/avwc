import Link from 'next/link'

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between">
      <h2 className="text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"> 
        <Link href="/">
          <a className="hover:underline">Vet That Codes</a>
        </Link>
      </h2>
    </section>
  )
}

export default Header
