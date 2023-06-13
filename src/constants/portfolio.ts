import { IPortfolioCard } from '@/types'

export const portfolios: IPortfolioCard[] = [
  {
    name: 'Atlantis World',
    description:
      'Atlantis World is building the Web3 social metaverse by connecting Web3 with social, gaming and education in one lightweight virtual world.',
    image: '/atlantis.jpg',
    tools: ['ethers.js', 'Next.js', 'Tailwind CSS', 'solidity'],
  },
  {
    name: 'Affyn',
    description:
      'Affyn is a metaverse project that operates a Blockchain-based game startup to create a sustainable gaming economy.',
    image: '/affyn.jpg',
    link: 'https://www.affyn.com/',
    tools: [
      'ethers.js',
      'web3.js',
      'Next.js',
      'Tailwind CSS',
      'Framer',
      'AWS',
      'IAM',
    ],
  },
  {
    name: 'Interseed',
    description:
      'Platform for founders to become fund-ready and talents to build their portfolio with the help of funding and jobs opportunities.',
    image: '/interseed.png',
    link: 'https://app.interseed.co/',
    tools: ['Next.js', 'Nest.js', 'Tailwind CSS', 'sanity'],
  },
  {
    name: 'Flex',
    description:
      'Complete business payment and spend management solution that will dramatically improve how SMEs access working capital and manage business expenses.',
    image: '/flex.png',
    link: 'https://www.flexnow.co/',
    tools: ['Next.js', 'Tailwind CSS', 'sanity', 'Framer'],
  },
  {
    name: 'Dev Setup',
    description:
      'Developmet Setup using Arch Linux as main OS, neovim as editor, and other tools to boost developer experience and productivity.',
    image: '/dev-setup.png',
    link: 'https://github.com/RielJ/dotfiles',
    tools: ['lua', 'bash', 'unix', 'Arch Linux', 'python', 'neovim'],
  },
  // {
  //   name: 'SoA Manager',
  //   description:
  //     'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  // },
]
