import { useState } from "react";
import {
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Header({ setApiKey }) {
  const [open, setOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleSaveApiKey = () => {
    setApiKey(apiKeyInput);
    handleOpen();
  };

  return (
    <div className="flex items-center justify-between h-full shadow-md">
      <div className="text-3xl flex items-center justify-between h-full gap-2 mx-auto">
        <span className="font-bold text-2xl">LingoVoyager</span>
        <img src="/logo.png" alt="" className="h-4/6 object-fit" />
      </div>
      <IconButton className="mr-6" variant="text">
        <span
          className="material-symbols-outlined text-4xl"
          onClick={handleOpen}
        >
          settings
        </span>
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Enter API Key</DialogHeader>
        <DialogBody>
          <input
            type="password"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="Enter your API key"
            className="w-full border rounded-md p-2"
          />
          <Button
            onClick={handleSaveApiKey}
            color="blue"
            className=" mt-4 px-4 py-2 rounded-md mx-auto"
          >
            Save
          </Button>
        </DialogBody>
      </Dialog>
    </div>
  );
}

export default Header;
