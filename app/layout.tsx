import './globals.css'

export const metadata = {
  title: 'Salão Luxo - Agendamento',
  description: 'Seu salão de beleza digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
