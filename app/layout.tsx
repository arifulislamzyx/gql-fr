// components/RootLayout.tsx

import { ApolloProvider } from "@apollo/client";
import { Inter } from "next/font/google";
import StartApolloProvider from "@/Grapgql/apollo";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StartApolloProvider> {children}</StartApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
