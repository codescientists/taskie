import { useDroppable } from '@dnd-kit/core';

interface ColumnProps {
  id: string;
  items: any[];
  title: string;
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ id, items, title, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div className={`w-72 min-h-[500px] rounded-md px-4 py-3 bg-gray-100 ${isOver && 'bg-white border'}`} ref={setNodeRef}>
      <h2 className="text-md font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default Column;
