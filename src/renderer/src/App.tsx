import { Content, RootLayout, Sidebar, Topbar } from '@/components'

function App(): JSX.Element {
  return (
    <>
      <RootLayout>
        <Topbar>Topbar</Topbar>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </RootLayout>
    </>
  )
}

export default App
