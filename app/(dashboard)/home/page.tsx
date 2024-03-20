// import { delay } from "@/lib/async";

import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Suspense } from 'react'

const getData = async () => {
  const user = await getUserFromCookie(cookies())

  console.log('user', user)
}

export default async function Page() {
  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <div className=" h-full items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">Hello user</div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          <div className="w-1/3 p-3"></div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  )
}
