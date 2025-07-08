// // Add categories Nav Bar


// import {ReactNode} from "react"
// import type {Category} from "@/app/types"
// import { getAllCategories } from "@/app/lib/categories"
// import Link from "next/link"

// export default function ModelsLayout({children}: {children: React.ReactNode}) {
//     const categories : Category[] = getAllCategories()
//     console.log(categories)
//     return (
//     <div>
//         <nav>
//             <Link href="/3d-models">All</Link>
//             {categories.map(cat => (
//                 <Link
//                  key={cat.slug}
//                  href={`/3d-models/categories/${cat.slug}`} >{cat.displayName}</Link>
//             ) )}

//         </nav>
//         {children}
//     </div>

//     )

// }
// ...................................................

import type { ReactNode } from "react"
import CategoriesNav from "@/app/components/CategoriesNav"

export default function ModelsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNav />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}