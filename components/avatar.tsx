type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img 
        src={picture} 
        className="w-6 h-6 rounded-full mr-4" 
        alt={`Profile picture of ${name}`}
        loading="lazy"
      />
      <div className="text-sm font-bold">{name}</div>
    </div>
  )
}

export default Avatar
