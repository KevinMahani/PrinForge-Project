// // PrintForge - Search Bar using native form


//     /**
//      * Challenge:
//      * 1. Add a form with an input above the ModelsGrid. Don't worry about
//      *    a label for now.
//      * 2. Get access to the query from searchParams. Optional: use the
//      *    ModelsPageProps from our types file to satisy TypeScript.
//      * 3. Filter down the models being passed to ModelsGrid. Include:
//      *    a. any models with a `name` that includes the query, AND
//      *    b. any models with a `description` that includes the query.
//      * 
//      *    Make sure to ignore capitalization when filtering.
//      * 
//      *    A good test search term is "tool"
//      * 
//      * Optional: try to style it like the design in Figma
//      */

// import ModelsGrid from "@/app/components/ModelsGrid"
// import type { ModelsPageProps } from "@/app/types"
// import { getModels } from "@/app/lib/models"

// export default async function Page({ searchParams }: ModelsPageProps) {
//     /**
//      * Challenge:
//      * Optional: try to style it like the design in Figma
//      */
//     const models = await getModels()
//     const query = (await searchParams)?.query?.toLowerCase() || ""

//     const filteredModels = query
//         ? models.filter(model =>
//             model.name.toLowerCase().includes(query) ||
//             model.description.toLowerCase().includes(query)
//         )
//         : models

//     return (
//         <>
//             <form className="w-full px-5 md:px-0 md:max-w-xl">
//                 <input
//                     type="text"
//                     name="query"
//                     placeholder="E.g. dragon"
//                     autoComplete="off"
//                     defaultValue={query}
//                     className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
//                 />
//             </form>
//             <ModelsGrid title="3D Models" models={filteredModels} />
//         </>
//     )
// }
// .....................................................


// PrintForge - Upgrade to Next's Form Component

import Form from "next/form"
import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page({ searchParams }: ModelsPageProps) {
    const models = await getModels()
    const query = (await searchParams)?.query?.toLowerCase() || ""

    const filteredModels = query
        ? models.filter(model =>
            model.name.toLowerCase().includes(query) ||
            model.description.toLowerCase().includes(query)
        )
        : models

    return (
        <>
            <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
                <input
                    type="text"
                    name="query"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                    className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </Form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}




