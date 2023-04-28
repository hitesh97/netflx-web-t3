import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { authOptions } from "@/server/auth"
import { prisma } from "@/server/db"

import { getCurrentUser } from "@/lib/session"
import AddProfileForm from "@/components/form/add-profile-form"

export const metadata: Metadata = {
  title: "Add Profile",
  description: "Add a new profile",
}

export default async function AddProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login")
  }
  console.log('----- user :: 2 ---')
  console.log(user)
  console.log('----- user :: 2 ---')

  const profiles = await prisma.profile.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      name: true,
      language: true,
      gameHandle: true,
      pin: true,
      email: true,
      icon: true,
    },
  })

  console.log('----- profiles ---')
  console.log(profiles)
  console.log('----- profiles ---')

  const unusedIcons = await prisma.icon.findMany({
    where: {
      NOT: {
        profiles: {
          some: {
            userId: user.id,
          },
        },
      },
    },
    select: {
      id: true,
      title: true,
      href: true,
    },
  })


  let randomIcon =
    unusedIcons && unusedIcons[Math.floor(Math.random() * unusedIcons.length)]

    const iconId = profiles.length + 1;
    const iconHref = Math.floor(Math.random() * 2) === 0? "/images/classic-profile-icon-gray.webp": "/images/classic-profile-icon-red.webp"
    if(!randomIcon){
      randomIcon = {
        id: `${iconId}`,
        title: `icon_${iconId}`,
        href: iconHref
      }
    }
  // if (!profiles || !randomIcon) {
  //   redirect("/profiles")
  // }

  return (
    <section>
      {profiles.length > 4 ? (
      
      
      (
        <section className="container flex min-h-screen w-full max-w-xl flex-col items-center justify-center">
          <div className="w-full rounded-md bg-zinc-800/25 p-14 backdrop-blur-lg">
            <h1 className="mb-4 text-center text-3xl font-bold">Max profiles reached</h1>
          </div>
        </section>
      )
      ) : (<AddProfileForm profiles={profiles} profileIcon={randomIcon} />)}
      
    
    </section>
  )
}
