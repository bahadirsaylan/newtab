import { Plus } from "preact-feather"
import { addSite, useStore } from "../../store"
import { parseForm } from "../../utils/form"
import Button from "../Button"
import Input from "../Input"
import Modal from "../Modal"

interface IProps {
  show: boolean
  onClose: () => void
}

function AddSiteModal({ show, onClose }: IProps) {
  const currentCategory = useStore.currentCategory()[0]

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const site = parseForm<{ name: string; url: string }>(e.currentTarget)
    console.log(site)
    addSite(site, currentCategory)
    onClose()
    e.currentTarget.reset()
  }

  return (
    <Modal heading="Add Shortcut" show={show} onClose={onClose}>
      <form class="space-y-4" onSubmit={handleSubmit}>
        <Input name="name" label="Name" placeholder="Google" required />
        <Input
          name="url"
          label="URL"
          placeholder="https://google.com"
          required
        />
        <Button className="w-full gap-2">
          <Plus /> Add
        </Button>
      </form>
    </Modal>
  )
}

export default AddSiteModal
