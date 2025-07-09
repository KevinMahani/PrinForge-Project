// import Link from "next/link"
// import PFLogoIcon from "@/public/printforge-logo-icon.svg"
// import PFLogo from "@/public/printforge-logo.svg"

// export default function Navbar() {
//   return (
//     <header className="w-full bg-white">
//       <nav className="flex justify-between px-6 py-4">
//         <Link href="/">
//           <div className="relative cursor-pointer">
//             {/* Desktop Logo */}
//             <img
//               src={PFLogo.src}
//               alt="PrintForge Logo"
//               className="w-[200px] h-auto hidden md:block"
//             />
//             {/* Mobile Logo */}
//             <img
//               src={PFLogoIcon.src}
//               alt="PrintForge Logo"
//               className="w-[40px] h-auto block md:hidden"
//             />
//           </div>
//         </Link>
//         <ul className="flex items-center gap-2.5">
//           <li className="text-sm uppercase cursor-pointer">
//             <Link href="/3d-models">3D Models</Link>
//           </li>
//           <li className="text-sm uppercase cursor-pointer">
//             <Link href="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }
// ................................................


// // Quick Link Refactors
// "use client"

// import Link from "next/link"
// import NavLink from "@/app/components/NavLink"
// import PFLogoIcon from "@/public/printforge-logo-icon.svg"
// import PFLogo from "@/public/printforge-logo.svg"
// import { usePathname} from "next/navigation"
 
// export default function Navbar() {
//   const pathname = usePathname()
//   return (
//     <header className="w-full bg-white">
//       <nav className="flex justify-between px-6 py-4">
//         <Link href="/">
//           <div className="relative cursor-pointer">
//             {/* Desktop Logo */}
//             <img
//               src={PFLogo.src}
//               alt="PrintForge Logo"
//               className="w-[200px] h-auto hidden md:block"
//             />
//             {/* Mobile Logo */}
//             <img
//               src={PFLogoIcon.src}
//               alt="PrintForge Logo"
//               className="w-[40px] h-auto block md:hidden"
//             />
//           </div>
//         </Link>
//         <ul className="flex items-center gap-2.5">
//           <li className="text-sm uppercase cursor-pointer">
//             <NavLink href="/3d-models" isActive={pathname.startsWith("/3d-models") } >3D Models</NavLink>
//           </li>
//           <li className="text-sm uppercase cursor-pointer">
//             <NavLink href="/about" isActive={pathname === "/about" } >About</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }
// .......................................................

"use client"

import Image from "next/image"; // ✅ Import Image
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <div className="hidden md:block w-[200px] h-auto relative">
              <Image
                src={PFLogo}
                alt="PrintForge Logo"
                width={200}
                height={40}
                priority
              />
            </div>

            {/* Mobile Logo */}
            <div className="block md:hidden w-[40px] h-auto relative">
              <Image
                src={PFLogoIcon}
                alt="PrintForge Logo"
                width={40}
                height={40}
                priority
              />
            </div>
          </div>
        </Link>

        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/3d-models" isActive={pathname.startsWith("/3d-models")}>
              3D Models
            </NavLink>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/about" isActive={pathname === "/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
