import { useState } from "react";
import {
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Select, Space } from "antd";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

function Header({ setApiKey, setModel }) {
  const [open, setOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleSaveApiKey = () => {
    setApiKey(apiKeyInput);
    handleOpen();
  };

  return (
    <div className="flex items-center justify-between h-full shadow-md dark:shadow-gray-700">
      <div className="text-3xl flex items-center justify-between h-full gap-2 ml-6">
        <span className="font-bold text-2xl">LingoVoyager</span>
        <img src="/logo.png" alt="" className="h-4/6 object-fit dark:invert" />
      </div>
      <div className="flex gap-4 mr-6 items-center">
        <Select
          defaultValue="gpt-3.5-turbo"
          style={{ width: 100 }}
          onChange={(val) => setModel(val)}
          options={[
            { value: "gpt-3.5-turbo", label: "GPT-3.5" },
            { value: "gpt-4-1106-preview", label: "GPT-4" },
          ]}
        />
        <IconButton variant="text">
          <span
            className="material-symbols-outlined text-4xl dark:text-white"
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
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
