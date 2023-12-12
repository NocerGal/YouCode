import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from '@/components/layout/layout';

import { CourseCard } from '../courses/page';
import { prisma } from '@/lib/prisma';
import { getCourses } from '../courses/course.query';

export type pageProps = {};

export default async function ExplorerPage(props: pageProps) {
  const courses = await getCourses();

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Explorer</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id}></CourseCard>
        ))}
      </LayoutContent>
    </Layout>
  );
}
