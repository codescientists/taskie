import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchTasks, updateTaskStatus } from '../redux/tasksSlice';
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, KeyboardSensor } from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import Column from './Column';


const Kanban: React.FC = () => {
  const dispatch = useDispatch();
  const fetchCols = useSelector((state: RootState) => state.tasks.columns);

  useEffect(() => {
    dispatch(fetchTasks());
    setColumns(fetchCols)
  }, []);

  const [columns, setColumns] = useState(fetchCols)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const onDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;

      const activeIndex = active.data.current.sortable.index;
      const overIndex = over.data.current?.sortable.index || 0;


      if (activeContainer === overContainer) {
        const items = columns[activeContainer].items;
        const newItems = arrayMove(items, activeIndex, overIndex);

        dispatch(updateTaskStatus({ id: active.id, status: activeContainer }));

        setColumns((prev) => ({
          ...prev,
          [activeContainer]: {
            ...columns[activeContainer],
            items: newItems,
          },
        }));
      } else {

        const activeItems = [...columns[activeContainer].items];
        const overItems = [...columns[overContainer].items];

        const activeIndex = activeItems.findIndex(item => item.id === active.id);
        const overIndex = overItems.findIndex(item => item.id === over.id);

        const [movedItem] = activeItems.splice(activeIndex, 1);
        overItems.splice(overIndex, 0, movedItem);

        dispatch(updateTaskStatus({ id: active.id, status: overContainer }));


        setColumns((prev) => ({
          ...prev,
          [activeContainer]: {
            ...columns[activeContainer],
            items: activeItems,
          },
          [overContainer]: {
            ...columns[overContainer],
            items: overItems,
          },
        }));
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <div className="flex items-center justify-center overflow-x-auto w-full">
        {Object.entries(columns).map(([columnId, column], index) => (
          <div className="mx-4" key={columnId}>
            <Column id={columnId} items={column.items} title={column.title}>
              <SortableContext items={column.items} id={columnId} strategy={verticalListSortingStrategy}>
                {column.items.map((item, index) => (
                  <TaskCard key={item.id} item={item} index={index} />
                ))}
              </SortableContext>
            </Column>
          </div>
        ))}
      </div>
    </DndContext>
  );
};

export default Kanban;
