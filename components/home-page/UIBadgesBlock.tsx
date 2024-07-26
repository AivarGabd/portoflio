import { Avatar, Chip } from "@nextui-org/react";

const UIBadgesBlock = () => (
  <>
    <Chip variant="flat" avatar={<Avatar src="/home-page/tailwind.png" />}>
      tailwind
    </Chip>
    <Chip variant="flat" avatar={<Avatar src="/home-page/framer-motion.png" />}>
      framer-motion
    </Chip>
    <Chip
      variant="flat"
      avatar={<Avatar name="shadcn" src="/home-page/shadcn.png" />}
    >
      shadcn
    </Chip>
    <Chip
      variant="flat"
      avatar={<Avatar name="next-ui" src="/home-page/nextui.png" />}
    >
      next ui
    </Chip>
  </>
);

export default UIBadgesBlock;
