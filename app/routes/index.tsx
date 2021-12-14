import type { MetaFunction } from 'remix'
import About from '~/components/about'

export const meta: MetaFunction = () => {
  return {
    title: 'Marcel Rebouças - Front End Developer',
    description: 'Welcome to my personal page!'
  }
}

export default function Index() {
  return <About />
}
