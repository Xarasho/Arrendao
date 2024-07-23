import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Arrendao | Inmuebles en México: venta y renta e inversión en departamentos, casas y otras propiedades',
  description: 'Servicios Inmobiliarios de venta, renta e inversión en casas, departamentos y otras propiedades',
  keywords: 'Real Estate, Inmuebles, venta, renta, inversión, casas, departamentos, Arrendao, proptech'
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='es'>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
};

export default MainLayout;
