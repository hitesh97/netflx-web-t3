"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

const LoginButton = ({strategy}: {strategy:string}) => {
  const [isLoading, setIsLoading] = useState(false)

  const loginWithStrategy = async () => {
    setIsLoading(true)
    try {
      await signIn(strategy)
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      )
    } finally {
      setTimeout(() => setIsLoading(false), 2500)
    }
  }

  {return strategy === "discord" ? (<Button
    aria-label="Login with Discord"
    variant="brand"
    className="w-full"
    onClick={isLoading ? undefined : loginWithStrategy}
    disabled={isLoading}
  >
    {isLoading ? (
      <Icons.spinner
        className="mr-2 h-4 w-4 animate-spin"
        aria-hidden="true"
      />
    ) : (
      <Icons.discord className="mr-2 h-4 w-4" aria-hidden="true" />
    )}
    Discord
  </Button>) :  (
    <Button
      aria-label="Login with Google"
      variant="brand"
      className="w-full"
      onClick={isLoading ? undefined : loginWithStrategy}
      disabled={isLoading}
    >
      {isLoading ? (
        <Icons.spinner
          className="mr-2 h-4 w-4 animate-spin"
          aria-hidden="true"
        />
      ) : (
        <Icons.google className="mr-2 h-4 w-4" aria-hidden="true" />
      )}
      Google
    </Button>
  )}
}

export default LoginButton
