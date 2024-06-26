import { iconMap } from '../textToIcon/TextToIcon'
import TextToIcon from '../textToIcon/TextToIcon'
import Box from '../box/Box'

interface IconBoxProps {
  title: string;    
  icons: {
    name: keyof typeof iconMap;
    link: string;
  }[]
  footer : {
    description : string
    link: {
      title: string
      href : string
    }
  };
}

const IconsBox: React.FC<IconBoxProps> = ({ icons, title ,footer}) => {
  return (
    <Box className='p-6' centered={true}>
      <h2 className='text-base font-bold text-gray-600 dark:text-slate-200 mb-2'>{title}</h2>
      <ul className='flex gap-2 mb-2'>
        {icons.map((icon, index) => (
          <li key={index}>
            <a href={icon.link} target="_blank" className='text-primary-500 hover:text-primary-600 transition'>
              <TextToIcon icon={icon.name} className='text-2xl' />
            </a>
          </li>
        ))}
      </ul>
      <h2 className='text-base text-gray-600 dark:text-slate-200 mb-2'>
        {footer.description} <a className="text-base font-bold text-gray-600 dark:text-slate-200 mb-2" href={footer.link.href}>{footer.link.title}</a>
      </h2>
    </Box>
  )
}

export default IconsBox