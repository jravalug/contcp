import { Content, NavList, RootLayout, Sidebar, TitleBar } from '@/components'
import { Outlet } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <>
      <TitleBar />

      <RootLayout className="">
        <Sidebar>
          <NavList />
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
