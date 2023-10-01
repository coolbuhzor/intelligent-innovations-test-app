interface ISideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

interface LayoutProps {
  children: ReactNode;
}

interface PhotoType {
  id: number;
  urls: { regular: string | StaticImport };
  alt_description: string;
  user: {
    first_name: string | null;

    last_name: string | null;
    location: string | null;
  };
}
