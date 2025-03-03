import Menu from "@/components/menu";
import "./globals.css";
import ThemeProvider from "@/components/themeProvider";
import Footer from "@/components/footer";
import PageWrapper from "@/components/pageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Menu />
          <PageWrapper>
            {children}
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
