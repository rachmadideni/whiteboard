"use client"

import { Avatar as BaseAvatar } from "antd";

const AvatarGroup = () => {
  return (
    <BaseAvatar.Group>
      <BaseAvatar shape="circle" src={`/images/avatar-color.png`} />
      <BaseAvatar shape="circle" src={`/images/avatar-grayscale.png`} />
      <BaseAvatar shape="circle" src={`/images/avatar-color.png`} />
    </BaseAvatar.Group>
  );
};

export default AvatarGroup;
