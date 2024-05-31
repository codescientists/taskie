import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CiClock1 } from 'react-icons/ci';


interface TaskCardProps {
  item: {
    id: string;
    title: string;
    description: string;
    status: string;
    due: Date;
  };
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ item, index }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id });


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className={`${isDragging && 'bg-gray-50'} bg-white border py-4 rounded-md mt-2 shadow`}>
        <p className="border-l-2 border-red-500 pl-3 font-semibold">{item.title}</p>
        <div className="pl-3 pt-3">
          <p className="flex items-center text-sm text-gray-500"><CiClock1 className='mr-1' /> {item.dueDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
