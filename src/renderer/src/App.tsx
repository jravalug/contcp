import { Content, DraggableTopbar, RootLayout, Sidebar } from '@/components'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopbar />
      <RootLayout className="">
        <Sidebar className="p-2"></Sidebar>
        <Content className="border-l border-l-slate-500/30 bg-slate-700/50 border-t border-t-slate-500/30"></Content>
      </RootLayout>
    </>
  )
}

export default App
