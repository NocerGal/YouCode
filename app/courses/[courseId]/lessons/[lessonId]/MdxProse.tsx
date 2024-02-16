import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';

export type MdxProseProps = {
  markdown: string;
};

export const MdxProse = ({ markdown }: MdxProseProps) => {
  return (
    <div className="prose m-auto dark:prose-invert xl:prose-xl">
      <MDXRemote
        options={{
          mdxOptions: {
            // @ts-expect-error
            rehypePlugins: [rehypePrism],
          },
        }}
        source={markdown}
      />
    </div>
  );
};
