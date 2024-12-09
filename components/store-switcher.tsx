import { Store } from "@prisma/client"
import { PopoverTrigger } from "@/components/ui/popover"
import { useStoreModal } from "@/hooks/use-store-model"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import { useState } from "react"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[]
}


const StoreSwitcher = ({
    className,
    items = [],
    ...props
  }: StoreSwitcherProps) => {
    const storeModal = useStoreModal()
    const params = useParams()
    const router = useRouter()
  
    const [open, setOpen] = useState(false)
  
    const formattedItems = items.map((item) => ({
      label: item.name,
      value: item.id,
    }))
  
  return (
    <div>
      StoreSwitcher
    </div>
  )
}

export default StoreSwitcher
