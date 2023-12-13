import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/badge';

import { CourseLessonItem } from '../../course.query';
import { CheckCircle, Circle, CircleDashed } from 'lucide-react';
import Link from 'next/link';

export type LessonItemProps = {
  lesson: CourseLessonItem;
};

export const getLessonIcon = (status: CourseLessonItem['progress']) => {
  if (status === 'COMPLETED') {
    return CheckCircle;
  }
  if (status === 'IN_PROGRESS') {
    return Circle;
  }

  return CircleDashed;
};

export const LessonItem = ({ lesson }: LessonItemProps) => {
  const Icon = getLessonIcon(lesson.progress);

  return (
    <Link href={`/courses/${lesson.courseId}/lessons/${lesson.id}`}>
      <div className="flex items-center gap-3 rounded border border-border bg-card px-4 py-2 transition-colors hover:bg-accent">
        <Icon size={16} />
        <Typography variant="small" className="flex-1">
          {lesson.name}
        </Typography>
        <Badge className="ml-auto">{lesson.state}</Badge>
      </div>
    </Link>
  );
};
