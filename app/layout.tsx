// import "./globals.css";
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <header>
//           <nav>
//             <p>3D Logo</p>
//             <p>Logo</p>
//             <p>Logo</p>
//             <p>Logo</p>
//           </nav>
//         </header>
//         {children}
//       </body>
//     </html>
//   );
// }
// .................................................

// Challenge - Add Header to PrintForge

// import "./globals.css";

/**
 * Challenge: Add the header to the project
 * 
 * Hint: for the printforge logo(s), use a string src on the `<img />`:
 * src="/printforge-logo.svg" (Desktop logo)
 * src="/printforge-logo-icon.svg" (Mobile logo)
 */

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <header className="w-full bg-white">
//           <nav className="flex justify-between px-6 py-4">
//             <div className="relative">
//               {/* Desktop logo */}
//               <img
//                 src="/printforge-logo.svg"
//                 alt="PrintForge Logo"
//                 className="w-[200px] h-auto hidden md:block"
//               />
//               {/* Mobile logo */}
//               <img
//                 src="/printforge-logo-icon.svg"
//                 alt="PrintForge Logo"
//                 className="w-[40px] h-auto block md:hidden"
//               />
//             </div>
//             <ul className="flex items-center gap-2.5">
//               <p>3D Models</p>
//               <p>About</p>
//             </ul>
//           </nav>
//         </header>
//         {children}
//       </body>
//     </html>
//   );
// }

// ................................................

// // Optimizing Fonts


// import "./globals.css";
// import {Albert_Sans, Montserrat_Alternates } from "next/font/google"
// import MobileLogo from "@/public/printforge-logo-icon.svg"
// import DesktopLogo from "@/public/printforge-logo.svg"

// const albertSans = Albert_Sans( {
//   subsets: ["latin"],
//   display: "swap",
// })

// const montserratAlternates = Montserrat_Alternates ( {
//   subsets: ["latin"],
//   variable: "--font-montserrat-alternates",
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// })


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
//         <header className="w-full bg-white">
//           <nav className="flex justify-between px-6 py-4">
//             <div className="relative">
//               {/* Desktop logo */}
//               <img
//                 src={DesktopLogo.src}
//                 alt="PrintForge Logo"
//                 className="w-[200px] h-auto hidden md:block"
//               />
//               {/* Mobile logo */}
//               <img
//                 src={MobileLogo.src}
//                 alt="PrintForge Logo"
//                 className="w-[40px] h-auto block md:hidden"
//               />
//             </div>
//             <ul className="flex items-center gap-2.5">
//               <p>3D Models</p>
//               <p>About</p>
//             </ul>
//           </nav>
//         </header>
//         {children}
//       </body>
//     </html>
//   );
// }
// ...............................................

// // Challenge - Add Links to Navbar

// import "./globals.css";
// import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
// import PFLogoIcon from "@/public/printforge-logo-icon.svg"
// import PFLogo from "@/public/printforge-logo.svg"
// import Link from "next/link"
// import type { RootLayoutProps } from "@/app/types";


// const albertSans = Albert_Sans({
//   subsets: ["latin"],
//   display: "swap"
// })

// const montserratAlternates = Montserrat_Alternates({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-montserrat-alternates"
// })

// /**
//  * Challenge:
//  * Update the header code so our users can more easily navigate between routes.
//  * For now, send the "3d Models" link to a non-existant "/3d-models" route,
//  * we'll work on creating that page soon.
//  * 
//  * For the logo images, you can surround the entire `div` containing the images
//  * with the Link component.
//  */

// export default function RootLayout({children}: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
//         <header className="w-full bg-white">
//           <nav className="flex justify-between px-6 py-4">
//             <Link href="/"><div className="relative cursor-pointer">
//               {/* Desktop Logo */}
//               <img
//                 src={PFLogo.src}
//                 alt="PrintForge Logo"
//                 className="w-[200px] h-auto hidden md:block"
//               />
//               {/* Mobile Logo */}
//               <img
//                 src={PFLogoIcon.src}
//                 alt="PrintForge Logo"
//                 className="w-[40px] h-auto block md:hidden"
//               />
//             </div></Link>
//             <ul className="flex items-center gap-2.5">
//               <li className="text-sm uppercase cursor-pointer"><Link href="/3d-models">3D Models</Link></li>
//               <li className="text-sm uppercase cursor-pointer"><Link href="/about">About</Link></li>
//             </ul>
//           </nav>
//         </header>
//         {children}
//       </body>
//     </html>
//   );
// }
// ................................................

// Model Detail Page

import "./globals.css";
import type { RootLayoutProps } from "@/app/types"
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Navbar from "@/app/components/Navbar"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
