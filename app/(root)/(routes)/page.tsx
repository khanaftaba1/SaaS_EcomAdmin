"use client";

import { StoreModal } from "@/components/modals/store-model";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-model";
import { UserButton } from '@clerk/nextjs'
import { useEffect } from "react";

export default function SetupPage() {

  const onOpen = useStoreModal((state)=>state.onOpen)
  const isOpen = useStoreModal((state)=>state.isOpen)

  useEffect(() => {
    console.log("isOpen", isOpen);
    if (!isOpen){
      onOpen()
    }
  }, [onOpen, isOpen])
  

  return (
    <div className="p-4">
      This is a protected page
    </div>
  )
}
