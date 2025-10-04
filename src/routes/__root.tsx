import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {Header } from "@/header"
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header/>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
