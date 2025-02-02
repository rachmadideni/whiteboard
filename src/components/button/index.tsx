"use client";

import { Button, ButtonProps } from "antd";
import {
  PlayIcon,
  PersonIcon,
  DownloadIcon,
  MoreIcon,
  UndoIcon,
  RedoIcon,
  MenuIcon,
  UserIcon,
  OctopusIcon,
} from "./svg-icon";

const MenuButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<MenuIcon />} {...props} />
  );
};

const PresentButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<PlayIcon />} {...props}>
      Present
    </Button>
  );
};

const InviteButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<PersonIcon />} {...props}>
      Invite
    </Button>
  );
};

const DownloadButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="solid" icon={<DownloadIcon />} {...props}>
      Download
    </Button>
  );
};

const MoreButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<MoreIcon />} {...props} />
  );
};

const UndoButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<UndoIcon />} {...props} />
  );
};

const RedoButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<RedoIcon />} {...props} />
  );
};

// Right Panel Button
const UserButton = (props: ButtonProps) => {
  return (
    <Button color="default" variant="outlined" icon={<UserIcon />} {...props} />
  );
};

const OctopusButton = (props: ButtonProps) => {
  return (
    <Button
      color="default"
      variant="outlined"
      icon={<OctopusIcon />}
      {...props}
    />
  );
};

export {
  MenuButton,
  PresentButton,
  InviteButton,
  DownloadButton,
  MoreButton,
  UndoButton,
  RedoButton,
  UserButton,
  OctopusButton,
};
