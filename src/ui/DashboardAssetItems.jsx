import { useMotionValue, Reorder } from 'framer-motion';
import { useRaisedShadow } from '../services/use-raised-shadow';
import DraggableIcon from './DraggableIcon';

function DashboardAssetItems({ item }) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      value={item}
      id={item}
      drag
      dragConstraints={{ left: 0, right: 1 }}
      style={{ boxShadow, y }}
      className="flex items-center bg-stone-100 py-2 text-center text-xs"
    >
      <DraggableIcon />

      <p className="flex basis-1/4 justify-start px-6 max-sm:hidden">
        <span className="select-none">{item.name}</span>
      </p>
      <p className="basis-1/4 px-6 text-center sm:hidden">
        <span className="select-none"> {item.symbol}</span>
      </p>
      <p className="basis-1/4 select-none px-6 text-center">{item.category}</p>
      <p className="basis-1/4 select-none px-6">{item.worth}</p>
      <p className="basis-1/4 select-none px-6">{item.notification}</p>
    </Reorder.Item>
  );
}

export default DashboardAssetItems;
