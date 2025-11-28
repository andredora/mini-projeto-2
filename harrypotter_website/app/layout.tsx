import './globals.css';
import ContentSwitcher from './components/ContentSwitcher';
import AppProviders from "./AppProviders";

export const metadata = {
  title: 'Harry Potter API',
  description: 'Explore o mundo mágico de Harry Potter',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      <body className="bg-cover bg-center bg-fixed">
        <AppProviders>
            <ContentSwitcher />
            {children}
        </AppProviders>
      </body>
    </html>
  );
}
