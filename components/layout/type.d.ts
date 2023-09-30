interface ISideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

interface LayoutProps {
  children: ReactNode;
}
