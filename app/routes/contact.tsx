import type { MetaFunction } from 'remix'
import Contact from '~/components/contact'

export const meta: MetaFunction = () => {
  return {
    title: 'Contact Marcel Rebouças',
    description: 'You can contact me via LinkedIn or email.'
  }
}

export default function Index() {
  return <Contact />
}
