import type { MetaFunction } from 'remix'
import Contact from '~/components/contact'

export const meta: MetaFunction = () => {
  return {
    title: 'Marcel Rebouças - Contact'
  }
}

export default function Index() {
  return <Contact />
}
