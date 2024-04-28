import { Inter, Lusitana, Poppins, Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// Create an instance of Lusitana font with the desired weight (400 or 700)
const poppins = Poppins({
    weight: ["400", "900"],   
    display: "swap",
    subsets: ["latin"],
    variable: "--poppins-font",
  });
  
  // For variable fonts.
  // you have to specify weight= "variable" value only.
  
  const open_sans = Open_Sans({
    weight: "variable",
    style: ["italic", "normal"],
    display: "swap",
    subsets: ["latin"],
    variable: "--open-sans-font",
  });

  const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
  
  export { inter, lusitana, poppins, open_sans };
