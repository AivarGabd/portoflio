import { Avatar, Chip } from "@nextui-org/react";

const StateManagersBadgesBlock = () => (
  <>
    <Chip
      variant="flat"
      size="sm"
      avatar={<Avatar name="Redux" src="/home-page/redux.webp" />}
    >
      redux
    </Chip>

    <Chip
      variant="flat"
      size="sm"
      avatar={<Avatar name="zustand " src="/home-page/zustand.png" />}
    >
      zustand
    </Chip>
    <Chip
      variant="flat"
      size="sm"
      avatar={<Avatar name="mobx " src="/home-page/mobx.png" />}
    >
      mobx
    </Chip>
  </>
);

export default StateManagersBadgesBlock;
