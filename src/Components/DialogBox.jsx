import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

const DialogBox = ({ open, setOpen, data }) => {
  return (
    <>
      <Dialog className="min-w-lg" open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{data.title}</DialogTitle>
            <img className="rounded-2xl" src={data.image} alt="" srcset="" />
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
