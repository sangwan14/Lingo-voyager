import { Button } from "@material-tailwind/react";
import LoadingIcons from "react-loading-icons";

const Actions = ({ onStartButtonClick, isLoading, textareaReadOnly }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Button  className="h-12 w-24"><LoadingIcons.TailSpin className="h-full mx-auto"/></Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full">
      <Button onClick={onStartButtonClick} className="h-12 w-24"> 
        {textareaReadOnly ? "Edit" : "Start"}
      </Button>
    </div>
  );
};

export default Actions;
