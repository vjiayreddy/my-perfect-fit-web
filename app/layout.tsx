import ThemeRegistry from "@/theme/themeRegistry";
import NextAuthSessionProvider from "./api/auth/[...nextauth]/providers/AuthSessionProvider";
import NextThemeProvider from "@/theme/nextThemeProvider";
import { ReduxStateProviders } from "@/redux/provider";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import "./globals.scss";
import ApolloClientProvider from "@/apollo/provider";

export default function RootLayout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxStateProviders>
          <ApolloClientProvider>
            <NextAuthSessionProvider>
              <NextThemeProvider>
                <ThemeRegistry>
                  <MainLayout>
                    {children}
                    {model}
                  </MainLayout>
                </ThemeRegistry>
              </NextThemeProvider>
            </NextAuthSessionProvider>
          </ApolloClientProvider>
        </ReduxStateProviders>
      </body>
    </html>
  );
}
