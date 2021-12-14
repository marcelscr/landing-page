import type { MetaFunction } from 'remix'
import About from '~/components/about'

export const meta: MetaFunction = () => {
  return {
    title: 'Marcel Rebouças - Front End Developer',
    description: "I'm a Front End Developer from Recife, Brazil."
  }
}

export default function Index() {
  return <About />
}
