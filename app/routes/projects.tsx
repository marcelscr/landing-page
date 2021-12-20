import type { MetaFunction } from 'remix'
import Projects from '~/components/projects'

export const meta: MetaFunction = () => {
  return {
    title: 'Projects - Marcel Rebouças',
    description: 'Coding and having fun through redoing well-known apps.'
  }
}

export default function Index() {
  return <Projects />
}
