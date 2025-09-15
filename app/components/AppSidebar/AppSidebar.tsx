import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import AppSidebarContent from "./AppSidebarContent";

const AppSidebar = () => {
  return (
    <Sidebar
      side="right"
      className="z-50"
      style={
        {
          "--sidebar-width": "35.25rem",
          "--sidebar-width-mobile": "20rem",
        } as React.CSSProperties
      }
    >
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <AppSidebarContent />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
