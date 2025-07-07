import SpreadsheetPlaceholder from "./components/SpreadsheetPlaceholder"
import SidebarTabs from "./components/SideBarTabs"
import ToolBar from "./components/ToolBar"
import TopBar from "./components/TopBar"

function App() {
  return (
    <div className="flex flex-col h-screen">
    <TopBar/>
    <ToolBar/>
    <SpreadsheetPlaceholder/>
    <SidebarTabs/>
    </div>
  )
}

export default App
