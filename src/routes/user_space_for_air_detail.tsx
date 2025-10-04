import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '@/component/dashbord'

export const Route = createFileRoute('/user_space_for_air_detail')({
  component: Dashboard,
})


