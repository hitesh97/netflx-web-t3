import { Suspense } from "react"
import type { CategorizedShows } from "@/types"

import { getShows } from "@/lib/fetchers"
import { getCurrentUser } from "@/lib/session"
import Hero from "@/components/hero"
import LoadingScreen from "@/components/screens/loading-screen"
import ShowsContainer from "@/components/shows-container"
import { Sidebar } from "@/components/layouts/sidebar"

export default async function Home() {
  const user = await getCurrentUser()

  const allShows = await getShows("movie")

  const allShowsByCategory: CategorizedShows[] = [
    {
      title: "Trending Now",
      shows: allShows.trending,
    },
    {
      title: "Top Rated",
      shows: allShows.topRated,
    },
    {
      title: "Action Thrillers",
      shows: allShows.action,
    },
    {
      title: "Comedies",
      shows: allShows.comedy,
    },
    {
      title: "Scary Movies",
      shows: allShows.horror,
    },
    {
      title: "Romance Movies",
      shows: allShows.romance,
    },
    {
      title: "Documentaries",
      shows: allShows.docs,
    },
  ]

  return (
    <section>
      <Suspense fallback={<LoadingScreen />}>
        <div className="grid md:grid-cols-12">
          {/* <Hero shows={allShows.netflix ?? []} />
          <ShowsContainer user={user} shows={allShowsByCategory} /> */}
          <Sidebar playlists={["list 1", "list 2", "list 3"]} className="hidden md:block" />
          <div className="col-span-3 md:col-span-11 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
Other content area
                </div>
                </div>
        </div>
      </Suspense>
    </section>
  )
}
