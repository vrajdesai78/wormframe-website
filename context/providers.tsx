"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { arbitrum, avalanche, base, optimism } from "viem/chains";

const config = createConfig(
  getDefaultConfig({
    chains: [base, avalanche, optimism, arbitrum],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
    appName: "CCTP Frame",
    ssr: true,
  })
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme='nouns'>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
