import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-7xl md:text-1xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Vet That Codes</a>
      </Link>
    </h2>
  )
}

export default Header
